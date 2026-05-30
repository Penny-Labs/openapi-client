# LinkApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**connectLinkToken**](LinkApi.md#connectlinktokenoperation) | **POST** /v1/link/connect | Exchange public token and connect item |
| [**createLinkToken**](LinkApi.md#createlinktoken) | **PUT** /v1/link/token | Create Plaid link token |
| [**listLinkAccounts**](LinkApi.md#listlinkaccounts) | **GET** /v1/link/{itemID}/accounts | List managed provider accounts for a connected item |
| [**listLinkTransactions**](LinkApi.md#listlinktransactions) | **GET** /v1/link/{itemID}/transactions | List synced managed transactions for a connected item |
| [**receivePlaidWebhook**](LinkApi.md#receiveplaidwebhook) | **POST** /v1/plaid/webhook | Receive signed Plaid webhooks |
| [**syncLinkAccountBalances**](LinkApi.md#synclinkaccountbalances) | **POST** /v1/link/{itemID}/accounts/balances/sync | Refresh managed account balance snapshots for a connected item |
| [**syncLinkTransactions**](LinkApi.md#synclinktransactions) | **POST** /v1/link/{itemID}/transactions/sync | Sync Plaid transactions for a connected item |



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


## listLinkAccounts

> ManagedAccountListResponse listLinkAccounts(itemID)

List managed provider accounts for a connected item

### Example

```ts
import {
  Configuration,
  LinkApi,
} from '@penny/openapi-management-api-client';
import type { ListLinkAccountsRequest } from '@penny/openapi-management-api-client';

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
  } satisfies ListLinkAccountsRequest;

  try {
    const data = await api.listLinkAccounts(body);
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

[**ManagedAccountListResponse**](ManagedAccountListResponse.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Managed account list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLinkTransactions

> ManagedTransactionListResponse listLinkTransactions(itemID, limit, cursor)

List synced managed transactions for a connected item

### Example

```ts
import {
  Configuration,
  LinkApi,
} from '@penny/openapi-management-api-client';
import type { ListLinkTransactionsRequest } from '@penny/openapi-management-api-client';

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
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListLinkTransactionsRequest;

  try {
    const data = await api.listLinkTransactions(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ManagedTransactionListResponse**](ManagedTransactionListResponse.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Managed transaction list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## receivePlaidWebhook

> PlaidWebhookResponse receivePlaidWebhook(plaidVerification, requestBody)

Receive signed Plaid webhooks

### Example

```ts
import {
  Configuration,
  LinkApi,
} from '@penny/openapi-management-api-client';
import type { ReceivePlaidWebhookRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new LinkApi();

  const body = {
    // string
    plaidVerification: plaidVerification_example,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies ReceivePlaidWebhookRequest;

  try {
    const data = await api.receivePlaidWebhook(body);
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
| **plaidVerification** | `string` |  | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

[**PlaidWebhookResponse**](PlaidWebhookResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Duplicate webhook accepted |  -  |
| **202** | Webhook accepted |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **413** | Payload too large |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncLinkAccountBalances

> ManagedAccountBalanceSyncResponse syncLinkAccountBalances(itemID)

Refresh managed account balance snapshots for a connected item

### Example

```ts
import {
  Configuration,
  LinkApi,
} from '@penny/openapi-management-api-client';
import type { SyncLinkAccountBalancesRequest } from '@penny/openapi-management-api-client';

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
  } satisfies SyncLinkAccountBalancesRequest;

  try {
    const data = await api.syncLinkAccountBalances(body);
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

[**ManagedAccountBalanceSyncResponse**](ManagedAccountBalanceSyncResponse.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Account balances refreshed |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncLinkTransactions

> PlaidTransactionsSyncResult syncLinkTransactions(itemID)

Sync Plaid transactions for a connected item

### Example

```ts
import {
  Configuration,
  LinkApi,
} from '@penny/openapi-management-api-client';
import type { SyncLinkTransactionsRequest } from '@penny/openapi-management-api-client';

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
  } satisfies SyncLinkTransactionsRequest;

  try {
    const data = await api.syncLinkTransactions(body);
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

[**PlaidTransactionsSyncResult**](PlaidTransactionsSyncResult.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transactions synced |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

