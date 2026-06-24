// Generate src/api/schema.d.ts from Phoenix-API's OpenAPI spec.
//
// Why this script instead of calling openapi-typescript directly on the URL:
// Phoenix-API declares `Authorization` as an explicit *required header parameter* on 181
// endpoints, and defines no `securitySchemes`. That would force every typed call site to
// pass a dummy `Authorization` string, even though our http middleware injects the real
// Bearer token automatically. So before codegen we (a) strip those redundant Authorization
// header params and (b) register a proper bearer securityScheme. The runtime behaviour is
// unchanged — only the generated *types* get cleaner. See docs/BACKEND-GAP.md (#auth-spec).
import { writeFile } from 'node:fs/promises';
import openapiTS, { astToString } from 'openapi-typescript';

const SPEC_URL = process.env.EXPO_PUBLIC_API_URL
  ? `${process.env.EXPO_PUBLIC_API_URL}/openapi.json`
  : 'http://localhost:8000/openapi.json';
const OUT = new URL('../src/api/schema.d.ts', import.meta.url);

const res = await fetch(SPEC_URL);
if (!res.ok) throw new Error(`Failed to fetch ${SPEC_URL}: ${res.status}`);
const spec = await res.json();

let stripped = 0;
for (const methods of Object.values(spec.paths ?? {})) {
  for (const op of Object.values(methods)) {
    if (!op || typeof op !== 'object' || !Array.isArray(op.parameters)) continue;
    const before = op.parameters.length;
    op.parameters = op.parameters.filter(
      (p) => !(p?.name === 'Authorization' && p?.in === 'header'),
    );
    stripped += before - op.parameters.length;
  }
}

// Express auth the way it actually works: a bearer token security scheme.
spec.components ??= {};
spec.components.securitySchemes = {
  bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
};

const ast = await openapiTS(spec);
await writeFile(OUT, astToString(ast));
console.log(`✓ schema.d.ts generated (stripped ${stripped} Authorization header params)`);
