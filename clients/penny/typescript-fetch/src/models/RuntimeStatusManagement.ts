/* tslint:disable */
/* eslint-disable */

export interface RuntimeStatusManagement {
    mode: RuntimeStatusManagementModeEnum;
    apiConfigured: boolean;
    apiUrlConfigured: boolean;
    apiTokenConfigured: boolean;
    runtimeSecretDirConfigured: boolean;
}

export const RuntimeStatusManagementModeEnum = {
    Disabled: 'disabled',
    Optional: 'optional',
    Required: 'required'
} as const;
export type RuntimeStatusManagementModeEnum = typeof RuntimeStatusManagementModeEnum[keyof typeof RuntimeStatusManagementModeEnum];

export function RuntimeStatusManagementFromJSON(json: any): RuntimeStatusManagement {
    return RuntimeStatusManagementFromJSONTyped(json, false);
}

export function RuntimeStatusManagementFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeStatusManagement {
    if (json == null) {
        return json;
    }
    return {
        'mode': json['mode'],
        'apiConfigured': json['api_configured'],
        'apiUrlConfigured': json['api_url_configured'],
        'apiTokenConfigured': json['api_token_configured'],
        'runtimeSecretDirConfigured': json['runtime_secret_dir_configured'],
    };
}

export function RuntimeStatusManagementToJSON(value?: RuntimeStatusManagement | null): any {
    if (value == null) {
        return value;
    }
    return {
        'mode': value['mode'],
        'api_configured': value['apiConfigured'],
        'api_url_configured': value['apiUrlConfigured'],
        'api_token_configured': value['apiTokenConfigured'],
        'runtime_secret_dir_configured': value['runtimeSecretDirConfigured'],
    };
}
