# RuntimeApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**completeRuntimeConnectionRelink**](RuntimeApi.md#completeruntimeconnectionrelink) | **POST** /v1/runtime/connections/{connectionID}/relink | Complete a managed connection repair |
| [**connectRuntimeManagedConnection**](RuntimeApi.md#connectruntimemanagedconnection) | **POST** /v1/runtime/connections/link | Complete a browser-safe managed Plaid Link session |
| [**createRuntimeBillingPortal**](RuntimeApi.md#createruntimebillingportal) | **POST** /v1/runtime/billing/portal | Create a Stripe test-mode billing portal session for an administrator |
| [**createRuntimeConnectionLinkToken**](RuntimeApi.md#createruntimeconnectionlinktoken) | **POST** /v1/runtime/connections/link-token | Create a browser-safe managed Plaid Link session |
| [**createRuntimeConnectionRelinkToken**](RuntimeApi.md#createruntimeconnectionrelinktoken) | **POST** /v1/runtime/connections/{connectionID}/relink-token | Create an update-mode Link token for a managed connection |
| [**getRuntimeEntitlementSnapshot**](RuntimeApi.md#getruntimeentitlementsnapshot) | **GET** /v1/runtime/entitlement | Get the local runtime entitlement snapshot |
| [**getRuntimeStatus**](RuntimeApi.md#getruntimestatus) | **GET** /v1/runtime/status | Get redacted local runtime and managed sync status |
| [**revokeRuntimeManagedConnection**](RuntimeApi.md#revokeruntimemanagedconnection) | **DELETE** /v1/runtime/connections/{connectionID} | Revoke a managed provider connection without deleting local finance history |
| [**syncAllRuntimeConnections**](RuntimeApi.md#syncallruntimeconnections) | **POST** /v1/runtime/sync | Sync every managed connection for the authenticated user |
| [**syncRuntimeConnection**](RuntimeApi.md#syncruntimeconnection) | **POST** /v1/runtime/connections/{connectionID}/sync | Sync one managed connection immediately |



## completeRuntimeConnectionRelink

> ManagedConnection completeRuntimeConnectionRelink(connectionID)

Complete a managed connection repair

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny-labs/openapi-penny-client';
import type { CompleteRuntimeConnectionRelinkRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RuntimeApi(config);

  const body = {
    // string
    connectionID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CompleteRuntimeConnectionRelinkRequest;

  try {
    const data = await api.completeRuntimeConnectionRelink(body);
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
| **connectionID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ManagedConnection**](ManagedConnection.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Managed connection repaired |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## connectRuntimeManagedConnection

> ManagedConnectionLinkResult connectRuntimeManagedConnection(managedLinkConnectRequest)

Complete a browser-safe managed Plaid Link session

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny-labs/openapi-penny-client';
import type { ConnectRuntimeManagedConnectionRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RuntimeApi(config);

  const body = {
    // ManagedLinkConnectRequest
    managedLinkConnectRequest: ...,
  } satisfies ConnectRuntimeManagedConnectionRequest;

  try {
    const data = await api.connectRuntimeManagedConnection(body);
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
| **managedLinkConnectRequest** | [ManagedLinkConnectRequest](ManagedLinkConnectRequest.md) |  | |

### Return type

[**ManagedConnectionLinkResult**](ManagedConnectionLinkResult.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Managed connection created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **410** | Link session expired or was already used |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRuntimeBillingPortal

> BillingPortalResponse createRuntimeBillingPortal()

Create a Stripe test-mode billing portal session for an administrator

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny-labs/openapi-penny-client';
import type { CreateRuntimeBillingPortalRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RuntimeApi(config);

  try {
    const data = await api.createRuntimeBillingPortal();
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

[**BillingPortalResponse**](BillingPortalResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Billing portal created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **502** | Billing provider unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRuntimeConnectionLinkToken

> ManagedLinkTokenResponse createRuntimeConnectionLinkToken()

Create a browser-safe managed Plaid Link session

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny-labs/openapi-penny-client';
import type { CreateRuntimeConnectionLinkTokenRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RuntimeApi(config);

  try {
    const data = await api.createRuntimeConnectionLinkToken();
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

[**ManagedLinkTokenResponse**](ManagedLinkTokenResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Link session created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRuntimeConnectionRelinkToken

> ManagedLinkTokenResponse createRuntimeConnectionRelinkToken(connectionID)

Create an update-mode Link token for a managed connection

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny-labs/openapi-penny-client';
import type { CreateRuntimeConnectionRelinkTokenRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RuntimeApi(config);

  const body = {
    // string
    connectionID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CreateRuntimeConnectionRelinkTokenRequest;

  try {
    const data = await api.createRuntimeConnectionRelinkToken(body);
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
| **connectionID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ManagedLinkTokenResponse**](ManagedLinkTokenResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Relink token created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


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


## revokeRuntimeManagedConnection

> revokeRuntimeManagedConnection(connectionID)

Revoke a managed provider connection without deleting local finance history

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny-labs/openapi-penny-client';
import type { RevokeRuntimeManagedConnectionRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RuntimeApi(config);

  const body = {
    // string
    connectionID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RevokeRuntimeManagedConnectionRequest;

  try {
    const data = await api.revokeRuntimeManagedConnection(body);
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
| **connectionID** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Managed connection revoked |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncAllRuntimeConnections

> ManagedConnectionSyncBatchResult syncAllRuntimeConnections()

Sync every managed connection for the authenticated user

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny-labs/openapi-penny-client';
import type { SyncAllRuntimeConnectionsRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RuntimeApi(config);

  try {
    const data = await api.syncAllRuntimeConnections();
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

[**ManagedConnectionSyncBatchResult**](ManagedConnectionSyncBatchResult.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Managed connection sync batch completed |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |
| **503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncRuntimeConnection

> ManagedConnectionSyncResult syncRuntimeConnection(connectionID)

Sync one managed connection immediately

### Example

```ts
import {
  Configuration,
  RuntimeApi,
} from '@penny-labs/openapi-penny-client';
import type { SyncRuntimeConnectionRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new RuntimeApi(config);

  const body = {
    // string
    connectionID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SyncRuntimeConnectionRequest;

  try {
    const data = await api.syncRuntimeConnection(body);
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
| **connectionID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ManagedConnectionSyncResult**](ManagedConnectionSyncResult.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Managed connection sync completed |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |
| **503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
