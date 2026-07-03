# RuntimeApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getRuntimeEntitlementSnapshot**](RuntimeApi.md#getruntimeentitlementsnapshot) | **GET** /v1/runtime/entitlement | Get the local runtime entitlement snapshot |
| [**getRuntimeStatus**](RuntimeApi.md#getruntimestatus) | **GET** /v1/runtime/status | Get redacted local runtime and managed sync status |



## getRuntimeEntitlementSnapshot

> RuntimeEntitlementSnapshotResponse getRuntimeEntitlementSnapshot()

Get the local runtime entitlement snapshot

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny-labs/openapi-penny-client';
import type { GetRuntimeEntitlementSnapshotRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RuntimeApi(config);

  try {
    const data = await api.getRuntimeEntitlementSnapshot();
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

[**RuntimeEntitlementSnapshotResponse**](RuntimeEntitlementSnapshotResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Runtime entitlement snapshot state |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRuntimeStatus

> RuntimeStatusResponse getRuntimeStatus()

Get redacted local runtime and managed sync status

Returns read-only managed-runtime readiness, lease metadata, and current-user managed connection status without exposing bearer tokens or secret material.

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny-labs/openapi-penny-client';
import type { GetRuntimeStatusRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RuntimeApi(config);

  try {
    const data = await api.getRuntimeStatus();
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

[**RuntimeStatusResponse**](RuntimeStatusResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Redacted runtime status |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

