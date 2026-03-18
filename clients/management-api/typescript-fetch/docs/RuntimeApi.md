# RuntimeApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activateRuntimeInstall**](RuntimeApi.md#activateruntimeinstall) | **POST** /v1/runtime/activate | Activate runtime install and issue lease JWT |
| [**getRuntimeJwks**](RuntimeApi.md#getruntimejwks) | **GET** /v1/runtime/jwks | Get active JWKS for lease JWT verification |
| [**ingestRuntimeUsageBatch**](RuntimeApi.md#ingestruntimeusagebatch) | **POST** /v1/runtime/usage/batch | Ingest usage events for billing meters |
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

