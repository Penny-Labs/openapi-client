/* tslint:disable */
/* eslint-disable */

export interface RuntimeStatusEntitlement {
    configured: boolean;
    licenseStatus?: string;
    entitlementStatus?: string;
    productId?: string;
    plan?: string;
    features?: Array<string>;
    lastSyncedAt?: Date;
}

export function RuntimeStatusEntitlementFromJSON(json: any): RuntimeStatusEntitlement {
    return RuntimeStatusEntitlementFromJSONTyped(json, false);
}

export function RuntimeStatusEntitlementFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeStatusEntitlement {
    if (json == null) {
        return json;
    }
    return {
        'configured': json['configured'],
        'licenseStatus': json['license_status'] == null ? undefined : json['license_status'],
        'entitlementStatus': json['entitlement_status'] == null ? undefined : json['entitlement_status'],
        'productId': json['product_id'] == null ? undefined : json['product_id'],
        'plan': json['plan'] == null ? undefined : json['plan'],
        'features': json['features'] == null ? undefined : json['features'],
        'lastSyncedAt': json['last_synced_at'] == null ? undefined : (new Date(json['last_synced_at'])),
    };
}

export function RuntimeStatusEntitlementToJSON(value?: RuntimeStatusEntitlement | null): any {
    if (value == null) {
        return value;
    }
    return {
        'configured': value['configured'],
        'license_status': value['licenseStatus'],
        'entitlement_status': value['entitlementStatus'],
        'product_id': value['productId'],
        'plan': value['plan'],
        'features': value['features'],
        'last_synced_at': value['lastSyncedAt'] == null ? undefined : ((value['lastSyncedAt'] as any).toISOString()),
    };
}
