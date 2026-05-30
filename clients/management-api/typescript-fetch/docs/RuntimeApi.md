# RuntimeApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activateRuntimeInstall**](RuntimeApi.md#activateruntimeinstall) | **POST** /v1/runtime/activate | Activate runtime install and issue lease JWT |
| [**createRuntimeCommand**](RuntimeApi.md#createruntimecommand) | **POST** /v1/runtime/commands | Dispatch runtime command to install/license/product target (admin) |
| [**getRuntimeActivationOverview**](RuntimeApi.md#getruntimeactivationoverview) | **GET** /v1/runtime/activations/overview | Get runtime activation KPI overview (admin) |
| [**getRuntimeJwks**](RuntimeApi.md#getruntimejwks) | **GET** /v1/runtime/jwks | Get active JWKS for lease JWT verification |
| [**ingestRuntimeUsageBatch**](RuntimeApi.md#ingestruntimeusagebatch) | **POST** /v1/runtime/usage/batch | Ingest usage events for billing meters |
| [**listRuntimeActivationHistory**](RuntimeApi.md#listruntimeactivationhistory) | **GET** /v1/runtime/activations/history | List runtime activation history by day (admin) |
| [**listRuntimeCommandDeliveries**](RuntimeApi.md#listruntimecommanddeliveries) | **GET** /v1/runtime/commands/{commandID}/deliveries | List runtime command delivery states and acknowledgements (admin) |
| [**listRuntimeCommands**](RuntimeApi.md#listruntimecommands) | **GET** /v1/runtime/commands | List runtime commands with delivery status counters (admin) |
| [**listRuntimeInstances**](RuntimeApi.md#listruntimeinstances) | **GET** /v1/runtime/instances | List runtime instances and websocket connection state (admin) |
| [**renewRuntimeLease**](RuntimeApi.md#renewruntimelease) | **POST** /v1/runtime/lease/renew | Renew runtime lease JWT |



## activateRuntimeInstall

> RuntimeActivateResponse activateRuntimeInstall(runtimeActivateRequest)

Activate runtime install and issue lease JWT

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny/openapi-management-api-client';
import type { ActivateRuntimeInstallRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new RuntimeApi();

  const body = {
    // RuntimeActivateRequest
    runtimeActivateRequest: ...,
  } satisfies ActivateRuntimeInstallRequest;

  try {
    const data = await api.activateRuntimeInstall(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **runtimeActivateRequest** | [RuntimeActivateRequest](RuntimeActivateRequest.md) |  | |

### Return type

[**RuntimeActivateResponse**](RuntimeActivateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Runtime install activated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **409** | Transfer confirmation required |  -  |
| **429** | Transfer cooldown active |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRuntimeCommand

> RuntimeCommandCreateResponse createRuntimeCommand(runtimeCommandCreateRequest)

Dispatch runtime command to install/license/product target (admin)

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny/openapi-management-api-client';
import type { CreateRuntimeCommandRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RuntimeApi(config);

  const body = {
    // RuntimeCommandCreateRequest
    runtimeCommandCreateRequest: ...,
  } satisfies CreateRuntimeCommandRequest;

  try {
    const data = await api.createRuntimeCommand(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **runtimeCommandCreateRequest** | [RuntimeCommandCreateRequest](RuntimeCommandCreateRequest.md) |  | |

### Return type

[**RuntimeCommandCreateResponse**](RuntimeCommandCreateResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Runtime command created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRuntimeActivationOverview

> RuntimeActivationOverviewResponse getRuntimeActivationOverview(productId, licenseId, from, to)

Get runtime activation KPI overview (admin)

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny/openapi-management-api-client';
import type { GetRuntimeActivationOverviewRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RuntimeApi(config);

  const body = {
    // ProductID (optional)
    productId: ...,
    // string (optional)
    licenseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date (optional)
    from: 2013-10-20,
    // Date (optional)
    to: 2013-10-20,
  } satisfies GetRuntimeActivationOverviewRequest;

  try {
    const data = await api.getRuntimeActivationOverview(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **productId** | `ProductID` |  | [Optional] [Defaults to `undefined`] [Enum: pennyos, openchat] |
| **licenseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**RuntimeActivationOverviewResponse**](RuntimeActivationOverviewResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Runtime activation overview |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRuntimeJwks

> JwksResponse getRuntimeJwks()

Get active JWKS for lease JWT verification

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny/openapi-management-api-client';
import type { GetRuntimeJwksRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new RuntimeApi();

  try {
    const data = await api.getRuntimeJwks();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**JwksResponse**](JwksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active signing keys |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ingestRuntimeUsageBatch

> RuntimeUsageBatchResponse ingestRuntimeUsageBatch(runtimeUsageBatchRequest)

Ingest usage events for billing meters

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny/openapi-management-api-client';
import type { IngestRuntimeUsageBatchRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RuntimeApi(config);

  const body = {
    // RuntimeUsageBatchRequest
    runtimeUsageBatchRequest: ...,
  } satisfies IngestRuntimeUsageBatchRequest;

  try {
    const data = await api.ingestRuntimeUsageBatch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **runtimeUsageBatchRequest** | [RuntimeUsageBatchRequest](RuntimeUsageBatchRequest.md) |  | |

### Return type

[**RuntimeUsageBatchResponse**](RuntimeUsageBatchResponse.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Usage batch processed |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listRuntimeActivationHistory

> RuntimeActivationHistoryListResponse listRuntimeActivationHistory(productId, licenseId, from, to, limit, cursor)

List runtime activation history by day (admin)

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny/openapi-management-api-client';
import type { ListRuntimeActivationHistoryRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RuntimeApi(config);

  const body = {
    // ProductID (optional)
    productId: ...,
    // string (optional)
    licenseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date (optional)
    from: 2013-10-20,
    // Date (optional)
    to: 2013-10-20,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListRuntimeActivationHistoryRequest;

  try {
    const data = await api.listRuntimeActivationHistory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **productId** | `ProductID` |  | [Optional] [Defaults to `undefined`] [Enum: pennyos, openchat] |
| **licenseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**RuntimeActivationHistoryListResponse**](RuntimeActivationHistoryListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Runtime activation history |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listRuntimeCommandDeliveries

> RuntimeCommandDeliveryListResponse listRuntimeCommandDeliveries(commandID, limit, cursor)

List runtime command delivery states and acknowledgements (admin)

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny/openapi-management-api-client';
import type { ListRuntimeCommandDeliveriesRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RuntimeApi(config);

  const body = {
    // string
    commandID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListRuntimeCommandDeliveriesRequest;

  try {
    const data = await api.listRuntimeCommandDeliveries(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **commandID** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**RuntimeCommandDeliveryListResponse**](RuntimeCommandDeliveryListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Runtime command delivery list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listRuntimeCommands

> RuntimeCommandListResponse listRuntimeCommands(productId, licenseId, installId, status, commandType, limit, cursor)

List runtime commands with delivery status counters (admin)

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny/openapi-management-api-client';
import type { ListRuntimeCommandsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RuntimeApi(config);

  const body = {
    // ProductID (optional)
    productId: ...,
    // string (optional)
    licenseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    installId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // RuntimeCommandStatus (optional)
    status: ...,
    // RuntimeCommandType (optional)
    commandType: ...,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListRuntimeCommandsRequest;

  try {
    const data = await api.listRuntimeCommands(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **productId** | `ProductID` |  | [Optional] [Defaults to `undefined`] [Enum: pennyos, openchat] |
| **licenseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **installId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `RuntimeCommandStatus` |  | [Optional] [Defaults to `undefined`] [Enum: queued, sent, acked, expired, failed] |
| **commandType** | `RuntimeCommandType` |  | [Optional] [Defaults to `undefined`] [Enum: pull_data, notify, license_enforce, license_resync] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**RuntimeCommandListResponse**](RuntimeCommandListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Runtime command list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listRuntimeInstances

> RuntimeInstanceListResponse listRuntimeInstances(productId, licenseId, installId, connected, limit, cursor)

List runtime instances and websocket connection state (admin)

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny/openapi-management-api-client';
import type { ListRuntimeInstancesRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RuntimeApi(config);

  const body = {
    // ProductID (optional)
    productId: ...,
    // string (optional)
    licenseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    installId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean (optional)
    connected: true,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListRuntimeInstancesRequest;

  try {
    const data = await api.listRuntimeInstances(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **productId** | `ProductID` |  | [Optional] [Defaults to `undefined`] [Enum: pennyos, openchat] |
| **licenseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **installId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **connected** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**RuntimeInstanceListResponse**](RuntimeInstanceListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Runtime instance list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## renewRuntimeLease

> RuntimeRenewResponse renewRuntimeLease()

Renew runtime lease JWT

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny/openapi-management-api-client';
import type { RenewRuntimeLeaseRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RuntimeApi(config);

  try {
    const data = await api.renewRuntimeLease();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RuntimeRenewResponse**](RuntimeRenewResponse.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lease renewed |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

