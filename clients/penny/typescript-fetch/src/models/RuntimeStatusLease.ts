/* tslint:disable */
/* eslint-disable */

export interface RuntimeStatusLease {
    tokenPresent: boolean;
    expired: boolean;
    issuedAt?: Date;
    expiresAt?: Date;
    scopes?: Array<string>;
    activationId?: string;
    installId?: string;
    tokenFingerprint?: string;
}

export function RuntimeStatusLeaseFromJSON(json: any): RuntimeStatusLease {
    return RuntimeStatusLeaseFromJSONTyped(json, false);
}

export function RuntimeStatusLeaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeStatusLease {
    if (json == null) {
        return json;
    }
    return {
        'tokenPresent': json['token_present'],
        'expired': json['expired'],
        'issuedAt': json['issued_at'] == null ? undefined : (new Date(json['issued_at'])),
        'expiresAt': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
        'scopes': json['scopes'] == null ? undefined : json['scopes'],
        'activationId': json['activation_id'] == null ? undefined : json['activation_id'],
        'installId': json['install_id'] == null ? undefined : json['install_id'],
        'tokenFingerprint': json['token_fingerprint'] == null ? undefined : json['token_fingerprint'],
    };
}

export function RuntimeStatusLeaseToJSON(value?: RuntimeStatusLease | null): any {
    if (value == null) {
        return value;
    }
    return {
        'token_present': value['tokenPresent'],
        'expired': value['expired'],
        'issued_at': value['issuedAt'] == null ? undefined : ((value['issuedAt'] as any).toISOString()),
        'expires_at': value['expiresAt'] == null ? undefined : ((value['expiresAt'] as any).toISOString()),
        'scopes': value['scopes'],
        'activation_id': value['activationId'],
        'install_id': value['installId'],
        'token_fingerprint': value['tokenFingerprint'],
    };
}
