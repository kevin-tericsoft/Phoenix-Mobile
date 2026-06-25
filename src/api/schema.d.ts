export interface paths {
    "/shared/v1/auth/otp/request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Request Otp */
        post: operations["request_otp_shared_v1_auth_otp_request_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/auth/otp/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Verify Otp */
        post: operations["verify_otp_shared_v1_auth_otp_verify_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/auth/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Refresh */
        post: operations["refresh_shared_v1_auth_refresh_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Logout */
        delete: operations["logout_shared_v1_auth_logout_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/auth/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Me */
        get: operations["get_me_shared_v1_auth_me_get"];
        put?: never;
        post?: never;
        /** Delete My Account */
        delete: operations["delete_my_account_shared_v1_auth_me_delete"];
        options?: never;
        head?: never;
        /** Update My Profile */
        patch: operations["update_my_profile_shared_v1_auth_me_patch"];
        trace?: never;
    };
    "/admin/v1/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Roles */
        get: operations["list_roles_admin_v1_roles_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Users */
        get: operations["list_users_admin_v1_users_get"];
        put?: never;
        /** Create User */
        post: operations["create_user_admin_v1_users_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/users/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User */
        get: operations["get_user_admin_v1_users__user_id__get"];
        put?: never;
        post?: never;
        /** Delete User */
        delete: operations["delete_user_admin_v1_users__user_id__delete"];
        options?: never;
        head?: never;
        /** Update User */
        patch: operations["update_user_admin_v1_users__user_id__patch"];
        trace?: never;
    };
    "/admin/v1/billing-entities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Billing Entities */
        get: operations["list_billing_entities_admin_v1_billing_entities_get"];
        put?: never;
        /** Create Billing Entity */
        post: operations["create_billing_entity_admin_v1_billing_entities_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/billing-entities/{entity_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Billing Entity */
        get: operations["get_billing_entity_admin_v1_billing_entities__entity_id__get"];
        put?: never;
        post?: never;
        /** Delete Billing Entity */
        delete: operations["delete_billing_entity_admin_v1_billing_entities__entity_id__delete"];
        options?: never;
        head?: never;
        /** Update Billing Entity */
        patch: operations["update_billing_entity_admin_v1_billing_entities__entity_id__patch"];
        trace?: never;
    };
    "/admin/v1/billing-entities/{entity_id}/addresses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Entity Addresses */
        get: operations["list_entity_addresses_admin_v1_billing_entities__entity_id__addresses_get"];
        put?: never;
        /** Create Entity Address */
        post: operations["create_entity_address_admin_v1_billing_entities__entity_id__addresses_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/billing-entities/{entity_id}/addresses/{address_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Entity Address */
        delete: operations["delete_entity_address_admin_v1_billing_entities__entity_id__addresses__address_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/billing-entities/{entity_id}/credentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Entity Credential */
        get: operations["get_entity_credential_admin_v1_billing_entities__entity_id__credentials_get"];
        put?: never;
        /** Upsert Entity Credential */
        post: operations["upsert_entity_credential_admin_v1_billing_entities__entity_id__credentials_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/bank-details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Bank Details */
        post: operations["create_bank_details_admin_v1_bank_details_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/billing-entities/{entity_id}/bank-details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Bank Details */
        get: operations["list_bank_details_admin_v1_billing_entities__entity_id__bank_details_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/bank-details/{bd_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Bank Details */
        delete: operations["delete_bank_details_admin_v1_bank_details__bd_id__delete"];
        options?: never;
        head?: never;
        /** Update Bank Details */
        patch: operations["update_bank_details_admin_v1_bank_details__bd_id__patch"];
        trace?: never;
    };
    "/admin/v1/properties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Properties */
        get: operations["list_properties_admin_v1_properties_get"];
        put?: never;
        /** Create Property */
        post: operations["create_property_admin_v1_properties_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/properties/{property_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Property */
        get: operations["get_property_admin_v1_properties__property_id__get"];
        put?: never;
        post?: never;
        /** Delete Property */
        delete: operations["delete_property_admin_v1_properties__property_id__delete"];
        options?: never;
        head?: never;
        /** Update Property */
        patch: operations["update_property_admin_v1_properties__property_id__patch"];
        trace?: never;
    };
    "/admin/v1/properties/{property_id}/stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Property Stats */
        get: operations["get_property_stats_admin_v1_properties__property_id__stats_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/towers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Tower */
        post: operations["create_tower_admin_v1_towers_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/properties/{property_id}/towers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Towers */
        get: operations["list_towers_admin_v1_properties__property_id__towers_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/towers/{tower_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Tower */
        delete: operations["delete_tower_admin_v1_towers__tower_id__delete"];
        options?: never;
        head?: never;
        /** Update Tower */
        patch: operations["update_tower_admin_v1_towers__tower_id__patch"];
        trace?: never;
    };
    "/admin/v1/tower-floors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Floor */
        post: operations["create_floor_admin_v1_tower_floors_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/towers/{tower_id}/floors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Floors */
        get: operations["list_floors_admin_v1_towers__tower_id__floors_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/tower-floors/{floor_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Floor */
        delete: operations["delete_floor_admin_v1_tower_floors__floor_id__delete"];
        options?: never;
        head?: never;
        /** Update Floor */
        patch: operations["update_floor_admin_v1_tower_floors__floor_id__patch"];
        trace?: never;
    };
    "/admin/v1/tower-floors/{floor_id}/splits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Floor Splits */
        get: operations["list_floor_splits_admin_v1_tower_floors__floor_id__splits_get"];
        /** Set Floor Splits */
        put: operations["set_floor_splits_admin_v1_tower_floors__floor_id__splits_put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/tenants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Tenants */
        get: operations["list_tenants_admin_v1_tenants_get"];
        put?: never;
        /** Create Tenant */
        post: operations["create_tenant_admin_v1_tenants_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/tenants/{tenant_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Tenant */
        get: operations["get_tenant_admin_v1_tenants__tenant_id__get"];
        put?: never;
        post?: never;
        /** Delete Tenant */
        delete: operations["delete_tenant_admin_v1_tenants__tenant_id__delete"];
        options?: never;
        head?: never;
        /** Update Tenant */
        patch: operations["update_tenant_admin_v1_tenants__tenant_id__patch"];
        trace?: never;
    };
    "/admin/v1/tenants/{tenant_id}/floor-assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Floor Assignments */
        get: operations["get_floor_assignments_admin_v1_tenants__tenant_id__floor_assignments_get"];
        /** Set Floor Assignments */
        put: operations["set_floor_assignments_admin_v1_tenants__tenant_id__floor_assignments_put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/tenants/{tenant_id}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Contacts */
        get: operations["list_contacts_admin_v1_tenants__tenant_id__contacts_get"];
        put?: never;
        /** Create Contact */
        post: operations["create_contact_admin_v1_tenants__tenant_id__contacts_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/tenant-contacts/{contact_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Contact */
        delete: operations["delete_contact_admin_v1_tenant_contacts__contact_id__delete"];
        options?: never;
        head?: never;
        /** Update Contact */
        patch: operations["update_contact_admin_v1_tenant_contacts__contact_id__patch"];
        trace?: never;
    };
    "/admin/v1/tenants/{tenant_id}/feedbacks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Feedbacks */
        get: operations["list_feedbacks_admin_v1_tenants__tenant_id__feedbacks_get"];
        put?: never;
        /** Create Feedback */
        post: operations["create_feedback_admin_v1_tenants__tenant_id__feedbacks_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/feedback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit My Feedback */
        post: operations["submit_my_feedback_shared_v1_feedback_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/amenities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Amenities */
        get: operations["list_amenities_admin_v1_amenities_get"];
        put?: never;
        /** Create Amenity */
        post: operations["create_amenity_admin_v1_amenities_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/amenities/{amenity_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Amenity */
        get: operations["get_amenity_admin_v1_amenities__amenity_id__get"];
        put?: never;
        post?: never;
        /** Delete Amenity */
        delete: operations["delete_amenity_admin_v1_amenities__amenity_id__delete"];
        options?: never;
        head?: never;
        /** Update Amenity */
        patch: operations["update_amenity_admin_v1_amenities__amenity_id__patch"];
        trace?: never;
    };
    "/admin/v1/amenities/{amenity_id}/occupancies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Occupancies */
        get: operations["list_occupancies_admin_v1_amenities__amenity_id__occupancies_get"];
        put?: never;
        /** Create Occupancy */
        post: operations["create_occupancy_admin_v1_amenities__amenity_id__occupancies_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/amenity-occupancies/{occupancy_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Occupancy */
        delete: operations["delete_occupancy_admin_v1_amenity_occupancies__occupancy_id__delete"];
        options?: never;
        head?: never;
        /** Update Occupancy */
        patch: operations["update_occupancy_admin_v1_amenity_occupancies__occupancy_id__patch"];
        trace?: never;
    };
    "/admin/v1/amenities/{amenity_id}/operators": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Operators */
        get: operations["list_operators_admin_v1_amenities__amenity_id__operators_get"];
        put?: never;
        /** Create Operator */
        post: operations["create_operator_admin_v1_amenities__amenity_id__operators_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/amenity-operators/{operator_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Operator */
        delete: operations["delete_operator_admin_v1_amenity_operators__operator_id__delete"];
        options?: never;
        head?: never;
        /** Update Operator */
        patch: operations["update_operator_admin_v1_amenity_operators__operator_id__patch"];
        trace?: never;
    };
    "/admin/v1/amenities/{amenity_id}/reviews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Reviews */
        get: operations["list_reviews_admin_v1_amenities__amenity_id__reviews_get"];
        put?: never;
        /** Create Review */
        post: operations["create_review_admin_v1_amenities__amenity_id__reviews_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/amenities/{amenity_id}/unavailable-dates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Unavailable Dates */
        get: operations["list_unavailable_dates_admin_v1_amenities__amenity_id__unavailable_dates_get"];
        put?: never;
        /** Create Unavailable Date */
        post: operations["create_unavailable_date_admin_v1_amenities__amenity_id__unavailable_dates_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/amenity-unavailable-dates/{unavailable_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Unavailable Date */
        delete: operations["delete_unavailable_date_admin_v1_amenity_unavailable_dates__unavailable_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/amenities/{amenity_id}/operating-hours": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Operating Hours */
        get: operations["list_operating_hours_admin_v1_amenities__amenity_id__operating_hours_get"];
        put?: never;
        /** Create Operating Hours */
        post: operations["create_operating_hours_admin_v1_amenities__amenity_id__operating_hours_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/operating-hours/{hours_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Operating Hours */
        delete: operations["delete_operating_hours_admin_v1_operating_hours__hours_id__delete"];
        options?: never;
        head?: never;
        /** Update Operating Hours */
        patch: operations["update_operating_hours_admin_v1_operating_hours__hours_id__patch"];
        trace?: never;
    };
    "/shared/v1/amenities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List My Amenities */
        get: operations["list_my_amenities_shared_v1_amenities_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/amenities/{amenity_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get My Amenity */
        get: operations["get_my_amenity_shared_v1_amenities__amenity_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/amenities/{amenity_id}/reviews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit My Review */
        post: operations["submit_my_review_shared_v1_amenities__amenity_id__reviews_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/leases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Leases */
        get: operations["list_leases_admin_v1_leases_get"];
        put?: never;
        /** Create Lease */
        post: operations["create_lease_admin_v1_leases_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/leases/{lease_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Lease */
        get: operations["get_lease_admin_v1_leases__lease_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update Lease */
        patch: operations["update_lease_admin_v1_leases__lease_id__patch"];
        trace?: never;
    };
    "/admin/v1/leases/{lease_id}/escalation-rules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Escalation Rules */
        get: operations["list_escalation_rules_admin_v1_leases__lease_id__escalation_rules_get"];
        put?: never;
        /** Add Escalation Rule */
        post: operations["add_escalation_rule_admin_v1_leases__lease_id__escalation_rules_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/escalation-rules/{rule_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Escalation Rule */
        delete: operations["delete_escalation_rule_admin_v1_escalation_rules__rule_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/leases/{lease_id}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Lease Versions */
        get: operations["list_lease_versions_admin_v1_leases__lease_id__versions_get"];
        put?: never;
        /** Create Lease Version */
        post: operations["create_lease_version_admin_v1_leases__lease_id__versions_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/lease-versions/{version_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Lease Version */
        delete: operations["delete_lease_version_admin_v1_lease_versions__version_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/lease-versions/{version_id}/charge-schedules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Charge Schedules */
        get: operations["get_charge_schedules_admin_v1_lease_versions__version_id__charge_schedules_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/lease-versions/{version_id}/floors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Version Floors */
        get: operations["get_version_floors_admin_v1_lease_versions__version_id__floors_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/generate-monthly": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Monthly */
        post: operations["generate_monthly_admin_v1_invoices_generate_monthly_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/status-counts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Invoice Status Counts */
        get: operations["get_invoice_status_counts_admin_v1_invoices_status_counts_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/bulk-submit-gst": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Bulk Submit Gst */
        post: operations["bulk_submit_gst_admin_v1_invoices_bulk_submit_gst_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/bulk-send": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Bulk Send Invoices To Client */
        post: operations["bulk_send_invoices_to_client_admin_v1_invoices_bulk_send_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Invoices */
        get: operations["list_invoices_admin_v1_invoices_get"];
        put?: never;
        /** Create Invoice */
        post: operations["create_invoice_admin_v1_invoices_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Invoice */
        get: operations["get_invoice_admin_v1_invoices__invoice_id__get"];
        put?: never;
        post?: never;
        /** Delete Invoice */
        delete: operations["delete_invoice_admin_v1_invoices__invoice_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Submit For Approval */
        patch: operations["submit_for_approval_admin_v1_invoices__invoice_id__submit_patch"];
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Cancel Invoice */
        patch: operations["cancel_invoice_admin_v1_invoices__invoice_id__cancel_patch"];
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/invoice-number": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Rename Invoice Number */
        patch: operations["rename_invoice_number_admin_v1_invoices__invoice_id__invoice_number_patch"];
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/admin/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Admin Override Status */
        patch: operations["admin_override_status_admin_v1_invoices__invoice_id__admin_status_patch"];
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Payments */
        get: operations["list_payments_admin_v1_invoices__invoice_id__payments_get"];
        put?: never;
        /** Add Payment */
        post: operations["add_payment_admin_v1_invoices__invoice_id__payments_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/pdf": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Invoice Pdf */
        get: operations["get_invoice_pdf_admin_v1_invoices__invoice_id__pdf_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/send": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Send Invoice To Client */
        post: operations["send_invoice_to_client_admin_v1_invoices__invoice_id__send_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/email-logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Invoice Email Logs */
        get: operations["list_invoice_email_logs_admin_v1_invoices__invoice_id__email_logs_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/audit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Invoice Audit Log */
        get: operations["get_invoice_audit_log_admin_v1_invoices__invoice_id__audit_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/e-invoice/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Preview Irp Payload */
        get: operations["preview_irp_payload_admin_v1_invoices__invoice_id__e_invoice_preview_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/e-invoice/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit E Invoice */
        post: operations["submit_e_invoice_admin_v1_invoices__invoice_id__e_invoice_submit_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/invoices/{invoice_id}/e-invoice/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel E Invoice */
        post: operations["cancel_e_invoice_admin_v1_invoices__invoice_id__e_invoice_cancel_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/debit-notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Debit Notes */
        get: operations["list_debit_notes_admin_v1_debit_notes_get"];
        put?: never;
        /** Create Debit Note */
        post: operations["create_debit_note_admin_v1_debit_notes_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/debit-notes/{dn_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Debit Note */
        get: operations["get_debit_note_admin_v1_debit_notes__dn_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Events */
        get: operations["list_events_admin_v1_events_get"];
        put?: never;
        /** Create Event */
        post: operations["create_event_admin_v1_events_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/events/{event_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Event */
        get: operations["get_event_admin_v1_events__event_id__get"];
        put?: never;
        post?: never;
        /** Delete Event */
        delete: operations["delete_event_admin_v1_events__event_id__delete"];
        options?: never;
        head?: never;
        /** Update Event */
        patch: operations["update_event_admin_v1_events__event_id__patch"];
        trace?: never;
    };
    "/admin/v1/events/{event_id}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Publish Event */
        post: operations["publish_event_admin_v1_events__event_id__publish_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/event-faqs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add Faq */
        post: operations["add_faq_admin_v1_event_faqs_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/events/{event_id}/faqs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Faqs */
        get: operations["list_faqs_admin_v1_events__event_id__faqs_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/event-performers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add Performer */
        post: operations["add_performer_admin_v1_event_performers_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/events/{event_id}/performers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Performers */
        get: operations["list_performers_admin_v1_events__event_id__performers_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/event-gallery-images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add Gallery Image */
        post: operations["add_gallery_image_admin_v1_event_gallery_images_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/events/{event_id}/visible-properties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Set Event Visible Properties */
        put: operations["set_event_visible_properties_admin_v1_events__event_id__visible_properties_put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/events/{event_id}/interactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Interactions */
        get: operations["list_interactions_admin_v1_events__event_id__interactions_get"];
        put?: never;
        /** Toggle Interaction */
        post: operations["toggle_interaction_admin_v1_events__event_id__interactions_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/polls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Polls */
        get: operations["list_polls_admin_v1_polls_get"];
        put?: never;
        /** Create Poll */
        post: operations["create_poll_admin_v1_polls_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/polls/{poll_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Poll */
        get: operations["get_poll_admin_v1_polls__poll_id__get"];
        put?: never;
        post?: never;
        /** Delete Poll */
        delete: operations["delete_poll_admin_v1_polls__poll_id__delete"];
        options?: never;
        head?: never;
        /** Update Poll */
        patch: operations["update_poll_admin_v1_polls__poll_id__patch"];
        trace?: never;
    };
    "/admin/v1/poll-options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add Option */
        post: operations["add_option_admin_v1_poll_options_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/polls/{poll_id}/options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Options */
        get: operations["list_options_admin_v1_polls__poll_id__options_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/polls/{poll_id}/visible-properties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Set Poll Visible Properties */
        put: operations["set_poll_visible_properties_admin_v1_polls__poll_id__visible_properties_put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/polls/{poll_id}/responses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit Response */
        post: operations["submit_response_admin_v1_polls__poll_id__responses_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/polls/{poll_id}/responses/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Responses Summary */
        get: operations["list_responses_summary_admin_v1_polls__poll_id__responses_summary_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/walls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Walls */
        get: operations["list_walls_admin_v1_walls_get"];
        put?: never;
        /** Create Wall */
        post: operations["create_wall_admin_v1_walls_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/walls/{wall_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Wall */
        get: operations["get_wall_admin_v1_walls__wall_id__get"];
        put?: never;
        post?: never;
        /** Delete Wall */
        delete: operations["delete_wall_admin_v1_walls__wall_id__delete"];
        options?: never;
        head?: never;
        /** Update Wall */
        patch: operations["update_wall_admin_v1_walls__wall_id__patch"];
        trace?: never;
    };
    "/admin/v1/walls/{wall_id}/visible-properties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Set Wall Visible Properties */
        put: operations["set_wall_visible_properties_admin_v1_walls__wall_id__visible_properties_put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/walls/{wall_id}/interactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit Wall Interaction */
        post: operations["submit_wall_interaction_admin_v1_walls__wall_id__interactions_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/polls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List My Polls */
        get: operations["list_my_polls_shared_v1_polls_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/polls/{poll_id}/vote": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Vote On Poll */
        post: operations["vote_on_poll_shared_v1_polls__poll_id__vote_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/walls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List My Walls */
        get: operations["list_my_walls_shared_v1_walls_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/walls/{wall_id}/reaction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** React To Wall */
        put: operations["react_to_wall_shared_v1_walls__wall_id__reaction_put"];
        post?: never;
        /** Unreact Wall */
        delete: operations["unreact_wall_shared_v1_walls__wall_id__reaction_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List My Events */
        get: operations["list_my_events_shared_v1_events_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/events/{event_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get My Event */
        get: operations["get_my_event_shared_v1_events__event_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/events/{event_id}/interest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Set Event Interest */
        put: operations["set_event_interest_shared_v1_events__event_id__interest_put"];
        post?: never;
        /** Remove Event Interest */
        delete: operations["remove_event_interest_shared_v1_events__event_id__interest_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Notifications */
        get: operations["list_notifications_admin_v1_notifications_get"];
        put?: never;
        /** Create Notification */
        post: operations["create_notification_admin_v1_notifications_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/notifications/{notification_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Notification */
        get: operations["get_notification_admin_v1_notifications__notification_id__get"];
        put?: never;
        post?: never;
        /** Delete Notification */
        delete: operations["delete_notification_admin_v1_notifications__notification_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/notifications/{notification_id}/visible-properties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Set Visible Properties */
        put: operations["set_visible_properties_admin_v1_notifications__notification_id__visible_properties_put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/notifications/{notification_id}/recipients/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Recipients Summary */
        get: operations["get_recipients_summary_admin_v1_notifications__notification_id__recipients_summary_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List My Notifications */
        get: operations["list_my_notifications_shared_v1_notifications_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/notifications/unread-count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** My Unread Count */
        get: operations["my_unread_count_shared_v1_notifications_unread_count_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/notifications/{notification_id}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Mark My Notification Read */
        post: operations["mark_my_notification_read_shared_v1_notifications__notification_id__read_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/visitors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Visitors */
        get: operations["list_visitors_admin_v1_visitors_get"];
        put?: never;
        /** Get Or Create Visitor */
        post: operations["get_or_create_visitor_admin_v1_visitors_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/visitors/{visitor_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Visitor */
        get: operations["get_visitor_admin_v1_visitors__visitor_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/visits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Visits */
        get: operations["list_visits_admin_v1_visits_get"];
        put?: never;
        /** Create Visit */
        post: operations["create_visit_admin_v1_visits_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/visits/{visit_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Visit */
        get: operations["get_visit_admin_v1_visits__visit_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/visits/{visit_id}/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Approve Visit */
        patch: operations["approve_visit_admin_v1_visits__visit_id__approve_patch"];
        trace?: never;
    };
    "/admin/v1/visits/{visit_id}/reject": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Reject Visit */
        patch: operations["reject_visit_admin_v1_visits__visit_id__reject_patch"];
        trace?: never;
    };
    "/admin/v1/visits/{visit_id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Cancel Visit */
        patch: operations["cancel_visit_admin_v1_visits__visit_id__cancel_patch"];
        trace?: never;
    };
    "/admin/v1/visits/{visit_id}/check-in": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Check In Visit */
        patch: operations["check_in_visit_admin_v1_visits__visit_id__check_in_patch"];
        trace?: never;
    };
    "/admin/v1/visits/{visit_id}/check-out": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Check Out Visit */
        patch: operations["check_out_visit_admin_v1_visits__visit_id__check_out_patch"];
        trace?: never;
    };
    "/admin/v1/visits/{visit_id}/no-show": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** No Show Visit */
        patch: operations["no_show_visit_admin_v1_visits__visit_id__no_show_patch"];
        trace?: never;
    };
    "/admin/v1/visits/{visit_id}/resend-code": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Resend Visit Code */
        post: operations["resend_visit_code_admin_v1_visits__visit_id__resend_code_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/parcels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Parcels */
        get: operations["list_parcels_admin_v1_parcels_get"];
        put?: never;
        /** Create Parcel */
        post: operations["create_parcel_admin_v1_parcels_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/parcels/{parcel_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Parcel */
        get: operations["get_parcel_admin_v1_parcels__parcel_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/parcels/{parcel_id}/receive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Receive Parcel */
        patch: operations["receive_parcel_admin_v1_parcels__parcel_id__receive_patch"];
        trace?: never;
    };
    "/admin/v1/parcels/{parcel_id}/deliver": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Deliver Parcel */
        patch: operations["deliver_parcel_admin_v1_parcels__parcel_id__deliver_patch"];
        trace?: never;
    };
    "/shared/v1/visits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List My Visits */
        get: operations["list_my_visits_shared_v1_visits_get"];
        put?: never;
        /** Invite Visitor */
        post: operations["invite_visitor_shared_v1_visits_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/visits/{visit_id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel My Visit */
        post: operations["cancel_my_visit_shared_v1_visits__visit_id__cancel_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/visits/lookup/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gate Lookup */
        get: operations["gate_lookup_shared_v1_visits_lookup__code__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/visits/gate/queue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gate Queue */
        get: operations["gate_queue_shared_v1_visits_gate_queue_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/visits/{visit_id}/gate/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Gate Approve */
        post: operations["gate_approve_shared_v1_visits__visit_id__gate_approve_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/visits/{visit_id}/gate/check-in": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Gate Check In */
        post: operations["gate_check_in_shared_v1_visits__visit_id__gate_check_in_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/visits/{visit_id}/gate/check-out": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Gate Check Out */
        post: operations["gate_check_out_shared_v1_visits__visit_id__gate_check_out_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/parcels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List My Parcels */
        get: operations["list_my_parcels_shared_v1_parcels_get"];
        put?: never;
        /** Create My Parcel */
        post: operations["create_my_parcel_shared_v1_parcels_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/email-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Email Templates */
        get: operations["list_email_templates_admin_v1_email_templates_get"];
        put?: never;
        /** Create Email Template */
        post: operations["create_email_template_admin_v1_email_templates_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/email-templates/{template_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Email Template */
        get: operations["get_email_template_admin_v1_email_templates__template_id__get"];
        put?: never;
        post?: never;
        /** Delete Email Template */
        delete: operations["delete_email_template_admin_v1_email_templates__template_id__delete"];
        options?: never;
        head?: never;
        /** Update Email Template */
        patch: operations["update_email_template_admin_v1_email_templates__template_id__patch"];
        trace?: never;
    };
    "/admin/v1/sms-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Sms Templates */
        get: operations["list_sms_templates_admin_v1_sms_templates_get"];
        put?: never;
        /** Create Sms Template */
        post: operations["create_sms_template_admin_v1_sms_templates_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/sms-templates/{template_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Sms Template */
        get: operations["get_sms_template_admin_v1_sms_templates__template_id__get"];
        put?: never;
        post?: never;
        /** Delete Sms Template */
        delete: operations["delete_sms_template_admin_v1_sms_templates__template_id__delete"];
        options?: never;
        head?: never;
        /** Update Sms Template */
        patch: operations["update_sms_template_admin_v1_sms_templates__template_id__patch"];
        trace?: never;
    };
    "/admin/v1/email-logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Email Logs */
        get: operations["list_email_logs_admin_v1_email_logs_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/sms-logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Sms Logs */
        get: operations["list_sms_logs_admin_v1_sms_logs_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/files/presign": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Presign Upload */
        post: operations["presign_upload_shared_v1_files_presign_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/files/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Confirm Upload */
        post: operations["confirm_upload_shared_v1_files_confirm_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/files/{file_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get File */
        get: operations["get_file_shared_v1_files__file_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/analytics/occupancy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Occupancy */
        get: operations["occupancy_admin_v1_analytics_occupancy_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/analytics/tower-stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Tower Stats */
        get: operations["tower_stats_admin_v1_analytics_tower_stats_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/v1/analytics/tenant-stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Tenant Stats */
        get: operations["tenant_stats_admin_v1_analytics_tenant_stats_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Health */
        get: operations["health_shared_v1_health_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared/v1/reference/state-codes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** State Codes */
        get: operations["state_codes_shared_v1_reference_state_codes_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** AmenityCreate */
        AmenityCreate: {
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /**
             * Tower Id
             * Format: uuid
             */
            tower_id: string;
            /** Operator Tenant Id */
            operator_tenant_id?: string | null;
            /** Name */
            name: string;
            /** Amenity Type */
            amenity_type: string;
            /** Other Type */
            other_type?: string | null;
            /** Tagline */
            tagline?: string | null;
            /** Short Description */
            short_description?: string | null;
            /** Website Link */
            website_link?: string | null;
            /** Vendor Url */
            vendor_url?: string | null;
            /** Capacity */
            capacity?: number | null;
            /** Location */
            location?: string | null;
            /**
             * Igst
             * @default 0
             */
            igst: number | string;
            /** Pos Addr Line1 */
            pos_addr_line1: string;
            /** Pos Addr Line2 */
            pos_addr_line2?: string | null;
            /** Pos City */
            pos_city: string;
            /** Pos State */
            pos_state: string;
            /**
             * Pos Country
             * @default India
             */
            pos_country: string;
            /** Pos Pincode */
            pos_pincode: string;
            /** Bill Addr Line1 */
            bill_addr_line1?: string | null;
            /** Bill Addr Line2 */
            bill_addr_line2?: string | null;
            /** Bill City */
            bill_city?: string | null;
            /** Bill State */
            bill_state?: string | null;
            /** Bill Country */
            bill_country?: string | null;
            /** Bill Pincode */
            bill_pincode?: string | null;
            /**
             * Bill Same As Pos
             * @default false
             */
            bill_same_as_pos: boolean;
            /** Gstin */
            gstin: string;
            /** Pan */
            pan: string;
            /** Profile Pic File Id */
            profile_pic_file_id?: string | null;
        };
        /** AmenityOccupancyCreate */
        AmenityOccupancyCreate: {
            /**
             * Floor Id
             * Format: uuid
             */
            floor_id: string;
            /** Occupied Area */
            occupied_area: number | string;
        };
        /** AmenityOccupancyOut */
        AmenityOccupancyOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Amenity Id
             * Format: uuid
             */
            amenity_id: string;
            /**
             * Floor Id
             * Format: uuid
             */
            floor_id: string;
            /** Occupied Area */
            occupied_area: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** AmenityOccupancyUpdate */
        AmenityOccupancyUpdate: {
            /** Occupied Area */
            occupied_area: number | string;
        };
        /** AmenityOperatorCreate */
        AmenityOperatorCreate: {
            /** Name */
            name: string;
            /** Phone */
            phone: string;
            /** Email */
            email?: string | null;
            /** Designation */
            designation?: string | null;
            /** Invoice Email Role */
            invoice_email_role?: string | null;
        };
        /** AmenityOperatorOut */
        AmenityOperatorOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Amenity Id
             * Format: uuid
             */
            amenity_id: string;
            /** Name */
            name: string;
            /** Phone */
            phone: string;
            /** Email */
            email: string | null;
            /** Designation */
            designation: string | null;
            /** Invoice Email Role */
            invoice_email_role: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** AmenityOperatorUpdate */
        AmenityOperatorUpdate: {
            /** Name */
            name?: string | null;
            /** Phone */
            phone?: string | null;
            /** Email */
            email?: string | null;
            /** Designation */
            designation?: string | null;
            /** Invoice Email Role */
            invoice_email_role?: string | null;
        };
        /** AmenityOut */
        AmenityOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /**
             * Tower Id
             * Format: uuid
             */
            tower_id: string;
            /** Operator Tenant Id */
            operator_tenant_id: string | null;
            /** Name */
            name: string;
            /** Amenity Type */
            amenity_type: string;
            /** Other Type */
            other_type: string | null;
            /** Tagline */
            tagline: string | null;
            /** Short Description */
            short_description: string | null;
            /** Website Link */
            website_link: string | null;
            /** Vendor Url */
            vendor_url: string | null;
            /** Capacity */
            capacity: number | null;
            /** Location */
            location: string | null;
            /** Igst */
            igst: string;
            /** Pos Addr Line1 */
            pos_addr_line1: string;
            /** Pos Addr Line2 */
            pos_addr_line2: string | null;
            /** Pos City */
            pos_city: string;
            /** Pos State */
            pos_state: string;
            /** Pos Country */
            pos_country: string;
            /** Pos Pincode */
            pos_pincode: string;
            /** Bill Addr Line1 */
            bill_addr_line1: string | null;
            /** Bill Addr Line2 */
            bill_addr_line2: string | null;
            /** Bill City */
            bill_city: string | null;
            /** Bill State */
            bill_state: string | null;
            /** Bill Country */
            bill_country: string | null;
            /** Bill Pincode */
            bill_pincode: string | null;
            /** Bill Same As Pos */
            bill_same_as_pos: boolean;
            /** Gstin */
            gstin: string;
            /** Pan */
            pan: string;
            /** Profile Pic File Id */
            profile_pic_file_id: string | null;
            /** Is Active */
            is_active: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** AmenityReviewCreate */
        AmenityReviewCreate: {
            /** Rating */
            rating: number;
            /** Comment */
            comment: string;
        };
        /** AmenityReviewOut */
        AmenityReviewOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Amenity Id
             * Format: uuid
             */
            amenity_id: string;
            /**
             * Reviewer Id
             * Format: uuid
             */
            reviewer_id: string;
            /** Rating */
            rating: number;
            /** Comment */
            comment: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** AmenityUnavailableDateCreate */
        AmenityUnavailableDateCreate: {
            /**
             * Unavailable Date
             * Format: date
             */
            unavailable_date: string;
        };
        /** AmenityUnavailableDateOut */
        AmenityUnavailableDateOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Amenity Id
             * Format: uuid
             */
            amenity_id: string;
            /**
             * Unavailable Date
             * Format: date
             */
            unavailable_date: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** AmenityUpdate */
        AmenityUpdate: {
            /** Operator Tenant Id */
            operator_tenant_id?: string | null;
            /** Name */
            name?: string | null;
            /** Amenity Type */
            amenity_type?: string | null;
            /** Other Type */
            other_type?: string | null;
            /** Tagline */
            tagline?: string | null;
            /** Short Description */
            short_description?: string | null;
            /** Website Link */
            website_link?: string | null;
            /** Vendor Url */
            vendor_url?: string | null;
            /** Capacity */
            capacity?: number | null;
            /** Location */
            location?: string | null;
            /** Igst */
            igst?: number | string | null;
            /** Pos Addr Line1 */
            pos_addr_line1?: string | null;
            /** Pos Addr Line2 */
            pos_addr_line2?: string | null;
            /** Pos City */
            pos_city?: string | null;
            /** Pos State */
            pos_state?: string | null;
            /** Pos Country */
            pos_country?: string | null;
            /** Pos Pincode */
            pos_pincode?: string | null;
            /** Bill Addr Line1 */
            bill_addr_line1?: string | null;
            /** Bill Addr Line2 */
            bill_addr_line2?: string | null;
            /** Bill City */
            bill_city?: string | null;
            /** Bill State */
            bill_state?: string | null;
            /** Bill Country */
            bill_country?: string | null;
            /** Bill Pincode */
            bill_pincode?: string | null;
            /** Bill Same As Pos */
            bill_same_as_pos?: boolean | null;
            /** Gstin */
            gstin?: string | null;
            /** Pan */
            pan?: string | null;
            /** Profile Pic File Id */
            profile_pic_file_id?: string | null;
            /** Is Active */
            is_active?: boolean | null;
        };
        /** AreaSlice */
        AreaSlice: {
            /** Name */
            name: string;
            /** Area */
            area: string;
            /** Percentage */
            percentage: string;
        };
        /** BankDetailsCreate */
        BankDetailsCreate: {
            /**
             * Billing Entity Id
             * Format: uuid
             */
            billing_entity_id: string;
            /** Bank Name */
            bank_name?: string | null;
            /** Account Name */
            account_name?: string | null;
            /** Account Number */
            account_number?: string | null;
            /** Ifsc Code */
            ifsc_code?: string | null;
            /** Branch Address */
            branch_address?: string | null;
            /** Letter Head Content */
            letter_head_content?: string | null;
        };
        /** BankDetailsOut */
        BankDetailsOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Billing Entity Id
             * Format: uuid
             */
            billing_entity_id: string;
            /** Bank Name */
            bank_name: string | null;
            /** Account Name */
            account_name: string | null;
            /** Account Number */
            account_number: string | null;
            /** Ifsc Code */
            ifsc_code: string | null;
            /** Branch Address */
            branch_address: string | null;
            /** Letter Head Content */
            letter_head_content: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /** BankDetailsUpdate */
        BankDetailsUpdate: {
            /** Bank Name */
            bank_name?: string | null;
            /** Account Name */
            account_name?: string | null;
            /** Account Number */
            account_number?: string | null;
            /** Ifsc Code */
            ifsc_code?: string | null;
            /** Branch Address */
            branch_address?: string | null;
            /** Letter Head Content */
            letter_head_content?: string | null;
        };
        /** BillingEntityCreate */
        BillingEntityCreate: {
            /** Name */
            name: string;
            /** Short Name */
            short_name: string;
            /** Gstin */
            gstin: string;
            /** Pan */
            pan: string;
            /** Lut Number */
            lut_number?: string | null;
            /** Lut Filed Date */
            lut_filed_date?: string | null;
            /** Email */
            email: string;
            /** Phone */
            phone: string;
            /**
             * Email Cc List
             * @default []
             */
            email_cc_list: string[];
            /** Addr Line1 */
            addr_line1: string;
            /** Addr Line2 */
            addr_line2?: string | null;
            /** City */
            city: string;
            /** State */
            state: string;
            /**
             * Country
             * @default India
             */
            country: string;
            /** Pincode */
            pincode: string;
            /** State Code */
            state_code: number;
            /** Logo File Id */
            logo_file_id?: string | null;
            /** Digital Signature File Id */
            digital_signature_file_id?: string | null;
            /**
             * Show Entity Logo
             * @default true
             */
            show_entity_logo: boolean;
            /**
             * Show Phoenix Logo
             * @default true
             */
            show_phoenix_logo: boolean;
            /**
             * Extra Addresses
             * @default []
             */
            extra_addresses: components["schemas"]["EntityAddressSetIn"][];
        };
        /** BillingEntityListItem */
        BillingEntityListItem: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Name */
            name: string;
            /** Short Name */
            short_name: string;
            /** Gstin */
            gstin: string;
            /** Pan */
            pan: string;
            /** Lut Number */
            lut_number: string | null;
            /** Lut Filed Date */
            lut_filed_date: string | null;
            /** Email */
            email: string;
            /** Phone */
            phone: string;
            /** Email Cc List */
            email_cc_list: string[];
            /** Addr Line1 */
            addr_line1: string;
            /** Addr Line2 */
            addr_line2: string | null;
            /** City */
            city: string;
            /** State */
            state: string;
            /** Country */
            country: string;
            /** Pincode */
            pincode: string;
            /** State Code */
            state_code: number;
            /** Logo File Id */
            logo_file_id: string | null;
            /** Digital Signature File Id */
            digital_signature_file_id: string | null;
            /** Show Entity Logo */
            show_entity_logo: boolean;
            /** Show Phoenix Logo */
            show_phoenix_logo: boolean;
            /** Is Active */
            is_active: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /** Manager Name */
            manager_name?: string | null;
            /** Manager Phone */
            manager_phone?: string | null;
        };
        /** BillingEntityOut */
        BillingEntityOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Name */
            name: string;
            /** Short Name */
            short_name: string;
            /** Gstin */
            gstin: string;
            /** Pan */
            pan: string;
            /** Lut Number */
            lut_number: string | null;
            /** Lut Filed Date */
            lut_filed_date: string | null;
            /** Email */
            email: string;
            /** Phone */
            phone: string;
            /** Email Cc List */
            email_cc_list: string[];
            /** Addr Line1 */
            addr_line1: string;
            /** Addr Line2 */
            addr_line2: string | null;
            /** City */
            city: string;
            /** State */
            state: string;
            /** Country */
            country: string;
            /** Pincode */
            pincode: string;
            /** State Code */
            state_code: number;
            /** Logo File Id */
            logo_file_id: string | null;
            /** Digital Signature File Id */
            digital_signature_file_id: string | null;
            /** Show Entity Logo */
            show_entity_logo: boolean;
            /** Show Phoenix Logo */
            show_phoenix_logo: boolean;
            /** Is Active */
            is_active: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** BillingEntityUpdate */
        BillingEntityUpdate: {
            /** Name */
            name?: string | null;
            /** Short Name */
            short_name?: string | null;
            /** Lut Number */
            lut_number?: string | null;
            /** Lut Filed Date */
            lut_filed_date?: string | null;
            /** Email */
            email?: string | null;
            /** Phone */
            phone?: string | null;
            /** Email Cc List */
            email_cc_list?: string[] | null;
            /** Addr Line1 */
            addr_line1?: string | null;
            /** Addr Line2 */
            addr_line2?: string | null;
            /** City */
            city?: string | null;
            /** State */
            state?: string | null;
            /** Pincode */
            pincode?: string | null;
            /** State Code */
            state_code?: number | null;
            /** Logo File Id */
            logo_file_id?: string | null;
            /** Digital Signature File Id */
            digital_signature_file_id?: string | null;
            /** Show Entity Logo */
            show_entity_logo?: boolean | null;
            /** Show Phoenix Logo */
            show_phoenix_logo?: boolean | null;
            /** Is Active */
            is_active?: boolean | null;
        };
        /** BulkOperationOut */
        BulkOperationOut: {
            /** Succeeded */
            succeeded: number;
            /** Failed */
            failed: number;
            /** Errors */
            errors: string[];
        };
        /** ChargeScheduleCreate */
        ChargeScheduleCreate: {
            /** Floor Id */
            floor_id?: string | null;
            /** Charge Type */
            charge_type: string;
            /** Charge Group */
            charge_group?: number | null;
            /** Rate Per Sft */
            rate_per_sft?: number | string | null;
            /** Per Slot Rate */
            per_slot_rate?: number | string | null;
            /** Num Slots */
            num_slots?: number | null;
            /** Flat Amount */
            flat_amount?: number | string | null;
            /**
             * Effective From
             * Format: date
             */
            effective_from: string;
            /** Effective To */
            effective_to?: string | null;
            /** Deed Number */
            deed_number?: string | null;
            /** Bank Details Id */
            bank_details_id?: string | null;
            /** Igst */
            igst?: number | string | null;
            /** Cgst */
            cgst?: number | string | null;
            /** Sgst */
            sgst?: number | string | null;
            /**
             * Supply Type
             * @default B2B
             */
            supply_type: string;
            /**
             * Is Billing Enabled
             * @default true
             */
            is_billing_enabled: boolean;
            /** Contract Amount */
            contract_amount?: number | string | null;
            /** Contract Rate Per Sft */
            contract_rate_per_sft?: number | string | null;
        };
        /** ChargeScheduleOut */
        ChargeScheduleOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Lease Version Id
             * Format: uuid
             */
            lease_version_id: string;
            /** Floor Id */
            floor_id: string | null;
            /** Charge Type */
            charge_type: string;
            /** Charge Group */
            charge_group: number | null;
            /** Rate Per Sft */
            rate_per_sft: string | null;
            /** Per Slot Rate */
            per_slot_rate: string | null;
            /** Num Slots */
            num_slots: number | null;
            /** Flat Amount */
            flat_amount: string | null;
            /**
             * Effective From
             * Format: date
             */
            effective_from: string;
            /** Effective To */
            effective_to: string | null;
            /** Deed Number */
            deed_number: string | null;
            /** Bank Details Id */
            bank_details_id: string | null;
            /** Igst */
            igst: string | null;
            /** Cgst */
            cgst: string | null;
            /** Sgst */
            sgst: string | null;
            /** Supply Type */
            supply_type: string;
            /** Is Billing Enabled */
            is_billing_enabled: boolean;
            /** Contract Amount */
            contract_amount: string | null;
            /** Contract Rate Per Sft */
            contract_rate_per_sft: string | null;
            /** Is Projected */
            is_projected: boolean;
        };
        /** DebitNoteCreate */
        DebitNoteCreate: {
            /** Tenant Id */
            tenant_id?: string | null;
            /** Amenity Id */
            amenity_id?: string | null;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /**
             * Billing Entity Id
             * Format: uuid
             */
            billing_entity_id: string;
            /** Bank Details Id */
            bank_details_id?: string | null;
            /**
             * Debit Note Date
             * Format: date
             */
            debit_note_date: string;
            /**
             * Due Date
             * Format: date
             */
            due_date: string;
            /**
             * Line Items
             * @default []
             */
            line_items: components["schemas"]["DebitNoteLineItemCreate"][];
        };
        /** DebitNoteLineItemCreate */
        DebitNoteLineItemCreate: {
            /** Description */
            description: string;
            /** Quantity */
            quantity: number | string;
            /** Unit Price */
            unit_price: number | string;
            /** Tax Rate */
            tax_rate?: number | string | null;
            /** Amount */
            amount: number | string;
            /**
             * Sort Order
             * @default 0
             */
            sort_order: number;
        };
        /** DebitNoteOut */
        DebitNoteOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Debit Note Number */
            debit_note_number: string;
            /**
             * Debit Note Date
             * Format: date
             */
            debit_note_date: string;
            /**
             * Due Date
             * Format: date
             */
            due_date: string;
            /** Tenant Id */
            tenant_id: string | null;
            /** Amenity Id */
            amenity_id: string | null;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /**
             * Billing Entity Id
             * Format: uuid
             */
            billing_entity_id: string;
            /** Billed To Name */
            billed_to_name: string;
            /** Billed To Gstin */
            billed_to_gstin: string;
            /** Sub Total */
            sub_total: string;
            /** Total Amount */
            total_amount: string;
            /** Status */
            status: string;
            /** Payment Status */
            payment_status: string;
            /** E Invoice Status */
            e_invoice_status: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /** DeleteAccountIn */
        DeleteAccountIn: {
            /** Reason */
            reason?: string | null;
        };
        /** EInvoiceCancelIn */
        EInvoiceCancelIn: {
            /**
             * Reason Code
             * @default 2
             */
            reason_code: string;
            /**
             * Remarks
             * @default Data entry mistake
             */
            remarks: string;
        };
        /** EInvoiceOut */
        EInvoiceOut: {
            /**
             * Invoice Id
             * Format: uuid
             */
            invoice_id: string;
            /** E Invoice Status */
            e_invoice_status: string;
            /** E Invoice Irn */
            e_invoice_irn: string | null;
            /** E Invoice Ack No */
            e_invoice_ack_no: string | null;
            /** Error Code */
            error_code: string | null;
            /** Error Message */
            error_message: string | null;
        };
        /** EmailLogOut */
        EmailLogOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Source */
            source: string;
            /** Provider Message Id */
            provider_message_id: string | null;
            /** Recipient */
            recipient: string;
            /** Subject */
            subject: string | null;
            /** Cc Emails */
            cc_emails: string[];
            /** Message */
            message: string;
            /** Status */
            status: string;
            /** Error */
            error: {
                [key: string]: unknown;
            } | null;
            /** Provider Response */
            provider_response: {
                [key: string]: unknown;
            } | null;
            /**
             * Sent At
             * Format: date-time
             */
            sent_at: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /** EmailTemplateCreate */
        EmailTemplateCreate: {
            /** Purpose */
            purpose: string;
            /** Source */
            source?: string | null;
            /** Template */
            template: string;
            /**
             * Template Vars
             * @default {}
             */
            template_vars: {
                [key: string]: unknown;
            };
        };
        /** EmailTemplateOut */
        EmailTemplateOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Purpose */
            purpose: string;
            /** Source */
            source: string | null;
            /** Template */
            template: string;
            /** Template Vars */
            template_vars: {
                [key: string]: unknown;
            };
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /** Created By */
            created_by: string | null;
            /** Updated By */
            updated_by: string | null;
        };
        /** EmailTemplateUpdate */
        EmailTemplateUpdate: {
            /** Purpose */
            purpose?: string | null;
            /** Source */
            source?: string | null;
            /** Template */
            template?: string | null;
            /** Template Vars */
            template_vars?: {
                [key: string]: unknown;
            } | null;
        };
        /** EntityAddressSetIn */
        EntityAddressSetIn: {
            /** Label */
            label?: string | null;
            /** Addr Line1 */
            addr_line1: string;
            /** Addr Line2 */
            addr_line2?: string | null;
            /** City */
            city: string;
            /** State */
            state: string;
            /**
             * Country
             * @default India
             */
            country: string;
            /** Pincode */
            pincode: string;
            /** State Code */
            state_code: number;
        };
        /** EntityAddressSetOut */
        EntityAddressSetOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Billing Entity Id
             * Format: uuid
             */
            billing_entity_id: string;
            /** Label */
            label: string | null;
            /** Addr Line1 */
            addr_line1: string;
            /** Addr Line2 */
            addr_line2: string | null;
            /** City */
            city: string;
            /** State */
            state: string;
            /** Country */
            country: string;
            /** Pincode */
            pincode: string;
            /** State Code */
            state_code: number;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** EntityCredentialCreate */
        EntityCredentialCreate: {
            /** Username */
            username: string;
            /** Password */
            password: string;
        };
        /** EntityCredentialOut */
        EntityCredentialOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Billing Entity Id
             * Format: uuid
             */
            billing_entity_id: string;
            /** Provider */
            provider: string;
            /** Has Username */
            has_username: boolean;
            /** Has Password */
            has_password: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** EscalationRuleCreate */
        EscalationRuleCreate: {
            /** Lease Version Id */
            lease_version_id?: string | null;
            /** Floor Id */
            floor_id?: string | null;
            /** Charge Type */
            charge_type: string;
            /** Charge Group */
            charge_group?: number | null;
            /** Escalation Type */
            escalation_type: string;
            /** Percentage */
            percentage?: number | string | null;
            /** Fixed Amount */
            fixed_amount?: number | string | null;
            /**
             * Start Date
             * Format: date
             */
            start_date: string;
            /** End Date */
            end_date?: string | null;
            /** Recurrence Months */
            recurrence_months: number;
            /** Starts With */
            starts_with?: string | null;
            /** Custom Start Date */
            custom_start_date?: string | null;
        };
        /** EscalationRuleOut */
        EscalationRuleOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Lease Id
             * Format: uuid
             */
            lease_id: string;
            /** Lease Version Id */
            lease_version_id: string | null;
            /** Floor Id */
            floor_id: string | null;
            /** Charge Type */
            charge_type: string;
            /** Charge Group */
            charge_group: number | null;
            /** Escalation Type */
            escalation_type: string;
            /** Percentage */
            percentage: string | null;
            /** Fixed Amount */
            fixed_amount: string | null;
            /**
             * Start Date
             * Format: date
             */
            start_date: string;
            /** End Date */
            end_date: string | null;
            /** Recurrence Months */
            recurrence_months: number;
            /** Starts With */
            starts_with: string | null;
            /** Custom Start Date */
            custom_start_date: string | null;
        };
        /** EventCreate */
        EventCreate: {
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** Name */
            name: string;
            /** Category */
            category: string;
            /** Description */
            description: string;
            /** Agenda */
            agenda?: string | null;
            /** Terms And Conditions */
            terms_and_conditions?: string | null;
            /**
             * Event Date
             * Format: date
             */
            event_date: string;
            /** Start Time */
            start_time: string;
            /** Duration Minutes */
            duration_minutes: number;
            /**
             * Status
             * @default upcoming
             */
            status: string;
            /**
             * Is Booking Required
             * @default false
             */
            is_booking_required: boolean;
            /** Booking Is Free */
            booking_is_free?: boolean | null;
            /** Booking Start At */
            booking_start_at?: string | null;
            /** Booking End At */
            booking_end_at?: string | null;
            /** Booking Fee */
            booking_fee?: number | string | null;
            /** Booking Num Tickets */
            booking_num_tickets?: number | null;
            /**
             * Has Performers
             * @default false
             */
            has_performers: boolean;
            /** Priority */
            priority?: number | null;
        };
        /** EventFaqCreate */
        EventFaqCreate: {
            /**
             * Event Id
             * Format: uuid
             */
            event_id: string;
            /** Question */
            question: string;
            /** Answer */
            answer: string;
            /**
             * Sort Order
             * @default 0
             */
            sort_order: number;
        };
        /** EventFaqOut */
        EventFaqOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Event Id
             * Format: uuid
             */
            event_id: string;
            /** Question */
            question: string;
            /** Answer */
            answer: string;
            /** Sort Order */
            sort_order: number;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** EventGalleryImageCreate */
        EventGalleryImageCreate: {
            /**
             * Event Id
             * Format: uuid
             */
            event_id: string;
            /**
             * File Id
             * Format: uuid
             */
            file_id: string;
            /**
             * Sort Order
             * @default 0
             */
            sort_order: number;
            /**
             * Is Default
             * @default false
             */
            is_default: boolean;
        };
        /** EventGalleryImageOut */
        EventGalleryImageOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Event Id
             * Format: uuid
             */
            event_id: string;
            /**
             * File Id
             * Format: uuid
             */
            file_id: string;
            /** Sort Order */
            sort_order: number;
            /** Is Default */
            is_default: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** EventInteractionCreate */
        EventInteractionCreate: {
            /** Response */
            response: string;
        };
        /** EventInteractionOut */
        EventInteractionOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Event Id
             * Format: uuid
             */
            event_id: string;
            /**
             * User Id
             * Format: uuid
             */
            user_id: string;
            /** Response */
            response: string;
            /** Property Id */
            property_id: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /** EventOut */
        EventOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** Name */
            name: string;
            /** Category */
            category: string;
            /** Description */
            description: string;
            /** Agenda */
            agenda: string | null;
            /** Terms And Conditions */
            terms_and_conditions: string | null;
            /**
             * Event Date
             * Format: date
             */
            event_date: string;
            /** Start Time */
            start_time: string;
            /** Duration Minutes */
            duration_minutes: number;
            /** Status */
            status: string;
            /** Cancelled At */
            cancelled_at: string | null;
            /** Cancellation Reason */
            cancellation_reason: string | null;
            /** Is Booking Required */
            is_booking_required: boolean;
            /** Booking Is Free */
            booking_is_free: boolean | null;
            /** Booking Start At */
            booking_start_at: string | null;
            /** Booking End At */
            booking_end_at: string | null;
            /** Booking Fee */
            booking_fee: string | null;
            /** Booking Num Tickets */
            booking_num_tickets: number | null;
            /** Has Performers */
            has_performers: boolean;
            /** Priority */
            priority: number | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** EventPerformerCreate */
        EventPerformerCreate: {
            /**
             * Event Id
             * Format: uuid
             */
            event_id: string;
            /** Name */
            name: string;
            /** Bio */
            bio: string;
            /** Image File Id */
            image_file_id?: string | null;
            /**
             * Sort Order
             * @default 0
             */
            sort_order: number;
        };
        /** EventPerformerOut */
        EventPerformerOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Event Id
             * Format: uuid
             */
            event_id: string;
            /** Name */
            name: string;
            /** Bio */
            bio: string;
            /** Image File Id */
            image_file_id: string | null;
            /** Sort Order */
            sort_order: number;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** EventUpdate */
        EventUpdate: {
            /** Name */
            name?: string | null;
            /** Category */
            category?: string | null;
            /** Description */
            description?: string | null;
            /** Agenda */
            agenda?: string | null;
            /** Terms And Conditions */
            terms_and_conditions?: string | null;
            /** Event Date */
            event_date?: string | null;
            /** Start Time */
            start_time?: string | null;
            /** Duration Minutes */
            duration_minutes?: number | null;
            /** Status */
            status?: string | null;
            /** Is Booking Required */
            is_booking_required?: boolean | null;
            /** Booking Is Free */
            booking_is_free?: boolean | null;
            /** Booking Start At */
            booking_start_at?: string | null;
            /** Booking End At */
            booking_end_at?: string | null;
            /** Booking Fee */
            booking_fee?: number | string | null;
            /** Booking Num Tickets */
            booking_num_tickets?: number | null;
            /** Has Performers */
            has_performers?: boolean | null;
            /** Priority */
            priority?: number | null;
        };
        /** EventVisiblePropertySet */
        EventVisiblePropertySet: {
            /** Property Ids */
            property_ids: string[];
        };
        /** FileConfirmIn */
        FileConfirmIn: {
            /** Storage Key */
            storage_key: string;
            /** Original Name */
            original_name: string;
            /** Mime Type */
            mime_type: string;
            /** Size Bytes */
            size_bytes: number;
        };
        /** FileOut */
        FileOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Storage Key */
            storage_key: string;
            /** Original Name */
            original_name: string;
            /** Mime Type */
            mime_type: string;
            /** Size Bytes */
            size_bytes: number;
            /** Url */
            url: string;
            /** Uploaded By */
            uploaded_by: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /** FloorSplitIn */
        FloorSplitIn: {
            /** Name */
            name: string;
            /** Leasable Area */
            leasable_area: number;
        };
        /** FloorSplitOut */
        FloorSplitOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Floor Id
             * Format: uuid
             */
            floor_id: string;
            /** Name */
            name: string;
            /** Leasable Area */
            leasable_area: number;
            /**
             * Occupied Area
             * @default 0
             */
            occupied_area: number;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /**
         * FloorSplitSet
         * @description Full replacement set of a floor's splits. Pass [] to unsplit the floor.
         *     The sum of leasable_area must equal the floor's leasable_area.
         */
        FloorSplitSet: {
            /** Splits */
            splits: components["schemas"]["FloorSplitIn"][];
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /**
         * InviteVisitorIn
         * @description A tenant invites a visitor. We dedupe the visitor by phone, then create a planned visit.
         */
        InviteVisitorIn: {
            /** Visitor Name */
            visitor_name: string;
            /** Visitor Phone */
            visitor_phone: string;
            /** Visitor Email */
            visitor_email?: string | null;
            /** Visitor Organization */
            visitor_organization?: string | null;
            /** Purpose Of Visit */
            purpose_of_visit?: string | null;
            /** Scheduled At */
            scheduled_at?: string | null;
            /**
             * Vehicle Numbers
             * @default []
             */
            vehicle_numbers: string[];
            /** Num People */
            num_people?: number | null;
            /**
             * Include Parking
             * @default false
             */
            include_parking: boolean;
        };
        /** InvoiceAuditEventOut */
        InvoiceAuditEventOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Action */
            action: string;
            /** Old Values */
            old_values: {
                [key: string]: unknown;
            } | null;
            /** New Values */
            new_values: {
                [key: string]: unknown;
            } | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /** Actor Name */
            actor_name: string | null;
        };
        /**
         * InvoiceCreate
         * @description Manual invoice creation (non-lease lines, utilities).
         */
        InvoiceCreate: {
            /** Tenant Id */
            tenant_id?: string | null;
            /** Amenity Id */
            amenity_id?: string | null;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /**
             * Billing Entity Id
             * Format: uuid
             */
            billing_entity_id: string;
            /** Bank Details Id */
            bank_details_id?: string | null;
            /**
             * Invoice Date
             * Format: date
             */
            invoice_date: string;
            /**
             * Billing Start Date
             * Format: date
             */
            billing_start_date: string;
            /**
             * Billing End Date
             * Format: date
             */
            billing_end_date: string;
            /**
             * Due Date
             * Format: date
             */
            due_date: string;
            /** Invoice Type */
            invoice_type: string;
            /**
             * Category
             * @default regular
             */
            category: string;
            /**
             * Supply Type
             * @default B2B
             */
            supply_type: string;
            /** Deed Number */
            deed_number?: string | null;
            /** Po Number */
            po_number?: string | null;
            /** Sgst Rate */
            sgst_rate?: number | string | null;
            /** Cgst Rate */
            cgst_rate?: number | string | null;
            /** Igst Rate */
            igst_rate?: number | string | null;
            /**
             * Line Items
             * @default []
             */
            line_items: components["schemas"]["InvoiceLineItemCreate"][];
        };
        /** InvoiceDetailOut */
        InvoiceDetailOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Invoice Number */
            invoice_number: string | null;
            /**
             * Invoice Date
             * Format: date
             */
            invoice_date: string;
            /**
             * Billing Start Date
             * Format: date
             */
            billing_start_date: string;
            /**
             * Billing End Date
             * Format: date
             */
            billing_end_date: string;
            /**
             * Due Date
             * Format: date
             */
            due_date: string;
            /** Invoice Type */
            invoice_type: string;
            /** Category */
            category: string;
            /** Status */
            status: string;
            /** Payment Status */
            payment_status: string;
            /** Tenant Id */
            tenant_id: string | null;
            /** Amenity Id */
            amenity_id: string | null;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /**
             * Billing Entity Id
             * Format: uuid
             */
            billing_entity_id: string;
            /** Bank Details Id */
            bank_details_id: string | null;
            /** Supply Type */
            supply_type: string;
            /** Billed To Name */
            billed_to_name: string;
            /** Billed To Gstin */
            billed_to_gstin: string;
            /** Billed To Pan */
            billed_to_pan: string;
            /** Deed Number */
            deed_number: string | null;
            /** Po Number */
            po_number: string | null;
            /** Sub Total */
            sub_total: string;
            /** Total Amount */
            total_amount: string;
            /** Sgst Rate */
            sgst_rate: string | null;
            /** Cgst Rate */
            cgst_rate: string | null;
            /** Igst Rate */
            igst_rate: string | null;
            /** E Invoice Status */
            e_invoice_status: string;
            /** E Invoice Irn */
            e_invoice_irn: string | null;
            /** E Invoice Ack No */
            e_invoice_ack_no: string | null;
            /** E Invoice Error Code */
            e_invoice_error_code: string | null;
            /** E Invoice Error Message */
            e_invoice_error_message: string | null;
            /** Approved At */
            approved_at: string | null;
            /** Property Name */
            property_name?: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /**
             * Line Items
             * @default []
             */
            line_items: components["schemas"]["InvoiceLineItemOut"][];
            /** Billed To Addr Line1 */
            billed_to_addr_line1?: string | null;
            /** Billed To Addr Line2 */
            billed_to_addr_line2?: string | null;
            /** Billed To City */
            billed_to_city?: string | null;
            /** Billed To State */
            billed_to_state?: string | null;
            /** Billed To Country */
            billed_to_country?: string | null;
            /** Billed To Pincode */
            billed_to_pincode?: string | null;
            /** Pos Addr Line1 */
            pos_addr_line1?: string | null;
            /** Pos Addr Line2 */
            pos_addr_line2?: string | null;
            /** Pos City */
            pos_city?: string | null;
            /** Pos State */
            pos_state?: string | null;
            /** Pos Pincode */
            pos_pincode?: string | null;
            /** Total Amount In Words */
            total_amount_in_words?: string | null;
            /** E Invoice Ack Dt */
            e_invoice_ack_dt?: string | null;
            /** Last Escalation Date */
            last_escalation_date?: string | null;
        };
        /** InvoiceEmailLogOut */
        InvoiceEmailLogOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Invoice Id
             * Format: uuid
             */
            invoice_id: string;
            /** Source */
            source: string;
            /** Subject */
            subject: string;
            /** Recipient Email */
            recipient_email: string;
            /** Cc Emails */
            cc_emails: string[];
            /** Status */
            status: string;
            /**
             * Sent At
             * Format: date-time
             */
            sent_at: string;
        };
        /**
         * InvoiceGenerateIn
         * @description Trigger monthly invoice generation for a billing period.
         */
        InvoiceGenerateIn: {
            /** Billing Period Start */
            billing_period_start?: string | null;
            /** Billing Period End */
            billing_period_end?: string | null;
            /** Property Id */
            property_id?: string | null;
            /** Billing Entity Id */
            billing_entity_id?: string | null;
        };
        /** InvoiceLineItemCreate */
        InvoiceLineItemCreate: {
            /** Lease Charge Schedule Id */
            lease_charge_schedule_id?: string | null;
            /** Charge Type */
            charge_type: string;
            /** Description */
            description: string;
            /** Hsn Code */
            hsn_code?: string | null;
            /** Quantity */
            quantity: number | string;
            /** Unit Price */
            unit_price: number | string;
            /** Tax Rate */
            tax_rate?: number | string | null;
            /** Amount */
            amount: number | string;
            /**
             * Sort Order
             * @default 0
             */
            sort_order: number;
        };
        /** InvoiceLineItemOut */
        InvoiceLineItemOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Invoice Id
             * Format: uuid
             */
            invoice_id: string;
            /** Charge Type */
            charge_type: string;
            /** Description */
            description: string;
            /** Hsn Code */
            hsn_code: string | null;
            /** Quantity */
            quantity: string;
            /** Unit Price */
            unit_price: string;
            /** Tax Rate */
            tax_rate: string | null;
            /** Amount */
            amount: string;
            /** Sort Order */
            sort_order: number;
        };
        /** InvoiceNumberUpdate */
        InvoiceNumberUpdate: {
            /** Invoice Number */
            invoice_number: string;
            /** Reason */
            reason?: string | null;
        };
        /** InvoiceOut */
        InvoiceOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Invoice Number */
            invoice_number: string | null;
            /**
             * Invoice Date
             * Format: date
             */
            invoice_date: string;
            /**
             * Billing Start Date
             * Format: date
             */
            billing_start_date: string;
            /**
             * Billing End Date
             * Format: date
             */
            billing_end_date: string;
            /**
             * Due Date
             * Format: date
             */
            due_date: string;
            /** Invoice Type */
            invoice_type: string;
            /** Category */
            category: string;
            /** Status */
            status: string;
            /** Payment Status */
            payment_status: string;
            /** Tenant Id */
            tenant_id: string | null;
            /** Amenity Id */
            amenity_id: string | null;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /**
             * Billing Entity Id
             * Format: uuid
             */
            billing_entity_id: string;
            /** Bank Details Id */
            bank_details_id: string | null;
            /** Supply Type */
            supply_type: string;
            /** Billed To Name */
            billed_to_name: string;
            /** Billed To Gstin */
            billed_to_gstin: string;
            /** Billed To Pan */
            billed_to_pan: string;
            /** Deed Number */
            deed_number: string | null;
            /** Po Number */
            po_number: string | null;
            /** Sub Total */
            sub_total: string;
            /** Total Amount */
            total_amount: string;
            /** Sgst Rate */
            sgst_rate: string | null;
            /** Cgst Rate */
            cgst_rate: string | null;
            /** Igst Rate */
            igst_rate: string | null;
            /** E Invoice Status */
            e_invoice_status: string;
            /** E Invoice Irn */
            e_invoice_irn: string | null;
            /** E Invoice Ack No */
            e_invoice_ack_no: string | null;
            /** E Invoice Error Code */
            e_invoice_error_code: string | null;
            /** E Invoice Error Message */
            e_invoice_error_message: string | null;
            /** Approved At */
            approved_at: string | null;
            /** Property Name */
            property_name?: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** InvoicePaymentCreate */
        InvoicePaymentCreate: {
            /**
             * Payment Date
             * Format: date
             */
            payment_date: string;
            /** Amount */
            amount: number | string;
            /** Receipt File Id */
            receipt_file_id?: string | null;
        };
        /** InvoicePaymentOut */
        InvoicePaymentOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Invoice Id
             * Format: uuid
             */
            invoice_id: string;
            /**
             * Payment Date
             * Format: date
             */
            payment_date: string;
            /** Amount */
            amount: string;
            /** Receipt File Id */
            receipt_file_id: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /** InvoiceStatusCountsOut */
        InvoiceStatusCountsOut: {
            /** Draft */
            draft: number;
            /** Pending */
            pending: number;
            /** Approved */
            approved: number;
            /** Sent */
            sent: number;
            /** Cancelled */
            cancelled: number;
            /** Total */
            total: number;
        };
        /** InvoiceStatusOverrideIn */
        InvoiceStatusOverrideIn: {
            /** Status */
            status: string;
            /** Reason */
            reason?: string | null;
        };
        /** InvoiceStatusUpdate */
        InvoiceStatusUpdate: {
            /** Status */
            status: string;
            /** Reject Reason */
            reject_reason?: string | null;
            /** Cancellation Reason */
            cancellation_reason?: string | null;
        };
        /** LeaseCreate */
        LeaseCreate: {
            /** Tenant Id */
            tenant_id?: string | null;
            /** Amenity Id */
            amenity_id?: string | null;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /**
             * Lease Start
             * Format: date
             */
            lease_start: string;
            /**
             * Lease End
             * Format: date
             */
            lease_end: string;
            /**
             * Security Deposit
             * @default 0
             */
            security_deposit: number | string;
            /** Document Id */
            document_id?: string | null;
            /**
             * Status
             * @default draft
             */
            status: string;
        };
        /** LeaseFloorCreate */
        LeaseFloorCreate: {
            /**
             * Floor Id
             * Format: uuid
             */
            floor_id: string;
            /** Floor Split Id */
            floor_split_id?: string | null;
            /** Occupied Area */
            occupied_area: number | string;
        };
        /** LeaseFloorOut */
        LeaseFloorOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Lease Version Id
             * Format: uuid
             */
            lease_version_id: string;
            /**
             * Floor Id
             * Format: uuid
             */
            floor_id: string;
            /** Floor Split Id */
            floor_split_id?: string | null;
            /** Occupied Area */
            occupied_area: string;
        };
        /** LeaseOut */
        LeaseOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Tenant Id */
            tenant_id: string | null;
            /** Amenity Id */
            amenity_id: string | null;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /**
             * Lease Start
             * Format: date
             */
            lease_start: string;
            /**
             * Lease End
             * Format: date
             */
            lease_end: string;
            /** Security Deposit */
            security_deposit: string;
            /** Document Id */
            document_id: string | null;
            /** Status */
            status: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** LeaseUpdate */
        LeaseUpdate: {
            /** Lease Start */
            lease_start?: string | null;
            /** Lease End */
            lease_end?: string | null;
            /** Security Deposit */
            security_deposit?: number | string | null;
            /** Document Id */
            document_id?: string | null;
            /** Status */
            status?: string | null;
        };
        /** LeaseVersionCreate */
        LeaseVersionCreate: {
            /**
             * Effective From
             * Format: date
             */
            effective_from: string;
            /** Effective To */
            effective_to?: string | null;
            /** Change Reason */
            change_reason?: string | null;
            /** Floors */
            floors: components["schemas"]["LeaseFloorCreate"][];
            /** Charge Schedules */
            charge_schedules: components["schemas"]["ChargeScheduleCreate"][];
        };
        /** LeaseVersionOut */
        LeaseVersionOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Lease Id
             * Format: uuid
             */
            lease_id: string;
            /** Version Number */
            version_number: number;
            /**
             * Effective From
             * Format: date
             */
            effective_from: string;
            /** Effective To */
            effective_to: string | null;
            /** Change Reason */
            change_reason: string | null;
            /**
             * Floors
             * @default []
             */
            floors: components["schemas"]["LeaseFloorOut"][];
            /**
             * Charge Schedules
             * @default []
             */
            charge_schedules: components["schemas"]["ChargeScheduleOut"][];
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /** MyAmenityDetailOut */
        MyAmenityDetailOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Name */
            name: string;
            /** Amenity Type */
            amenity_type: string;
            /** Tagline */
            tagline: string | null;
            /** Short Description */
            short_description: string | null;
            /** Location */
            location: string | null;
            /** Capacity */
            capacity: number | null;
            /** Website Link */
            website_link: string | null;
            /** Profile Pic File Id */
            profile_pic_file_id: string | null;
            /** Avg Rating */
            avg_rating: number | null;
            /** Review Count */
            review_count: number;
            /** Operating Hours */
            operating_hours: components["schemas"]["OperatingHoursOut"][];
            /** Reviews */
            reviews: components["schemas"]["AmenityReviewOut"][];
        };
        /**
         * MyAmenityOut
         * @description A lean, customer-facing amenity card (no GST/PAN/billing internals).
         */
        MyAmenityOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Name */
            name: string;
            /** Amenity Type */
            amenity_type: string;
            /** Tagline */
            tagline: string | null;
            /** Short Description */
            short_description: string | null;
            /** Location */
            location: string | null;
            /** Capacity */
            capacity: number | null;
            /** Website Link */
            website_link: string | null;
            /** Profile Pic File Id */
            profile_pic_file_id: string | null;
            /** Avg Rating */
            avg_rating: number | null;
            /** Review Count */
            review_count: number;
        };
        /** MyEventDetailOut */
        MyEventDetailOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Name */
            name: string;
            /** Category */
            category: string;
            /** Description */
            description: string;
            /**
             * Event Date
             * Format: date
             */
            event_date: string;
            /**
             * Start Time
             * Format: time
             */
            start_time: string;
            /** Duration Minutes */
            duration_minutes: number;
            /** Status */
            status: string;
            /** Is Booking Required */
            is_booking_required: boolean;
            /** I Am Interested */
            i_am_interested: boolean;
            /** Interested Count */
            interested_count: number;
            /** Agenda */
            agenda: string | null;
            /** Terms And Conditions */
            terms_and_conditions: string | null;
            /** Faqs */
            faqs: components["schemas"]["EventFaqOut"][];
            /** Performers */
            performers: components["schemas"]["EventPerformerOut"][];
            /** Gallery */
            gallery: components["schemas"]["EventGalleryImageOut"][];
        };
        /**
         * MyEventOut
         * @description An event as the customer sees it + whether I'm interested + interested count.
         */
        MyEventOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Name */
            name: string;
            /** Category */
            category: string;
            /** Description */
            description: string;
            /**
             * Event Date
             * Format: date
             */
            event_date: string;
            /**
             * Start Time
             * Format: time
             */
            start_time: string;
            /** Duration Minutes */
            duration_minutes: number;
            /** Status */
            status: string;
            /** Is Booking Required */
            is_booking_required: boolean;
            /** I Am Interested */
            i_am_interested: boolean;
            /** Interested Count */
            interested_count: number;
        };
        /** MyFeedbackIn */
        MyFeedbackIn: {
            /** Feedback */
            feedback: string;
        };
        /**
         * MyNotificationOut
         * @description A notification as seen by its recipient — body + this user's read state.
         */
        MyNotificationOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Message */
            message: string;
            /** Purpose */
            purpose: string;
            /** Icon */
            icon: string;
            /** Event Id */
            event_id: string | null;
            /** Amenity Id */
            amenity_id: string | null;
            /** Poll Id */
            poll_id: string | null;
            /** Status */
            status: string;
            /** Read At */
            read_at: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /**
         * MyParcelCreate
         * @description A resident pre-registers an expected parcel.
         */
        MyParcelCreate: {
            /** Delivery Company */
            delivery_company: string;
            /** Parcel Type */
            parcel_type?: string | null;
            /** Quantity */
            quantity?: number | null;
            /** Expected Date */
            expected_date?: string | null;
        };
        /**
         * MyParcelOut
         * @description A parcel addressed to my tenant.
         */
        MyParcelOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Parcel Type */
            parcel_type: string | null;
            /** Delivery Company */
            delivery_company: string;
            /** Quantity */
            quantity: number | null;
            /** Expected Date */
            expected_date: string | null;
            /** Status */
            status: string;
            /** Is Planned */
            is_planned: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /**
         * MyPollOut
         * @description A poll as the customer sees it: poll + its options + this user's current selections.
         */
        MyPollOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Title */
            title: string;
            /** Question */
            question: string;
            /** Answer Type */
            answer_type: string;
            /** Answer Sub Type */
            answer_sub_type: string | null;
            /** Status */
            status: string;
            /**
             * Start At
             * Format: date-time
             */
            start_at: string;
            /**
             * End At
             * Format: date-time
             */
            end_at: string;
            /** Options */
            options: components["schemas"]["PollOptionOut"][];
            /** My Option Ids */
            my_option_ids: string[];
            /** Has Responded */
            has_responded: boolean;
        };
        /**
         * MyProfileUpdate
         * @description Self-service profile edit. Deliberately narrow — a user cannot change their own
         *     property/tenant/role/active state (those are admin-controlled).
         */
        MyProfileUpdate: {
            /** Name */
            name?: string | null;
            /** Designation */
            designation?: string | null;
            /** Secondary Email */
            secondary_email?: string | null;
            /** Phone */
            phone?: string | null;
        };
        /**
         * MyVisitOut
         * @description A visit I host, as I see it.
         */
        MyVisitOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Visitor Name */
            visitor_name: string;
            /** Visitor Phone */
            visitor_phone: string;
            /** Visitor Organization */
            visitor_organization: string | null;
            /** Visit Type */
            visit_type: string;
            /** Status */
            status: string;
            /** Purpose Of Visit */
            purpose_of_visit: string | null;
            /** Scheduled At */
            scheduled_at: string | null;
            /** Check In At */
            check_in_at: string | null;
            /** Check Out At */
            check_out_at: string | null;
            /** Visit Code */
            visit_code: string | null;
            /** Num People */
            num_people: number | null;
            /** Include Parking */
            include_parking: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /**
         * MyWallOut
         * @description A community wall post + this user's reaction and the per-emoji counts.
         */
        MyWallOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Title */
            title: string;
            /** Description */
            description: string;
            /** Wall Type */
            wall_type: string;
            /** Image File Id */
            image_file_id: string | null;
            /** Is Resolved */
            is_resolved: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /** My Reaction */
            my_reaction: number | null;
            /** Reaction Counts */
            reaction_counts: {
                [key: string]: number;
            };
        };
        /** NotificationCreate */
        NotificationCreate: {
            /** Message */
            message: string;
            /** Purpose */
            purpose: string;
            /** Icon */
            icon: string;
            /** Event Id */
            event_id?: string | null;
            /** Amenity Id */
            amenity_id?: string | null;
            /** Poll Id */
            poll_id?: string | null;
        };
        /** NotificationOut */
        NotificationOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Message */
            message: string;
            /** Purpose */
            purpose: string;
            /** Icon */
            icon: string;
            /** Event Id */
            event_id: string | null;
            /** Amenity Id */
            amenity_id: string | null;
            /** Poll Id */
            poll_id: string | null;
            /** Is Disabled */
            is_disabled: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** NotificationRecipientSummary */
        NotificationRecipientSummary: {
            /** Pending */
            pending: number;
            /** Sent */
            sent: number;
            /** Delivered */
            delivered: number;
            /** Failed */
            failed: number;
            /** Read */
            read: number;
        };
        /** NotificationVisiblePropertySet */
        NotificationVisiblePropertySet: {
            /** Property Ids */
            property_ids: string[];
        };
        /** OccupancyOut */
        OccupancyOut: {
            /** Total Area */
            total_area: string;
            /** Slices */
            slices: components["schemas"]["AreaSlice"][];
        };
        /** OperatingHoursCreate */
        OperatingHoursCreate: {
            /** Day Of Week */
            day_of_week: number;
            /**
             * Open Time
             * Format: time
             */
            open_time: string;
            /**
             * Close Time
             * Format: time
             */
            close_time: string;
            /**
             * Is Active
             * @default true
             */
            is_active: boolean;
        };
        /** OperatingHoursOut */
        OperatingHoursOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Tenant Id */
            tenant_id: string | null;
            /** Amenity Id */
            amenity_id: string | null;
            /** Day Of Week */
            day_of_week: number;
            /**
             * Open Time
             * Format: time
             */
            open_time: string;
            /**
             * Close Time
             * Format: time
             */
            close_time: string;
            /** Is Active */
            is_active: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** OperatingHoursUpdate */
        OperatingHoursUpdate: {
            /** Open Time */
            open_time?: string | null;
            /** Close Time */
            close_time?: string | null;
            /** Is Active */
            is_active?: boolean | null;
        };
        /** OtpRequestIn */
        OtpRequestIn: {
            /**
             * Email
             * Format: email
             */
            email: string;
        };
        /** OtpVerifyIn */
        OtpVerifyIn: {
            /**
             * Email
             * Format: email
             */
            email: string;
            /** Otp */
            otp: string;
        };
        /** PageOut[AmenityOut] */
        PageOut_AmenityOut_: {
            /** Data */
            data: components["schemas"]["AmenityOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[BillingEntityListItem] */
        PageOut_BillingEntityListItem_: {
            /** Data */
            data: components["schemas"]["BillingEntityListItem"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[DebitNoteOut] */
        PageOut_DebitNoteOut_: {
            /** Data */
            data: components["schemas"]["DebitNoteOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[EmailLogOut] */
        PageOut_EmailLogOut_: {
            /** Data */
            data: components["schemas"]["EmailLogOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[EmailTemplateOut] */
        PageOut_EmailTemplateOut_: {
            /** Data */
            data: components["schemas"]["EmailTemplateOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[EventOut] */
        PageOut_EventOut_: {
            /** Data */
            data: components["schemas"]["EventOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[InvoiceOut] */
        PageOut_InvoiceOut_: {
            /** Data */
            data: components["schemas"]["InvoiceOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[LeaseOut] */
        PageOut_LeaseOut_: {
            /** Data */
            data: components["schemas"]["LeaseOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[MyAmenityOut] */
        PageOut_MyAmenityOut_: {
            /** Data */
            data: components["schemas"]["MyAmenityOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[MyEventOut] */
        PageOut_MyEventOut_: {
            /** Data */
            data: components["schemas"]["MyEventOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[MyNotificationOut] */
        PageOut_MyNotificationOut_: {
            /** Data */
            data: components["schemas"]["MyNotificationOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[MyParcelOut] */
        PageOut_MyParcelOut_: {
            /** Data */
            data: components["schemas"]["MyParcelOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[MyPollOut] */
        PageOut_MyPollOut_: {
            /** Data */
            data: components["schemas"]["MyPollOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[MyVisitOut] */
        PageOut_MyVisitOut_: {
            /** Data */
            data: components["schemas"]["MyVisitOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[MyWallOut] */
        PageOut_MyWallOut_: {
            /** Data */
            data: components["schemas"]["MyWallOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[NotificationOut] */
        PageOut_NotificationOut_: {
            /** Data */
            data: components["schemas"]["NotificationOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[ParcelOut] */
        PageOut_ParcelOut_: {
            /** Data */
            data: components["schemas"]["ParcelOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[PollOut] */
        PageOut_PollOut_: {
            /** Data */
            data: components["schemas"]["PollOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[PropertyOut] */
        PageOut_PropertyOut_: {
            /** Data */
            data: components["schemas"]["PropertyOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[SmsLogOut] */
        PageOut_SmsLogOut_: {
            /** Data */
            data: components["schemas"]["SmsLogOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[SmsTemplateOut] */
        PageOut_SmsTemplateOut_: {
            /** Data */
            data: components["schemas"]["SmsTemplateOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[TenantOut] */
        PageOut_TenantOut_: {
            /** Data */
            data: components["schemas"]["TenantOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[UserOut] */
        PageOut_UserOut_: {
            /** Data */
            data: components["schemas"]["UserOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[VisitOut] */
        PageOut_VisitOut_: {
            /** Data */
            data: components["schemas"]["VisitOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[VisitorOut] */
        PageOut_VisitorOut_: {
            /** Data */
            data: components["schemas"]["VisitorOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PageOut[WallOut] */
        PageOut_WallOut_: {
            /** Data */
            data: components["schemas"]["WallOut"][];
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** ParcelCreate */
        ParcelCreate: {
            /**
             * Tenant Id
             * Format: uuid
             */
            tenant_id: string;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** For Entity */
            for_entity: string;
            /** Parcel Type */
            parcel_type?: string | null;
            /** Delivery Company */
            delivery_company: string;
            /** Quantity */
            quantity?: number | null;
            /** Expected Date */
            expected_date?: string | null;
            /** Eta Minutes */
            eta_minutes?: number | null;
            /**
             * Is Planned
             * @default true
             */
            is_planned: boolean;
            /** Invoice Id */
            invoice_id?: string | null;
        };
        /** ParcelOut */
        ParcelOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Tenant Id
             * Format: uuid
             */
            tenant_id: string;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** For Entity */
            for_entity: string;
            /** Parcel Type */
            parcel_type: string | null;
            /** Delivery Company */
            delivery_company: string;
            /** Quantity */
            quantity: number | null;
            /** Expected Date */
            expected_date: string | null;
            /** Eta Minutes */
            eta_minutes: number | null;
            /** Invoice Id */
            invoice_id: string | null;
            /** Status */
            status: string;
            /** Is Planned */
            is_planned: boolean;
            /** Delivered At Reception At */
            delivered_at_reception_at: string | null;
            /** Delivery Pending Since */
            delivery_pending_since: string | null;
            /** Requested By */
            requested_by: string | null;
            /** Delivered By */
            delivered_by: string | null;
            /** Received By */
            received_by: string | null;
            /** Concern Notes */
            concern_notes: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /** Created By */
            created_by: string | null;
            /** Updated By */
            updated_by: string | null;
        };
        /** PollCreate */
        PollCreate: {
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** Title */
            title: string;
            /** Question */
            question: string;
            /** Answer Type */
            answer_type: string;
            /** Answer Sub Type */
            answer_sub_type?: string | null;
            /**
             * Status
             * @default upcoming
             */
            status: string;
            /**
             * Publish Result To Users
             * @default false
             */
            publish_result_to_users: boolean;
            /**
             * Start At
             * Format: date-time
             */
            start_at: string;
            /**
             * End At
             * Format: date-time
             */
            end_at: string;
            /** Priority */
            priority?: number | null;
        };
        /** PollOptionCreate */
        PollOptionCreate: {
            /**
             * Poll Id
             * Format: uuid
             */
            poll_id: string;
            /** Title */
            title: string;
            /** Value */
            value: string;
            /**
             * Sort Order
             * @default 0
             */
            sort_order: number;
        };
        /** PollOptionOut */
        PollOptionOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Poll Id
             * Format: uuid
             */
            poll_id: string;
            /** Title */
            title: string;
            /** Value */
            value: string;
            /** Sort Order */
            sort_order: number;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** PollOut */
        PollOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** Title */
            title: string;
            /** Question */
            question: string;
            /** Answer Type */
            answer_type: string;
            /** Answer Sub Type */
            answer_sub_type: string | null;
            /** Status */
            status: string;
            /** Cancellation Reason */
            cancellation_reason: string | null;
            /** Publish Result To Users */
            publish_result_to_users: boolean;
            /**
             * Start At
             * Format: date-time
             */
            start_at: string;
            /**
             * End At
             * Format: date-time
             */
            end_at: string;
            /** Priority */
            priority: number | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** PollResponseCreate */
        PollResponseCreate: {
            /**
             * Selected Option Id
             * Format: uuid
             */
            selected_option_id: string;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
        };
        /** PollResponseOut */
        PollResponseOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Poll Id
             * Format: uuid
             */
            poll_id: string;
            /**
             * User Id
             * Format: uuid
             */
            user_id: string;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /**
             * Selected Option Id
             * Format: uuid
             */
            selected_option_id: string;
            /**
             * Responded At
             * Format: date-time
             */
            responded_at: string;
        };
        /** PollResponseSummaryItem */
        PollResponseSummaryItem: {
            /**
             * Option Id
             * Format: uuid
             */
            option_id: string;
            /** Title */
            title: string;
            /** Value */
            value: string;
            /** Count */
            count: number;
        };
        /** PollUpdate */
        PollUpdate: {
            /** Title */
            title?: string | null;
            /** Question */
            question?: string | null;
            /** Answer Type */
            answer_type?: string | null;
            /** Answer Sub Type */
            answer_sub_type?: string | null;
            /** Status */
            status?: string | null;
            /** Publish Result To Users */
            publish_result_to_users?: boolean | null;
            /** Start At */
            start_at?: string | null;
            /** End At */
            end_at?: string | null;
            /** Priority */
            priority?: number | null;
            /** Cancellation Reason */
            cancellation_reason?: string | null;
        };
        /** PollVisiblePropertySet */
        PollVisiblePropertySet: {
            /** Property Ids */
            property_ids: string[];
        };
        /**
         * PollVoteIn
         * @description Submit a vote. One option for single_select/rating/slider; many for multi_select.
         */
        PollVoteIn: {
            /** Option Ids */
            option_ids: string[];
        };
        /** PresignOut */
        PresignOut: {
            /** Upload Url */
            upload_url: string;
            /** Storage Key */
            storage_key: string;
            /** Fields */
            fields: {
                [key: string]: unknown;
            };
        };
        /** PresignRequestIn */
        PresignRequestIn: {
            /** Original Name */
            original_name: string;
            /** Mime Type */
            mime_type: string;
            /** Size Bytes */
            size_bytes: number;
        };
        /** PropertyCreate */
        PropertyCreate: {
            /**
             * Billing Entity Id
             * Format: uuid
             */
            billing_entity_id: string;
            /** Name */
            name: string;
            /**
             * Status
             * @default active
             */
            status: string;
            /** Addr Line1 */
            addr_line1: string;
            /** Addr Line2 */
            addr_line2?: string | null;
            /** City */
            city: string;
            /** State */
            state: string;
            /**
             * Country
             * @default India
             */
            country: string;
            /** Pincode */
            pincode: string;
            /** Location */
            location?: string | null;
            /** Map Link */
            map_link?: string | null;
            /** Num Access Points */
            num_access_points?: number | null;
            /**
             * Parking Scope
             * @default property
             */
            parking_scope: string;
            /** Total Parking Slots */
            total_parking_slots?: number | null;
            /** Parking Levels */
            parking_levels?: number | null;
            /** Profile Pic File Id */
            profile_pic_file_id?: string | null;
        };
        /** PropertyOut */
        PropertyOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Billing Entity Id
             * Format: uuid
             */
            billing_entity_id: string;
            /** Name */
            name: string;
            /** Status */
            status: string;
            /** Addr Line1 */
            addr_line1: string;
            /** Addr Line2 */
            addr_line2: string | null;
            /** City */
            city: string;
            /** State */
            state: string;
            /** Country */
            country: string;
            /** Pincode */
            pincode: string;
            /** Location */
            location: string | null;
            /** Map Link */
            map_link: string | null;
            /** Num Access Points */
            num_access_points: number | null;
            /** Parking Scope */
            parking_scope: string;
            /** Total Parking Slots */
            total_parking_slots: number | null;
            /** Parking Levels */
            parking_levels: number | null;
            /** Profile Pic File Id */
            profile_pic_file_id: string | null;
            /** Is Active */
            is_active: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** PropertyStatsOut */
        PropertyStatsOut: {
            /** Num Towers */
            num_towers: number;
            /** Num Office Floors */
            num_office_floors: number;
            /** Num Basements */
            num_basements: number;
            /** Total Leasable Area */
            total_leasable_area: number;
            /** Occupied Floors */
            occupied_floors: number;
            /** Vacant Floors */
            vacant_floors: number;
            /** Occupied Basements */
            occupied_basements: number;
            /** Vacant Basements */
            vacant_basements: number;
            /** Occupied Area */
            occupied_area: number;
            /** Vacant Area */
            vacant_area: number;
            /** Total Parking Slots */
            total_parking_slots: number;
            /** Occupied Parking Slots */
            occupied_parking_slots: number;
            /** Vacant Parking Slots */
            vacant_parking_slots: number;
            /** Num Tenants */
            num_tenants: number;
            /** Num Amenities */
            num_amenities: number;
        };
        /** PropertyUpdate */
        PropertyUpdate: {
            /** Name */
            name?: string | null;
            /** Status */
            status?: string | null;
            /** Addr Line1 */
            addr_line1?: string | null;
            /** City */
            city?: string | null;
            /** State */
            state?: string | null;
            /** Pincode */
            pincode?: string | null;
            /** Location */
            location?: string | null;
            /** Map Link */
            map_link?: string | null;
            /** Num Access Points */
            num_access_points?: number | null;
            /** Parking Scope */
            parking_scope?: string | null;
            /** Total Parking Slots */
            total_parking_slots?: number | null;
            /** Profile Pic File Id */
            profile_pic_file_id?: string | null;
            /** Is Active */
            is_active?: boolean | null;
        };
        /** RefreshIn */
        RefreshIn: {
            /** Refresh Token */
            refresh_token: string;
        };
        /** RoleOut */
        RoleOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Name */
            name: string;
            /** Code */
            code: string;
        };
        /** ShiftTimingDay */
        ShiftTimingDay: {
            /** Day */
            day: string;
            /** From Time */
            from_time: string;
            /** To Time */
            to_time: string;
        };
        /** ShiftTimings */
        ShiftTimings: {
            /**
             * Is Same Every Day
             * @default false
             */
            is_same_every_day: boolean;
            /** From Time */
            from_time?: string | null;
            /** To Time */
            to_time?: string | null;
            /**
             * Timings
             * @default []
             */
            timings: components["schemas"]["ShiftTimingDay"][];
        };
        /** SmsLogOut */
        SmsLogOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Source */
            source: string;
            /** Phone */
            phone: string;
            /** Message */
            message: string;
            /** Status */
            status: string;
            /** Error */
            error: {
                [key: string]: unknown;
            } | null;
            /** Provider Response */
            provider_response: {
                [key: string]: unknown;
            } | null;
            /**
             * Sent At
             * Format: date-time
             */
            sent_at: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /** SmsTemplateCreate */
        SmsTemplateCreate: {
            /** Purpose */
            purpose: string;
            /** Source */
            source?: string | null;
            /** Template */
            template: string;
            /**
             * Template Vars
             * @default {}
             */
            template_vars: {
                [key: string]: unknown;
            };
        };
        /** SmsTemplateOut */
        SmsTemplateOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Purpose */
            purpose: string;
            /** Source */
            source: string | null;
            /** Template */
            template: string;
            /** Template Vars */
            template_vars: {
                [key: string]: unknown;
            };
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /** Created By */
            created_by: string | null;
            /** Updated By */
            updated_by: string | null;
        };
        /** SmsTemplateUpdate */
        SmsTemplateUpdate: {
            /** Purpose */
            purpose?: string | null;
            /** Source */
            source?: string | null;
            /** Template */
            template?: string | null;
            /** Template Vars */
            template_vars?: {
                [key: string]: unknown;
            } | null;
        };
        /** TenantContactCreate */
        TenantContactCreate: {
            /** User Id */
            user_id?: string | null;
            /** Name */
            name: string;
            /** Phone */
            phone?: string | null;
            /** Email */
            email?: string | null;
            /** Designation */
            designation?: string | null;
            /**
             * Contact Purpose
             * @default primary
             */
            contact_purpose: string;
        };
        /** TenantContactOut */
        TenantContactOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Tenant Id
             * Format: uuid
             */
            tenant_id: string;
            /** User Id */
            user_id: string | null;
            /** Name */
            name: string;
            /** Phone */
            phone: string | null;
            /** Email */
            email: string | null;
            /** Designation */
            designation: string | null;
            /** Contact Purpose */
            contact_purpose: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** TenantContactUpdate */
        TenantContactUpdate: {
            /** User Id */
            user_id?: string | null;
            /** Name */
            name?: string | null;
            /** Phone */
            phone?: string | null;
            /** Email */
            email?: string | null;
            /** Designation */
            designation?: string | null;
            /** Contact Purpose */
            contact_purpose?: string | null;
        };
        /** TenantCreate */
        TenantCreate: {
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** Name */
            name: string;
            /** Tenant Code */
            tenant_code?: string | null;
            /** Signup Flow */
            signup_flow?: string | null;
            /** Domain */
            domain?: string | null;
            /** Profile Pic File Id */
            profile_pic_file_id?: string | null;
            /**
             * Igst
             * @default 0
             */
            igst: number;
            /** Added By */
            added_by?: string | null;
            /** Pos Addr Line1 */
            pos_addr_line1: string;
            /** Pos Addr Line2 */
            pos_addr_line2?: string | null;
            /** Pos City */
            pos_city: string;
            /** Pos State */
            pos_state: string;
            /**
             * Pos Country
             * @default India
             */
            pos_country: string;
            /** Pos Pincode */
            pos_pincode: string;
            /** Bill Addr Line1 */
            bill_addr_line1?: string | null;
            /** Bill Addr Line2 */
            bill_addr_line2?: string | null;
            /** Bill City */
            bill_city?: string | null;
            /** Bill State */
            bill_state?: string | null;
            /** Bill Country */
            bill_country?: string | null;
            /** Bill Pincode */
            bill_pincode?: string | null;
            /**
             * Bill Same As Pos
             * @default false
             */
            bill_same_as_pos: boolean;
            /** Gstin */
            gstin: string;
            /** Pan */
            pan: string;
        };
        /** TenantFeedbackCreate */
        TenantFeedbackCreate: {
            /** Property Id */
            property_id?: string | null;
            /** Feedback */
            feedback: string;
        };
        /** TenantFeedbackOut */
        TenantFeedbackOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Tenant Id
             * Format: uuid
             */
            tenant_id: string;
            /** User Id */
            user_id: string | null;
            /** Property Id */
            property_id: string | null;
            /** Feedback */
            feedback: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** TenantFloorAssignmentItem */
        TenantFloorAssignmentItem: {
            /**
             * Floor Id
             * Format: uuid
             */
            floor_id: string;
            /** Floor Split Id */
            floor_split_id?: string | null;
            /** Occupied Area */
            occupied_area: number | string;
        };
        /** TenantFloorAssignmentOut */
        TenantFloorAssignmentOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Tenant Id
             * Format: uuid
             */
            tenant_id: string;
            /**
             * Floor Id
             * Format: uuid
             */
            floor_id: string;
            /** Floor Split Id */
            floor_split_id?: string | null;
            /** Occupied Area */
            occupied_area: string;
        };
        /** TenantFloorAssignmentSet */
        TenantFloorAssignmentSet: {
            /** Floors */
            floors: components["schemas"]["TenantFloorAssignmentItem"][];
        };
        /** TenantOut */
        TenantOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** Name */
            name: string;
            /** Tenant Code */
            tenant_code: string | null;
            /** Signup Flow */
            signup_flow: string | null;
            /** Domain */
            domain: string | null;
            /** Profile Pic File Id */
            profile_pic_file_id: string | null;
            /** Igst */
            igst: number;
            /** Added By */
            added_by: string | null;
            /** Pos Addr Line1 */
            pos_addr_line1: string;
            /** Pos Addr Line2 */
            pos_addr_line2: string | null;
            /** Pos City */
            pos_city: string;
            /** Pos State */
            pos_state: string;
            /** Pos Country */
            pos_country: string;
            /** Pos Pincode */
            pos_pincode: string;
            /** Bill Addr Line1 */
            bill_addr_line1: string | null;
            /** Bill Addr Line2 */
            bill_addr_line2: string | null;
            /** Bill City */
            bill_city: string | null;
            /** Bill State */
            bill_state: string | null;
            /** Bill Country */
            bill_country: string | null;
            /** Bill Pincode */
            bill_pincode: string | null;
            /** Bill Same As Pos */
            bill_same_as_pos: boolean;
            /** Gstin */
            gstin: string;
            /** Pan */
            pan: string;
            shift_timings?: components["schemas"]["ShiftTimings"] | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** TenantSlice */
        TenantSlice: {
            /** Name */
            name: string;
            /** Area */
            area: string;
            /** Percentage */
            percentage: string;
        };
        /** TenantStatsOut */
        TenantStatsOut: {
            /** Total Area */
            total_area: string;
            /** Slices */
            slices: components["schemas"]["TenantSlice"][];
        };
        /** TenantUpdate */
        TenantUpdate: {
            /** Name */
            name?: string | null;
            /** Tenant Code */
            tenant_code?: string | null;
            /** Signup Flow */
            signup_flow?: string | null;
            /** Domain */
            domain?: string | null;
            /** Profile Pic File Id */
            profile_pic_file_id?: string | null;
            /** Igst */
            igst?: number | null;
            /** Pos Addr Line1 */
            pos_addr_line1?: string | null;
            /** Pos Addr Line2 */
            pos_addr_line2?: string | null;
            /** Pos City */
            pos_city?: string | null;
            /** Pos State */
            pos_state?: string | null;
            /** Pos Country */
            pos_country?: string | null;
            /** Pos Pincode */
            pos_pincode?: string | null;
            /** Bill Addr Line1 */
            bill_addr_line1?: string | null;
            /** Bill Addr Line2 */
            bill_addr_line2?: string | null;
            /** Bill City */
            bill_city?: string | null;
            /** Bill State */
            bill_state?: string | null;
            /** Bill Country */
            bill_country?: string | null;
            /** Bill Pincode */
            bill_pincode?: string | null;
            /** Bill Same As Pos */
            bill_same_as_pos?: boolean | null;
            /** Gstin */
            gstin?: string | null;
            /** Pan */
            pan?: string | null;
            shift_timings?: components["schemas"]["ShiftTimings"] | null;
        };
        /** TokenOut */
        TokenOut: {
            /** Access Token */
            access_token: string;
            /** Refresh Token */
            refresh_token: string;
            /**
             * Token Type
             * @default bearer
             */
            token_type: string;
        };
        /** TowerCreate */
        TowerCreate: {
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** Name */
            name: string;
            /**
             * Num Stilts
             * @default 0
             */
            num_stilts: number;
            /**
             * Total Parking Slots
             * @default 0
             */
            total_parking_slots: number;
        };
        /** TowerFloorCreate */
        TowerFloorCreate: {
            /**
             * Tower Id
             * Format: uuid
             */
            tower_id: string;
            /** Floor Number */
            floor_number: number;
            /** Floor Type */
            floor_type: string;
            /** Leasable Area */
            leasable_area: number;
            /**
             * Is Sez Zone
             * @default false
             */
            is_sez_zone: boolean;
            /**
             * Igst
             * @default 0
             */
            igst: number;
        };
        /** TowerFloorOut */
        TowerFloorOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Tower Id
             * Format: uuid
             */
            tower_id: string;
            /** Floor Number */
            floor_number: number;
            /** Floor Type */
            floor_type: string;
            /** Leasable Area */
            leasable_area: number;
            /**
             * Occupied Area
             * @default 0
             */
            occupied_area: number;
            /** Is Sez Zone */
            is_sez_zone: boolean;
            /** Igst */
            igst: number;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /** TowerFloorUpdate */
        TowerFloorUpdate: {
            /** Leasable Area */
            leasable_area?: number | null;
            /** Is Sez Zone */
            is_sez_zone?: boolean | null;
            /** Igst */
            igst?: number | null;
        };
        /** TowerOut */
        TowerOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** Name */
            name: string;
            /** Num Stilts */
            num_stilts: number;
            /** Total Parking Slots */
            total_parking_slots: number;
            /**
             * Num Office Floors
             * @default 0
             */
            num_office_floors: number;
            /**
             * Num Basements
             * @default 0
             */
            num_basements: number;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** TowerStatsOut */
        TowerStatsOut: {
            /** Total Area */
            total_area: string;
            /** Slices */
            slices: components["schemas"]["AreaSlice"][];
        };
        /** TowerUpdate */
        TowerUpdate: {
            /** Name */
            name?: string | null;
            /** Num Stilts */
            num_stilts?: number | null;
            /** Total Parking Slots */
            total_parking_slots?: number | null;
        };
        /** UnreadCountOut */
        UnreadCountOut: {
            /** Count */
            count: number;
        };
        /** UserCreate */
        UserCreate: {
            /**
             * Role Id
             * Format: uuid
             */
            role_id: string;
            /** Billing Entity Id */
            billing_entity_id?: string | null;
            /** Property Id */
            property_id?: string | null;
            /** Tenant Id */
            tenant_id?: string | null;
            /** Tower Id */
            tower_id?: string | null;
            /** User Code */
            user_code?: string | null;
            /** Name */
            name: string;
            /** Designation */
            designation?: string | null;
            /** Email */
            email: string;
            /** Secondary Email */
            secondary_email?: string | null;
            /** Phone */
            phone: string;
            /** Invoice Email Role */
            invoice_email_role?: string | null;
        };
        /** UserMeOut */
        UserMeOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Role Id
             * Format: uuid
             */
            role_id: string;
            /** Billing Entity Id */
            billing_entity_id: string | null;
            /** Property Id */
            property_id: string | null;
            /** Tenant Id */
            tenant_id: string | null;
            /** Tower Id */
            tower_id: string | null;
            /** User Code */
            user_code: string;
            /** Name */
            name: string;
            /** Designation */
            designation: string | null;
            /** Email */
            email: string;
            /** Secondary Email */
            secondary_email: string | null;
            /** Phone */
            phone: string;
            /** Is Email Verified */
            is_email_verified: boolean;
            /** Is Active */
            is_active: boolean;
            /** Invoice Email Role */
            invoice_email_role: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /** Deleted At */
            deleted_at: string | null;
            role: components["schemas"]["RoleOut"];
        };
        /** UserOut */
        UserOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Role Id
             * Format: uuid
             */
            role_id: string;
            /** Billing Entity Id */
            billing_entity_id: string | null;
            /** Property Id */
            property_id: string | null;
            /** Tenant Id */
            tenant_id: string | null;
            /** Tower Id */
            tower_id: string | null;
            /** User Code */
            user_code: string;
            /** Name */
            name: string;
            /** Designation */
            designation: string | null;
            /** Email */
            email: string;
            /** Secondary Email */
            secondary_email: string | null;
            /** Phone */
            phone: string;
            /** Is Email Verified */
            is_email_verified: boolean;
            /** Is Active */
            is_active: boolean;
            /** Invoice Email Role */
            invoice_email_role: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /** Deleted At */
            deleted_at: string | null;
        };
        /** UserUpdate */
        UserUpdate: {
            /** Name */
            name?: string | null;
            /** Designation */
            designation?: string | null;
            /** Secondary Email */
            secondary_email?: string | null;
            /** Phone */
            phone?: string | null;
            /** Invoice Email Role */
            invoice_email_role?: string | null;
            /** Is Active */
            is_active?: boolean | null;
            /** Property Id */
            property_id?: string | null;
            /** Tenant Id */
            tenant_id?: string | null;
            /** Tower Id */
            tower_id?: string | null;
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
            /** Input */
            input?: unknown;
            /** Context */
            ctx?: Record<string, never>;
        };
        /** VisitCreate */
        VisitCreate: {
            /**
             * Visitor Id
             * Format: uuid
             */
            visitor_id: string;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** Tower Id */
            tower_id?: string | null;
            /** Floor Id */
            floor_id?: string | null;
            /** Host Tenant Id */
            host_tenant_id?: string | null;
            visit_type: components["schemas"]["VisitType"];
            /** Purpose Of Visit */
            purpose_of_visit?: string | null;
            /** Scheduled At */
            scheduled_at?: string | null;
            /**
             * Vehicle Numbers
             * @default []
             */
            vehicle_numbers: string[];
            /** Num People */
            num_people?: number | null;
            /**
             * Include Parking
             * @default false
             */
            include_parking: boolean;
            /** Gate Number */
            gate_number?: number | null;
            /** Host Name */
            host_name?: string | null;
        };
        /** VisitOut */
        VisitOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Visitor Id
             * Format: uuid
             */
            visitor_id: string;
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** Tower Id */
            tower_id: string | null;
            /** Floor Id */
            floor_id: string | null;
            /** Host Tenant Id */
            host_tenant_id: string | null;
            /** Visit Type */
            visit_type: string;
            /** Status */
            status: string;
            /** Purpose Of Visit */
            purpose_of_visit: string | null;
            /** Scheduled At */
            scheduled_at: string | null;
            /** Check In At */
            check_in_at: string | null;
            /** Check Out At */
            check_out_at: string | null;
            /** Vehicle Numbers */
            vehicle_numbers: string[];
            /** Num People */
            num_people: number | null;
            /** Include Parking */
            include_parking: boolean;
            /** Visit Code */
            visit_code: string | null;
            /** Visit Code Url */
            visit_code_url: string | null;
            /** Approved By */
            approved_by: string | null;
            /** Rejected By */
            rejected_by: string | null;
            /** Checked In By */
            checked_in_by: string | null;
            /** Checked Out By */
            checked_out_by: string | null;
            /** Gate Number */
            gate_number: number | null;
            /** Host Name */
            host_name: string | null;
            /** Is Alerted */
            is_alerted: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /** Created By */
            created_by: string | null;
            /** Updated By */
            updated_by: string | null;
            visitor?: components["schemas"]["VisitorSummary"] | null;
        };
        /**
         * VisitType
         * @enum {string}
         */
        VisitType: "planned" | "unplanned" | "walk_in";
        /** VisitorCreate */
        VisitorCreate: {
            /**
             * Property Id
             * Format: uuid
             */
            property_id: string;
            /** Name */
            name: string;
            /** Phone */
            phone: string;
            /** Email */
            email?: string | null;
            /** Organization */
            organization?: string | null;
            /** Photo File Id */
            photo_file_id?: string | null;
        };
        /** VisitorOut */
        VisitorOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Name */
            name: string;
            /** Phone */
            phone: string;
            /** Email */
            email: string | null;
            /** Organization */
            organization: string | null;
            /** Photo File Id */
            photo_file_id: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** VisitorSummary */
        VisitorSummary: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Name */
            name: string;
            /** Phone */
            phone: string;
            /** Organization */
            organization: string | null;
        };
        /** WallCreate */
        WallCreate: {
            /** Title */
            title: string;
            /** Description */
            description: string;
            /** Wall Type */
            wall_type: string;
            /** Event Id */
            event_id?: string | null;
            /** Amenity Id */
            amenity_id?: string | null;
            /** Poll Id */
            poll_id?: string | null;
            /** Property Id */
            property_id?: string | null;
            /** Image File Id */
            image_file_id?: string | null;
            /**
             * Is Resolved
             * @default false
             */
            is_resolved: boolean;
        };
        /** WallInteractionCreate */
        WallInteractionCreate: {
            /** Response */
            response: number;
        };
        /** WallInteractionOut */
        WallInteractionOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /**
             * Wall Id
             * Format: uuid
             */
            wall_id: string;
            /**
             * User Id
             * Format: uuid
             */
            user_id: string;
            /** Response */
            response: number;
            /** Property Id */
            property_id: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /** WallOut */
        WallOut: {
            /**
             * Id
             * Format: uuid
             */
            id: string;
            /** Title */
            title: string;
            /** Description */
            description: string;
            /** Wall Type */
            wall_type: string;
            /** Event Id */
            event_id: string | null;
            /** Amenity Id */
            amenity_id: string | null;
            /** Poll Id */
            poll_id: string | null;
            /** Property Id */
            property_id: string | null;
            /** Image File Id */
            image_file_id: string | null;
            /** Is Resolved */
            is_resolved: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /**
         * WallReactIn
         * @description Emoji reaction code 1..5 (1 Good, 2 Love, 3 Clap, 4 Satisfied, 5 Unsatisfied).
         */
        WallReactIn: {
            /** Response */
            response: number;
        };
        /** WallUpdate */
        WallUpdate: {
            /** Title */
            title?: string | null;
            /** Description */
            description?: string | null;
            /** Wall Type */
            wall_type?: string | null;
            /** Event Id */
            event_id?: string | null;
            /** Amenity Id */
            amenity_id?: string | null;
            /** Poll Id */
            poll_id?: string | null;
            /** Property Id */
            property_id?: string | null;
            /** Image File Id */
            image_file_id?: string | null;
            /** Is Resolved */
            is_resolved?: boolean | null;
        };
        /** WallVisiblePropertySet */
        WallVisiblePropertySet: {
            /** Property Ids */
            property_ids: string[];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    request_otp_shared_v1_auth_otp_request_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OtpRequestIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    verify_otp_shared_v1_auth_otp_verify_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OtpVerifyIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    refresh_shared_v1_auth_refresh_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RefreshIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    logout_shared_v1_auth_logout_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RefreshIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_me_shared_v1_auth_me_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserMeOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_my_account_shared_v1_auth_me_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteAccountIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_my_profile_shared_v1_auth_me_patch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MyProfileUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserMeOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_roles_admin_v1_roles_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RoleOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_users_admin_v1_users_get: {
        parameters: {
            query?: {
                property_id?: string | null;
                billing_entity_id?: string | null;
                role_code?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_UserOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_user_admin_v1_users_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_admin_v1_users__user_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_user_admin_v1_users__user_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_user_admin_v1_users__user_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_billing_entities_admin_v1_billing_entities_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_BillingEntityListItem_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_billing_entity_admin_v1_billing_entities_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BillingEntityCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingEntityOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_billing_entity_admin_v1_billing_entities__entity_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingEntityOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_billing_entity_admin_v1_billing_entities__entity_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_billing_entity_admin_v1_billing_entities__entity_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entity_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BillingEntityUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BillingEntityOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_entity_addresses_admin_v1_billing_entities__entity_id__addresses_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EntityAddressSetOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_entity_address_admin_v1_billing_entities__entity_id__addresses_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entity_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EntityAddressSetIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EntityAddressSetOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_entity_address_admin_v1_billing_entities__entity_id__addresses__address_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entity_id: string;
                address_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_entity_credential_admin_v1_billing_entities__entity_id__credentials_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EntityCredentialOut"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    upsert_entity_credential_admin_v1_billing_entities__entity_id__credentials_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entity_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EntityCredentialCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EntityCredentialOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_bank_details_admin_v1_bank_details_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BankDetailsCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BankDetailsOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_bank_details_admin_v1_billing_entities__entity_id__bank_details_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                entity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BankDetailsOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_bank_details_admin_v1_bank_details__bd_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                bd_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_bank_details_admin_v1_bank_details__bd_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                bd_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BankDetailsUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BankDetailsOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_properties_admin_v1_properties_get: {
        parameters: {
            query?: {
                billing_entity_id?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_PropertyOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_property_admin_v1_properties_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PropertyCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PropertyOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_property_admin_v1_properties__property_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                property_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PropertyOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_property_admin_v1_properties__property_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                property_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_property_admin_v1_properties__property_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                property_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PropertyUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PropertyOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_property_stats_admin_v1_properties__property_id__stats_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                property_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PropertyStatsOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_tower_admin_v1_towers_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TowerCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TowerOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_towers_admin_v1_properties__property_id__towers_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                property_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TowerOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_tower_admin_v1_towers__tower_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tower_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_tower_admin_v1_towers__tower_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tower_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TowerUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TowerOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_floor_admin_v1_tower_floors_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TowerFloorCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TowerFloorOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_floors_admin_v1_towers__tower_id__floors_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tower_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TowerFloorOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_floor_admin_v1_tower_floors__floor_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                floor_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_floor_admin_v1_tower_floors__floor_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                floor_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TowerFloorUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TowerFloorOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_floor_splits_admin_v1_tower_floors__floor_id__splits_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                floor_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FloorSplitOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    set_floor_splits_admin_v1_tower_floors__floor_id__splits_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                floor_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FloorSplitSet"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FloorSplitOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_tenants_admin_v1_tenants_get: {
        parameters: {
            query?: {
                property_id?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_TenantOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_tenant_admin_v1_tenants_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TenantCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tenant_admin_v1_tenants__tenant_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tenant_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_tenant_admin_v1_tenants__tenant_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tenant_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_tenant_admin_v1_tenants__tenant_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tenant_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TenantUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_floor_assignments_admin_v1_tenants__tenant_id__floor_assignments_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tenant_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantFloorAssignmentOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    set_floor_assignments_admin_v1_tenants__tenant_id__floor_assignments_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tenant_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TenantFloorAssignmentSet"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantFloorAssignmentOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_contacts_admin_v1_tenants__tenant_id__contacts_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tenant_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantContactOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_contact_admin_v1_tenants__tenant_id__contacts_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tenant_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TenantContactCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantContactOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_contact_admin_v1_tenant_contacts__contact_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_contact_admin_v1_tenant_contacts__contact_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contact_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TenantContactUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantContactOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_feedbacks_admin_v1_tenants__tenant_id__feedbacks_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tenant_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantFeedbackOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_feedback_admin_v1_tenants__tenant_id__feedbacks_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tenant_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TenantFeedbackCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantFeedbackOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    submit_my_feedback_shared_v1_feedback_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MyFeedbackIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantFeedbackOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_amenities_admin_v1_amenities_get: {
        parameters: {
            query?: {
                property_id?: string | null;
                tower_id?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_AmenityOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_amenity_admin_v1_amenities_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AmenityCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_amenity_admin_v1_amenities__amenity_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_amenity_admin_v1_amenities__amenity_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_amenity_admin_v1_amenities__amenity_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AmenityUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_occupancies_admin_v1_amenities__amenity_id__occupancies_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityOccupancyOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_occupancy_admin_v1_amenities__amenity_id__occupancies_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AmenityOccupancyCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityOccupancyOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_occupancy_admin_v1_amenity_occupancies__occupancy_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                occupancy_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_occupancy_admin_v1_amenity_occupancies__occupancy_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                occupancy_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AmenityOccupancyUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityOccupancyOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_operators_admin_v1_amenities__amenity_id__operators_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityOperatorOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_operator_admin_v1_amenities__amenity_id__operators_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AmenityOperatorCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityOperatorOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_operator_admin_v1_amenity_operators__operator_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                operator_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_operator_admin_v1_amenity_operators__operator_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                operator_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AmenityOperatorUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityOperatorOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_reviews_admin_v1_amenities__amenity_id__reviews_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityReviewOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_review_admin_v1_amenities__amenity_id__reviews_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AmenityReviewCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityReviewOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_unavailable_dates_admin_v1_amenities__amenity_id__unavailable_dates_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityUnavailableDateOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_unavailable_date_admin_v1_amenities__amenity_id__unavailable_dates_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AmenityUnavailableDateCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityUnavailableDateOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_unavailable_date_admin_v1_amenity_unavailable_dates__unavailable_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                unavailable_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_operating_hours_admin_v1_amenities__amenity_id__operating_hours_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OperatingHoursOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_operating_hours_admin_v1_amenities__amenity_id__operating_hours_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OperatingHoursCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OperatingHoursOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_operating_hours_admin_v1_operating_hours__hours_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                hours_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_operating_hours_admin_v1_operating_hours__hours_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                hours_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OperatingHoursUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OperatingHoursOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_my_amenities_shared_v1_amenities_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_MyAmenityOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_my_amenity_shared_v1_amenities__amenity_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MyAmenityDetailOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    submit_my_review_shared_v1_amenities__amenity_id__reviews_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                amenity_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AmenityReviewCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AmenityReviewOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_leases_admin_v1_leases_get: {
        parameters: {
            query?: {
                property_id?: string | null;
                tenant_id?: string | null;
                status?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_LeaseOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_lease_admin_v1_leases_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LeaseCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeaseOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_lease_admin_v1_leases__lease_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lease_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeaseOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_lease_admin_v1_leases__lease_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lease_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LeaseUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeaseOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_escalation_rules_admin_v1_leases__lease_id__escalation_rules_get: {
        parameters: {
            query?: {
                version_id?: string | null;
            };
            header?: never;
            path: {
                lease_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EscalationRuleOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_escalation_rule_admin_v1_leases__lease_id__escalation_rules_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lease_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EscalationRuleCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EscalationRuleOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_escalation_rule_admin_v1_escalation_rules__rule_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                rule_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_lease_versions_admin_v1_leases__lease_id__versions_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lease_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeaseVersionOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_lease_version_admin_v1_leases__lease_id__versions_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                lease_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LeaseVersionCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeaseVersionOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_lease_version_admin_v1_lease_versions__version_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_charge_schedules_admin_v1_lease_versions__version_id__charge_schedules_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChargeScheduleOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_version_floors_admin_v1_lease_versions__version_id__floors_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeaseFloorOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_monthly_admin_v1_invoices_generate_monthly_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InvoiceGenerateIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_invoice_status_counts_admin_v1_invoices_status_counts_get: {
        parameters: {
            query?: {
                property_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceStatusCountsOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    bulk_submit_gst_admin_v1_invoices_bulk_submit_gst_post: {
        parameters: {
            query?: {
                property_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BulkOperationOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    bulk_send_invoices_to_client_admin_v1_invoices_bulk_send_post: {
        parameters: {
            query?: {
                property_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BulkOperationOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_invoices_admin_v1_invoices_get: {
        parameters: {
            query?: {
                property_id?: string | null;
                tenant_id?: string | null;
                status?: string | null;
                e_invoice_status?: string | null;
                billing_period_start?: string | null;
                billing_period_end?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_InvoiceOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_invoice_admin_v1_invoices_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InvoiceCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_invoice_admin_v1_invoices__invoice_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceDetailOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_invoice_admin_v1_invoices__invoice_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    submit_for_approval_admin_v1_invoices__invoice_id__submit_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    cancel_invoice_admin_v1_invoices__invoice_id__cancel_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InvoiceStatusUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    rename_invoice_number_admin_v1_invoices__invoice_id__invoice_number_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InvoiceNumberUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    admin_override_status_admin_v1_invoices__invoice_id__admin_status_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InvoiceStatusOverrideIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_payments_admin_v1_invoices__invoice_id__payments_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoicePaymentOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_payment_admin_v1_invoices__invoice_id__payments_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InvoicePaymentCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoicePaymentOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_invoice_pdf_admin_v1_invoices__invoice_id__pdf_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    send_invoice_to_client_admin_v1_invoices__invoice_id__send_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_invoice_email_logs_admin_v1_invoices__invoice_id__email_logs_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceEmailLogOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_invoice_audit_log_admin_v1_invoices__invoice_id__audit_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceAuditEventOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    preview_irp_payload_admin_v1_invoices__invoice_id__e_invoice_preview_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    submit_e_invoice_admin_v1_invoices__invoice_id__e_invoice_submit_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EInvoiceOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    cancel_e_invoice_admin_v1_invoices__invoice_id__e_invoice_cancel_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EInvoiceCancelIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EInvoiceOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_debit_notes_admin_v1_debit_notes_get: {
        parameters: {
            query?: {
                property_id?: string | null;
                tenant_id?: string | null;
                status?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_DebitNoteOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_debit_note_admin_v1_debit_notes_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DebitNoteCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DebitNoteOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_debit_note_admin_v1_debit_notes__dn_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dn_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DebitNoteOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_events_admin_v1_events_get: {
        parameters: {
            query?: {
                property_id?: string | null;
                status?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_EventOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_event_admin_v1_events_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_event_admin_v1_events__event_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_event_admin_v1_events__event_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_event_admin_v1_events__event_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    publish_event_admin_v1_events__event_id__publish_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_faq_admin_v1_event_faqs_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventFaqCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventFaqOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_faqs_admin_v1_events__event_id__faqs_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventFaqOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_performer_admin_v1_event_performers_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventPerformerCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventPerformerOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_performers_admin_v1_events__event_id__performers_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventPerformerOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_gallery_image_admin_v1_event_gallery_images_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventGalleryImageCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventGalleryImageOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    set_event_visible_properties_admin_v1_events__event_id__visible_properties_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventVisiblePropertySet"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_interactions_admin_v1_events__event_id__interactions_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventInteractionOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    toggle_interaction_admin_v1_events__event_id__interactions_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventInteractionCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EventInteractionOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_polls_admin_v1_polls_get: {
        parameters: {
            query?: {
                property_id?: string | null;
                status?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_PollOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_poll_admin_v1_polls_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PollCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PollOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_poll_admin_v1_polls__poll_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                poll_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PollOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_poll_admin_v1_polls__poll_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                poll_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_poll_admin_v1_polls__poll_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                poll_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PollUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PollOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_option_admin_v1_poll_options_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PollOptionCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PollOptionOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_options_admin_v1_polls__poll_id__options_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                poll_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PollOptionOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    set_poll_visible_properties_admin_v1_polls__poll_id__visible_properties_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                poll_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PollVisiblePropertySet"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    submit_response_admin_v1_polls__poll_id__responses_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                poll_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PollResponseCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PollResponseOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_responses_summary_admin_v1_polls__poll_id__responses_summary_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                poll_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PollResponseSummaryItem"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_walls_admin_v1_walls_get: {
        parameters: {
            query?: {
                property_id?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_WallOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_wall_admin_v1_walls_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WallCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WallOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_wall_admin_v1_walls__wall_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                wall_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WallOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_wall_admin_v1_walls__wall_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                wall_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_wall_admin_v1_walls__wall_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                wall_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WallUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WallOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    set_wall_visible_properties_admin_v1_walls__wall_id__visible_properties_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                wall_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WallVisiblePropertySet"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    submit_wall_interaction_admin_v1_walls__wall_id__interactions_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                wall_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WallInteractionCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WallInteractionOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_my_polls_shared_v1_polls_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_MyPollOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    vote_on_poll_shared_v1_polls__poll_id__vote_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                poll_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PollVoteIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_my_walls_shared_v1_walls_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_MyWallOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    react_to_wall_shared_v1_walls__wall_id__reaction_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                wall_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WallReactIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    unreact_wall_shared_v1_walls__wall_id__reaction_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                wall_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_my_events_shared_v1_events_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_MyEventOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_my_event_shared_v1_events__event_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MyEventDetailOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    set_event_interest_shared_v1_events__event_id__interest_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    remove_event_interest_shared_v1_events__event_id__interest_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                event_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_notifications_admin_v1_notifications_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_NotificationOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_notification_admin_v1_notifications_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NotificationCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NotificationOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_notification_admin_v1_notifications__notification_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                notification_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NotificationOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_notification_admin_v1_notifications__notification_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                notification_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    set_visible_properties_admin_v1_notifications__notification_id__visible_properties_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                notification_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NotificationVisiblePropertySet"];
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_recipients_summary_admin_v1_notifications__notification_id__recipients_summary_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                notification_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NotificationRecipientSummary"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_my_notifications_shared_v1_notifications_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_MyNotificationOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    my_unread_count_shared_v1_notifications_unread_count_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnreadCountOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    mark_my_notification_read_shared_v1_notifications__notification_id__read_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                notification_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_visitors_admin_v1_visitors_get: {
        parameters: {
            query: {
                property_id: string;
                search?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_VisitorOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_or_create_visitor_admin_v1_visitors_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["VisitorCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitorOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_visitor_admin_v1_visitors__visitor_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visitor_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitorOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_visits_admin_v1_visits_get: {
        parameters: {
            query?: {
                property_id?: string | null;
                status?: string | null;
                visit_type?: string | null;
                search?: string | null;
                start_date?: string | null;
                end_date?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_VisitOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_visit_admin_v1_visits_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["VisitCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_visit_admin_v1_visits__visit_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    approve_visit_admin_v1_visits__visit_id__approve_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    reject_visit_admin_v1_visits__visit_id__reject_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    cancel_visit_admin_v1_visits__visit_id__cancel_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    check_in_visit_admin_v1_visits__visit_id__check_in_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    check_out_visit_admin_v1_visits__visit_id__check_out_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    no_show_visit_admin_v1_visits__visit_id__no_show_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    resend_visit_code_admin_v1_visits__visit_id__resend_code_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_parcels_admin_v1_parcels_get: {
        parameters: {
            query: {
                property_id: string;
                status?: string | null;
                tenant_id?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_ParcelOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_parcel_admin_v1_parcels_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ParcelCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ParcelOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_parcel_admin_v1_parcels__parcel_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                parcel_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ParcelOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    receive_parcel_admin_v1_parcels__parcel_id__receive_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                parcel_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ParcelOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    deliver_parcel_admin_v1_parcels__parcel_id__deliver_patch: {
        parameters: {
            query: {
                delivered_to_user_id: string;
            };
            header?: never;
            path: {
                parcel_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ParcelOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_my_visits_shared_v1_visits_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_MyVisitOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    invite_visitor_shared_v1_visits_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InviteVisitorIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MyVisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    cancel_my_visit_shared_v1_visits__visit_id__cancel_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    gate_lookup_shared_v1_visits_lookup__code__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MyVisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    gate_queue_shared_v1_visits_gate_queue_get: {
        parameters: {
            query?: {
                status?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_MyVisitOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    gate_approve_shared_v1_visits__visit_id__gate_approve_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MyVisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    gate_check_in_shared_v1_visits__visit_id__gate_check_in_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MyVisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    gate_check_out_shared_v1_visits__visit_id__gate_check_out_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visit_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MyVisitOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_my_parcels_shared_v1_parcels_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_MyParcelOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_my_parcel_shared_v1_parcels_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MyParcelCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MyParcelOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_email_templates_admin_v1_email_templates_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_EmailTemplateOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_email_template_admin_v1_email_templates_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmailTemplateCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailTemplateOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_email_template_admin_v1_email_templates__template_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                template_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailTemplateOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_email_template_admin_v1_email_templates__template_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                template_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_email_template_admin_v1_email_templates__template_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                template_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmailTemplateUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailTemplateOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_sms_templates_admin_v1_sms_templates_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_SmsTemplateOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_sms_template_admin_v1_sms_templates_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SmsTemplateCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SmsTemplateOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_sms_template_admin_v1_sms_templates__template_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                template_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SmsTemplateOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_sms_template_admin_v1_sms_templates__template_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                template_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_sms_template_admin_v1_sms_templates__template_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                template_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SmsTemplateUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SmsTemplateOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_email_logs_admin_v1_email_logs_get: {
        parameters: {
            query?: {
                source?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_EmailLogOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_sms_logs_admin_v1_sms_logs_get: {
        parameters: {
            query?: {
                source?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageOut_SmsLogOut_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    presign_upload_shared_v1_files_presign_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PresignRequestIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PresignOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    confirm_upload_shared_v1_files_confirm_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FileConfirmIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_file_shared_v1_files__file_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                file_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    occupancy_admin_v1_analytics_occupancy_get: {
        parameters: {
            query?: {
                entity_id?: string | null;
                property_id?: string | null;
                tower_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OccupancyOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    tower_stats_admin_v1_analytics_tower_stats_get: {
        parameters: {
            query?: {
                entity_id?: string | null;
                property_id?: string | null;
                tower_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TowerStatsOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    tenant_stats_admin_v1_analytics_tenant_stats_get: {
        parameters: {
            query?: {
                entity_id?: string | null;
                property_id?: string | null;
                tower_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TenantStatsOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    health_shared_v1_health_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    state_codes_shared_v1_reference_state_codes_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
}
