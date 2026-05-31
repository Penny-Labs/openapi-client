/* tslint:disable */
/* eslint-disable */

export interface RuntimeStatusWebsocket {
    enabled: boolean;
    configured: boolean;
    endpointConfigured: boolean;
    status: RuntimeStatusWebsocketStatusEnum;
}

export const RuntimeStatusWebsocketStatusEnum = {
    Disabled: 'disabled',
    Configured: 'configured',
    MissingRequirements: 'missing_requirements'
} as const;
export type RuntimeStatusWebsocketStatusEnum = typeof RuntimeStatusWebsocketStatusEnum[keyof typeof RuntimeStatusWebsocketStatusEnum];

export function RuntimeStatusWebsocketFromJSON(json: any): RuntimeStatusWebsocket {
    return RuntimeStatusWebsocketFromJSONTyped(json, false);
}

export function RuntimeStatusWebsocketFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeStatusWebsocket {
    if (json == null) {
        return json;
    }
    return {
        'enabled': json['enabled'],
        'configured': json['configured'],
        'endpointConfigured': json['endpoint_configured'],
        'status': json['status'],
    };
}

export function RuntimeStatusWebsocketToJSON(value?: RuntimeStatusWebsocket | null): any {
    if (value == null) {
        return value;
    }
    return {
        'enabled': value['enabled'],
        'configured': value['configured'],
        'endpoint_configured': value['endpointConfigured'],
        'status': value['status'],
    };
}
