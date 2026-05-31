/* tslint:disable */
/* eslint-disable */

export interface RuntimeConnectionStatus {
    id: string;
    managedItemId: string;
    status: RuntimeConnectionStatusStatusEnum;
    lastSyncStartedAt?: Date;
    lastSyncCompletedAt?: Date;
    lastSyncError?: string;
    dateAdded: Date;
    dateModified?: Date;
}

export const RuntimeConnectionStatusStatusEnum = {
    Connected: 'connected',
    Syncing: 'syncing',
    Stale: 'stale',
    Error: 'error',
    Revoked: 'revoked'
} as const;
export type RuntimeConnectionStatusStatusEnum = typeof RuntimeConnectionStatusStatusEnum[keyof typeof RuntimeConnectionStatusStatusEnum];

export function RuntimeConnectionStatusFromJSON(json: any): RuntimeConnectionStatus {
    return RuntimeConnectionStatusFromJSONTyped(json, false);
}

export function RuntimeConnectionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeConnectionStatus {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'managedItemId': json['managed_item_id'],
        'status': json['status'],
        'lastSyncStartedAt': json['last_sync_started_at'] == null ? undefined : (new Date(json['last_sync_started_at'])),
        'lastSyncCompletedAt': json['last_sync_completed_at'] == null ? undefined : (new Date(json['last_sync_completed_at'])),
        'lastSyncError': json['last_sync_error'] == null ? undefined : json['last_sync_error'],
        'dateAdded': new Date(json['date_added']),
        'dateModified': json['date_modified'] == null ? undefined : (new Date(json['date_modified'])),
    };
}

export function RuntimeConnectionStatusToJSON(value?: RuntimeConnectionStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'managed_item_id': value['managedItemId'],
        'status': value['status'],
        'last_sync_started_at': value['lastSyncStartedAt'] == null ? undefined : ((value['lastSyncStartedAt'] as any).toISOString()),
        'last_sync_completed_at': value['lastSyncCompletedAt'] == null ? undefined : ((value['lastSyncCompletedAt'] as any).toISOString()),
        'last_sync_error': value['lastSyncError'],
        'date_added': value['dateAdded'] == null ? undefined : ((value['dateAdded'] as any).toISOString()),
        'date_modified': value['dateModified'] == null ? undefined : ((value['dateModified'] as any).toISOString()),
    };
}
