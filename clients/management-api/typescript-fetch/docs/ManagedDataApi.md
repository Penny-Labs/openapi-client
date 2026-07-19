# ManagedDataApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listManagedAccounts**](ManagedDataApi.md#listmanagedaccounts) | **GET** /v1/link/{itemID}/accounts | List cached managed accounts and balances |
| [**listManagedTransactions**](ManagedDataApi.md#listmanagedtransactions) | **GET** /v1/link/{itemID}/transactions | List cached managed transactions |
| [**syncManagedBalances**](ManagedDataApi.md#syncmanagedbalances) | **POST** /v1/link/{itemID}/accounts/balances/sync | Refresh and cache managed accounts and balances |
| [**syncManagedTransactions**](ManagedDataApi.md#syncmanagedtransactions) | **POST** /v1/link/{itemID}/transactions/sync | Refresh and cache managed transactions |



## listManagedAccounts

> ManagedAccountListResponse listManagedAccounts(itemID)

List cached managed accounts and balances

### Example

```ts
import {
  Configuration,
  ManagedDataApi,
} from '@penny/openapi-management-api-client';
import type { ListManagedAccountsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ManagedDataApi(config);

  const body = {
    // string
    itemID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListManagedAccountsRequest;

  try {
    const data = await api.listManagedAccounts(body);
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
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listManagedTransactions

> ManagedTransactionListResponse listManagedTransactions(itemID, limit, cursor)

List cached managed transactions

### Example

```ts
import {
  Configuration,
  ManagedDataApi,
} from '@penny/openapi-management-api-client';
import type { ListManagedTransactionsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ManagedDataApi(config);

  const body = {
    // string
    itemID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListManagedTransactionsRequest;

  try {
    const data = await api.listManagedTransactions(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `100`] |
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
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncManagedBalances

> ManagedBalanceSyncResponse syncManagedBalances(itemID)

Refresh and cache managed accounts and balances

### Example

```ts
import {
  Configuration,
  ManagedDataApi,
} from '@penny/openapi-management-api-client';
import type { SyncManagedBalancesRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ManagedDataApi(config);

  const body = {
    // string
    itemID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SyncManagedBalancesRequest;

  try {
    const data = await api.syncManagedBalances(body);
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

[**ManagedBalanceSyncResponse**](ManagedBalanceSyncResponse.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Balances refreshed |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **429** | Monthly managed refresh limit reached |  -  |
| **502** | Upstream provider error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncManagedTransactions

> ManagedTransactionSyncResponse syncManagedTransactions(itemID)

Refresh and cache managed transactions

### Example

```ts
import {
  Configuration,
  ManagedDataApi,
} from '@penny/openapi-management-api-client';
import type { SyncManagedTransactionsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ManagedDataApi(config);

  const body = {
    // string
    itemID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SyncManagedTransactionsRequest;

  try {
    const data = await api.syncManagedTransactions(body);
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

[**ManagedTransactionSyncResponse**](ManagedTransactionSyncResponse.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transactions refreshed |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **429** | Monthly managed refresh limit reached |  -  |
| **502** | Upstream provider error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
