# AccountsApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAccount**](AccountsApi.md#createaccount) | **POST** /v1/accounts | Create account for current authenticated user |
| [**createTransaction**](AccountsApi.md#createtransaction) | **POST** /v1/accounts/{accountID}/transactions | Create a transaction for an account owned by the current authenticated user |
| [**getAccountByID**](AccountsApi.md#getaccountbyid) | **GET** /v1/accounts/{accountID} | Get account by ID for current authenticated user |
| [**getCurrentBalance**](AccountsApi.md#getcurrentbalance) | **GET** /v1/accounts/{accountID}/balances/current | Get latest balance snapshot for an account owned by the current authenticated user |
| [**getTransactionByID**](AccountsApi.md#gettransactionbyid) | **GET** /v1/accounts/{accountID}/transactions/{transactionID} | Get a transaction by ID for an owned account |
| [**listAccounts**](AccountsApi.md#listaccounts) | **GET** /v1/accounts | List accounts for current authenticated user |
| [**listBalances**](AccountsApi.md#listbalances) | **GET** /v1/accounts/{accountID}/balances | List balance snapshots for an account owned by the current authenticated user |
| [**listTransactions**](AccountsApi.md#listtransactions) | **GET** /v1/accounts/{accountID}/transactions | List transactions for an account owned by the current authenticated user |
| [**patchAccount**](AccountsApi.md#patchaccount) | **PATCH** /v1/accounts/{accountID} | Patch account fields for current authenticated user |
| [**patchTransaction**](AccountsApi.md#patchtransaction) | **PATCH** /v1/accounts/{accountID}/transactions/{transactionID} | Patch mutable transaction fields by ID for an owned account |
| [**upsertBalance**](AccountsApi.md#upsertbalance) | **POST** /v1/accounts/{accountID}/balances | Upsert a balance snapshot for an account owned by the current authenticated user |



## createAccount

> Account createAccount(accountCreateRequest)

Create account for current authenticated user

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@penny/openapi-penny-client';
import type { CreateAccountRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // AccountCreateRequest
    accountCreateRequest: ...,
  } satisfies CreateAccountRequest;

  try {
    const data = await api.createAccount(body);
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
| **accountCreateRequest** | [AccountCreateRequest](AccountCreateRequest.md) |  | |

### Return type

[**Account**](Account.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Account created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTransaction

> Transaction createTransaction(accountID, transactionCreateRequest)

Create a transaction for an account owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@penny/openapi-penny-client';
import type { CreateTransactionRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // string
    accountID: accountID_example,
    // TransactionCreateRequest
    transactionCreateRequest: ...,
  } satisfies CreateTransactionRequest;

  try {
    const data = await api.createTransaction(body);
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
| **accountID** | `string` |  | [Defaults to `undefined`] |
| **transactionCreateRequest** | [TransactionCreateRequest](TransactionCreateRequest.md) |  | |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Transaction created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAccountByID

> Account getAccountByID(accountID)

Get account by ID for current authenticated user

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@penny/openapi-penny-client';
import type { GetAccountByIDRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // string
    accountID: accountID_example,
  } satisfies GetAccountByIDRequest;

  try {
    const data = await api.getAccountByID(body);
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
| **accountID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Account**](Account.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Account found |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCurrentBalance

> Balance getCurrentBalance(accountID)

Get latest balance snapshot for an account owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@penny/openapi-penny-client';
import type { GetCurrentBalanceRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // string
    accountID: accountID_example,
  } satisfies GetCurrentBalanceRequest;

  try {
    const data = await api.getCurrentBalance(body);
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
| **accountID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Balance**](Balance.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current balance snapshot, or null when no snapshot exists |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransactionByID

> Transaction getTransactionByID(accountID, transactionID)

Get a transaction by ID for an owned account

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@penny/openapi-penny-client';
import type { GetTransactionByIDRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // string
    accountID: accountID_example,
    // string
    transactionID: transactionID_example,
  } satisfies GetTransactionByIDRequest;

  try {
    const data = await api.getTransactionByID(body);
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
| **accountID** | `string` |  | [Defaults to `undefined`] |
| **transactionID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction found |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAccounts

> AccountListResponse listAccounts(limit, cursor)

List accounts for current authenticated user

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@penny/openapi-penny-client';
import type { ListAccountsRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListAccountsRequest;

  try {
    const data = await api.listAccounts(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**AccountListResponse**](AccountListResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Account page |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBalances

> BalanceListResponse listBalances(accountID, limit, cursor, dateFrom, dateTo, sort)

List balance snapshots for an account owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@penny/openapi-penny-client';
import type { ListBalancesRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // string
    accountID: accountID_example,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
    // Date (optional)
    dateFrom: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    dateTo: 2013-10-20T19:20:30+01:00,
    // 'asc' | 'desc' (optional)
    sort: sort_example,
  } satisfies ListBalancesRequest;

  try {
    const data = await api.listBalances(body);
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
| **accountID** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **dateFrom** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **dateTo** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **sort** | `asc`, `desc` |  | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

### Return type

[**BalanceListResponse**](BalanceListResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Balance snapshot page |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTransactions

> TransactionListResponse listTransactions(accountID, limit, cursor, q, pending, dateFrom, dateTo, amountMin, amountMax, categoryId, tagIds, tagMode, sort)

List transactions for an account owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@penny/openapi-penny-client';
import type { ListTransactionsRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // string
    accountID: accountID_example,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
    // string (optional)
    q: q_example,
    // boolean (optional)
    pending: true,
    // Date (optional)
    dateFrom: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    dateTo: 2013-10-20T19:20:30+01:00,
    // number (optional)
    amountMin: 1.2,
    // number (optional)
    amountMax: 1.2,
    // string (optional)
    categoryId: categoryId_example,
    // string | Comma-separated tag IDs. (optional)
    tagIds: tagIds_example,
    // 'any' | 'all' (optional)
    tagMode: tagMode_example,
    // 'asc' | 'desc' (optional)
    sort: sort_example,
  } satisfies ListTransactionsRequest;

  try {
    const data = await api.listTransactions(body);
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
| **accountID** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **pending** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **dateFrom** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **dateTo** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **amountMin** | `number` |  | [Optional] [Defaults to `undefined`] |
| **amountMax** | `number` |  | [Optional] [Defaults to `undefined`] |
| **categoryId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **tagIds** | `string` | Comma-separated tag IDs. | [Optional] [Defaults to `undefined`] |
| **tagMode** | `any`, `all` |  | [Optional] [Defaults to `&#39;any&#39;`] [Enum: any, all] |
| **sort** | `asc`, `desc` |  | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

### Return type

[**TransactionListResponse**](TransactionListResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction page |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchAccount

> Account patchAccount(accountID, accountPatchRequest)

Patch account fields for current authenticated user

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@penny/openapi-penny-client';
import type { PatchAccountRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // string
    accountID: accountID_example,
    // AccountPatchRequest
    accountPatchRequest: ...,
  } satisfies PatchAccountRequest;

  try {
    const data = await api.patchAccount(body);
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
| **accountID** | `string` |  | [Defaults to `undefined`] |
| **accountPatchRequest** | [AccountPatchRequest](AccountPatchRequest.md) |  | |

### Return type

[**Account**](Account.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Account updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchTransaction

> Transaction patchTransaction(accountID, transactionID, transactionPatchRequest)

Patch mutable transaction fields by ID for an owned account

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@penny/openapi-penny-client';
import type { PatchTransactionRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // string
    accountID: accountID_example,
    // string
    transactionID: transactionID_example,
    // TransactionPatchRequest
    transactionPatchRequest: ...,
  } satisfies PatchTransactionRequest;

  try {
    const data = await api.patchTransaction(body);
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
| **accountID** | `string` |  | [Defaults to `undefined`] |
| **transactionID** | `string` |  | [Defaults to `undefined`] |
| **transactionPatchRequest** | [TransactionPatchRequest](TransactionPatchRequest.md) |  | |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertBalance

> Balance upsertBalance(accountID, balanceCreateRequest)

Upsert a balance snapshot for an account owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@penny/openapi-penny-client';
import type { UpsertBalanceRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountsApi(config);

  const body = {
    // string
    accountID: accountID_example,
    // BalanceCreateRequest
    balanceCreateRequest: ...,
  } satisfies UpsertBalanceRequest;

  try {
    const data = await api.upsertBalance(body);
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
| **accountID** | `string` |  | [Defaults to `undefined`] |
| **balanceCreateRequest** | [BalanceCreateRequest](BalanceCreateRequest.md) |  | |

### Return type

[**Balance**](Balance.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Balance snapshot upserted |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

