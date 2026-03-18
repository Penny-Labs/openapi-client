# LinkApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**connectLinkToken**](LinkApi.md#connectlinktokenoperation) | **POST** /v1/link/connect | Exchange public token and connect item |
| [**createLinkToken**](LinkApi.md#createlinktoken) | **PUT** /v1/link/token | Create Plaid link token |



## connectLinkToken

> ConnectLinkTokenResponse connectLinkToken(connectLinkTokenRequest)

Exchange public token and connect item

### Example

```ts
import {
  Configuration,
  LinkApi,
} from '@penny/openapi-management-api-client';
import type { ConnectLinkTokenOperationRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LinkApi(config);

  const body = {
    // ConnectLinkTokenRequest
    connectLinkTokenRequest: ...,
  } satisfies ConnectLinkTokenOperationRequest;

  try {
    const data = await api.connectLinkToken(body);
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
| **connectLinkTokenRequest** | [ConnectLinkTokenRequest](ConnectLinkTokenRequest.md) |  | |

### Return type

[**ConnectLinkTokenResponse**](ConnectLinkTokenResponse.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Token connected |  -  |
| **400** | Invalid request or duplicate connection |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createLinkToken

> CreateLinkTokenResponse createLinkToken()

Create Plaid link token

### Example

```ts
import {
  Configuration,
  LinkApi,
} from '@penny/openapi-management-api-client';
import type { CreateLinkTokenRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LinkApi(config);

  try {
    const data = await api.createLinkToken();
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

[**CreateLinkTokenResponse**](CreateLinkTokenResponse.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Link token created |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

