/* tslint:disable */
/* eslint-disable */

import type { RuntimeConnectionStatus } from './RuntimeConnectionStatus';
import { RuntimeConnectionStatusFromJSON, RuntimeConnectionStatusToJSON } from './RuntimeConnectionStatus';
import type { RuntimeStatusEntitlement } from './RuntimeStatusEntitlement';
import { RuntimeStatusEntitlementFromJSON, RuntimeStatusEntitlementToJSON } from './RuntimeStatusEntitlement';
import type { RuntimeStatusLease } from './RuntimeStatusLease';
import { RuntimeStatusLeaseFromJSON, RuntimeStatusLeaseToJSON } from './RuntimeStatusLease';
import type { RuntimeStatusManagement } from './RuntimeStatusManagement';
import { RuntimeStatusManagementFromJSON, RuntimeStatusManagementToJSON } from './RuntimeStatusManagement';
import type { RuntimeStatusWebsocket } from './RuntimeStatusWebsocket';
import { RuntimeStatusWebsocketFromJSON, RuntimeStatusWebsocketToJSON } from './RuntimeStatusWebsocket';

export interface RuntimeStatusResponse {
    entitlement: RuntimeStatusEntitlement;
    management: RuntimeStatusManagement;
    websocket: RuntimeStatusWebsocket;
    lease: RuntimeStatusLease;
    connections: Array<RuntimeConnectionStatus>;
}

export function RuntimeStatusResponseFromJSON(json: any): RuntimeStatusResponse {
    return RuntimeStatusResponseFromJSONTyped(json, false);
}

export function RuntimeStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeStatusResponse {
    if (json == null) {
        return json;
    }
    return {
        'entitlement': RuntimeStatusEntitlementFromJSON(json['entitlement']),
        'management': RuntimeStatusManagementFromJSON(json['management']),
        'websocket': RuntimeStatusWebsocketFromJSON(json['websocket']),
        'lease': RuntimeStatusLeaseFromJSON(json['lease']),
        'connections': ((json['connections'] as Array<any>).map(RuntimeConnectionStatusFromJSON)),
    };
}

export function RuntimeStatusResponseToJSON(value?: RuntimeStatusResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        'entitlement': RuntimeStatusEntitlementToJSON(value['entitlement']),
        'management': RuntimeStatusManagementToJSON(value['management']),
        'websocket': RuntimeStatusWebsocketToJSON(value['websocket']),
        'lease': RuntimeStatusLeaseToJSON(value['lease']),
        'connections': ((value['connections'] as Array<any>).map(RuntimeConnectionStatusToJSON)),
    };
}
