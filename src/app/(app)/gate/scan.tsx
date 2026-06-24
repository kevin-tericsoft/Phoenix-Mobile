import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText, PressableScale } from '@/components/ui';
import { useGateAction, useLookupVisit } from '@/features/gate/queries';
import { GateVisitCard } from '@/features/gate/GateVisitCard';
import { palette, radius, spacing } from '@/theme';
import type { MyVisit } from '@/features/gate/queries';

/**
 * QR/barcode scan to check a visitor in. expo-camera's barcodeScannerSettings does the
 * decoding natively; on scan we look the code up and show the gate card with its action.
 * Camera can't run in the iOS Simulator — there we fall back to a message + manual entry.
 */
export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const lookup = useLookupVisit();
  const action = useGateAction();
  const [found, setFound] = useState<MyVisit | null>(null);
  const scannedRef = useRef(false);

  if (!permission) return <View style={styles.root} />;
  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <AppText variant="h2" style={{ textAlign: 'center' }}>Camera access needed</AppText>
        <AppText variant="body" color={palette.ink400} style={{ textAlign: 'center' }}>
          To scan visitor codes, allow camera access.
        </AppText>
        <PressableScale onPress={requestPermission} style={styles.btn}>
          <AppText variant="h3" color={palette.white}>Allow camera</AppText>
        </PressableScale>
      </View>
    );
  }

  async function onScan({ data }: { data: string }) {
    if (scannedRef.current) return;
    scannedRef.current = true;
    try {
      // Visit QR may encode the bare code or a URL ending in the code.
      const code = data.trim().split('/').pop() ?? data.trim();
      const v = await lookup.mutateAsync(code);
      setFound(v);
    } catch {
      scannedRef.current = false; // allow retry
    }
  }

  return (
    <View style={styles.root}>
      {!found ? (
        <CameraView
          style={StyleSheet.absoluteFill}
          barcodeScannerSettings={{ barcodeTypes: ['qr', 'code128'] }}
          onBarcodeScanned={onScan}
        >
          <View style={styles.overlay}>
            <View style={styles.reticle} />
            <AppText variant="h3" color={palette.white} style={{ textAlign: 'center', marginTop: spacing.xl }}>
              Point at the visitor&apos;s code
            </AppText>
          </View>
        </CameraView>
      ) : (
        <View style={styles.result}>
          <GateVisitCard visit={found} onChanged={setFound} />
          <PressableScale
            haptic={false}
            onPress={() => {
              setFound(null);
              scannedRef.current = false;
            }}
            style={styles.again}
          >
            <AppText variant="label" color={palette.brand500}>Scan another</AppText>
          </PressableScale>
          <PressableScale haptic={false} onPress={() => router.back()} style={styles.again}>
            <AppText variant="label" color={palette.ink400}>Done</AppText>
          </PressableScale>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.black },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.md, padding: spacing.xl, backgroundColor: palette.canvas },
  overlay: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  reticle: { width: 220, height: 220, borderRadius: radius.xl, borderWidth: 3, borderColor: palette.white, backgroundColor: '#FFFFFF14' },
  result: { flex: 1, padding: spacing.xl, gap: spacing.md, justifyContent: 'center', backgroundColor: palette.canvas },
  again: { alignItems: 'center', paddingVertical: spacing.sm },
  btn: { backgroundColor: palette.brand500, borderRadius: radius.md, paddingVertical: spacing.md, paddingHorizontal: spacing.xl, marginTop: spacing.md },
});
