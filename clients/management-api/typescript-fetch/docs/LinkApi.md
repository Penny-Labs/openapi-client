# LinkApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**completeManagedConnectionUpdate**](LinkApi.md#completemanagedconnectionupdate) | **POST** /v1/link/{itemID}/update-complete | Verify a Plaid Link update and restore the managed connection |
| [**connectLinkToken**](LinkApi.md#connectlinktokenoperation) | **POST** /v1/link/connect | Exchange public token and connect item |
| [**createLinkToken**](LinkApi.md#createlinktoken) | **PUT** /v1/link/token | Create Plaid link token |
| [**createManagedConnectionUpdateToken**](LinkApi.md#createmanagedconnectionupdatetoken) | **PUT** /v1/link/{itemID}/update-token | Create a Plaid Link update-mode token for a managed connection |
| [**revokeManagedConnection**](LinkApi.md#revokemanagedconnection) | **DELETE** /v1/link/{itemID} | Revoke a managed Plaid connection and delete its hosted credential |



## completeManagedConnectionUpdate

> ManagedConnectionStatusResponse completeManagedConnectionUpdate(itemID)

Verify a Plaid Link update and restore the managed connection

### Example

```ts
import {
  Configuration,
  LinkApi,
} from '@penny/openapi-management-api-client';
import type { CompleteManagedConnectionUpdateRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LinkApi(config);

  const body = {
    // string
    itemID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CompleteManagedConnectionUpdateRequest;

  try {
    const data = await api.completeManagedConnectionUpdate(body);
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
| **itemID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ManagedConnectionStatusResponse**](ManagedConnectionStatusResponse.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection restored |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **502** | Upstream provider error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


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


## createManagedConnectionUpdateToken

> CreateLinkTokenResponse createManagedConnectionUpdateToken(itemID)

Create a Plaid Link update-mode token for a managed connection

### Example

```ts
import {
  Configuration,
  LinkApi,
} from '@penny/openapi-management-api-client';
import type { CreateManagedConnectionUpdateTokenRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LinkApi(config);

  const body = {
    // string
    itemID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CreateManagedConnectionUpdateTokenRequest;

  try {
    const data = await api.createManagedConnectionUpdateToken(body);
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
| **itemID** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Update-mode token created |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **410** | Connection is revoked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeManagedConnection

> revokeManagedConnection(itemID)

Revoke a managed Plaid connection and delete its hosted credential

### Example

```ts
import {
  Configuration,
  LinkApi,
} from '@penny/openapi-management-api-client';
import type { RevokeManagedConnectionRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LinkApi(config);

  const body = {
    // string
    itemID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RevokeManagedConnectionRequest;

  try {
    const data = await api.revokeManagedConnection(body);
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
| **itemID** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Connection revoked |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **410** | Connection already revoked |  -  |
| **502** | Upstream provider error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
