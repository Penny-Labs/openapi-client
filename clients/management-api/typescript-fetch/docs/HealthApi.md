# HealthApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getHealthz**](HealthApi.md#gethealthz) | **GET** /healthz | Health check |
| [**getReadyz**](HealthApi.md#getreadyz) | **GET** /readyz | Readiness check |



## getHealthz

> string getHealthz()

Health check

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '@penny/openapi-management-api-client';
import type { GetHealthzRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new HealthApi();

  try {
    const data = await api.getHealthz();
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

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Service healthy |  -  |
| **500** | Service unhealthy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReadyz

> string getReadyz()

Readiness check

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '@penny/openapi-management-api-client';
import type { GetReadyzRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new HealthApi();

  try {
    const data = await api.getReadyz();
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

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Service ready |  -  |
| **500** | Service not ready |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

