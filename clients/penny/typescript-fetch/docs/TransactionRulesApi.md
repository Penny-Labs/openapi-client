# TransactionRulesApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTransactionRule**](TransactionRulesApi.md#createtransactionrule) | **POST** /v1/transactions/rules | Create a transaction rule for current authenticated user |
| [**deleteTransactionRule**](TransactionRulesApi.md#deletetransactionrule) | **DELETE** /v1/transactions/rules/{ruleID} | Delete transaction rule by ID for current authenticated user |
| [**getTransactionRuleByID**](TransactionRulesApi.md#gettransactionrulebyid) | **GET** /v1/transactions/rules/{ruleID} | Get transaction rule by ID for current authenticated user |
| [**listTransactionRules**](TransactionRulesApi.md#listtransactionrules) | **GET** /v1/transactions/rules | List transaction rules for current authenticated user |
| [**patchTransactionRule**](TransactionRulesApi.md#patchtransactionrule) | **PATCH** /v1/transactions/rules/{ruleID} | Patch transaction rule fields for current authenticated user |
| [**testApplyTransactionRule**](TransactionRulesApi.md#testapplytransactionrule) | **POST** /v1/transactions/rules/test-apply | Preview a transaction rule against user-owned transactions without changing data |



## createTransactionRule

> TransactionRule createTransactionRule(transactionRuleCreateRequest)

Create a transaction rule for current authenticated user

### Example

```ts
import {
  Configuration,
  TransactionRulesApi,
} from '@penny-labs/openapi-penny-client';
import type { CreateTransactionRuleRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TransactionRulesApi(config);

  const body = {
    // TransactionRuleCreateRequest
    transactionRuleCreateRequest: ...,
  } satisfies CreateTransactionRuleRequest;

  try {
    const data = await api.createTransactionRule(body);
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
| **transactionRuleCreateRequest** | [TransactionRuleCreateRequest](TransactionRuleCreateRequest.md) |  | |

### Return type

[**TransactionRule**](TransactionRule.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Transaction rule created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTransactionRule

> deleteTransactionRule(ruleID)

Delete transaction rule by ID for current authenticated user

### Example

```ts
import {
  Configuration,
  TransactionRulesApi,
} from '@penny-labs/openapi-penny-client';
import type { DeleteTransactionRuleRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TransactionRulesApi(config);

  const body = {
    // string
    ruleID: ruleID_example,
  } satisfies DeleteTransactionRuleRequest;

  try {
    const data = await api.deleteTransactionRule(body);
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
| **ruleID** | `string` |  | [Defaults to `undefined`] |

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
| **204** | Transaction rule deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransactionRuleByID

> TransactionRule getTransactionRuleByID(ruleID)

Get transaction rule by ID for current authenticated user

### Example

```ts
import {
  Configuration,
  TransactionRulesApi,
} from '@penny-labs/openapi-penny-client';
import type { GetTransactionRuleByIDRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TransactionRulesApi(config);

  const body = {
    // string
    ruleID: ruleID_example,
  } satisfies GetTransactionRuleByIDRequest;

  try {
    const data = await api.getTransactionRuleByID(body);
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
| **ruleID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TransactionRule**](TransactionRule.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction rule found |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTransactionRules

> TransactionRuleListResponse listTransactionRules(status, sourceScope)

List transaction rules for current authenticated user

### Example

```ts
import {
  Configuration,
  TransactionRulesApi,
} from '@penny-labs/openapi-penny-client';
import type { ListTransactionRulesRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TransactionRulesApi(config);

  const body = {
    // Array<TransactionRuleStatus> | Comma-separated status filters. Repeated query parameters are also accepted. (optional)
    status: ...,
    // Array<TransactionRuleSourceScope> | Comma-separated source scope filters. Repeated query parameters are also accepted. (optional)
    sourceScope: ...,
  } satisfies ListTransactionRulesRequest;

  try {
    const data = await api.listTransactionRules(body);
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
| **status** | `Array<TransactionRuleStatus>` | Comma-separated status filters. Repeated query parameters are also accepted. | [Optional] |
| **sourceScope** | `Array<TransactionRuleSourceScope>` | Comma-separated source scope filters. Repeated query parameters are also accepted. | [Optional] |

### Return type

[**TransactionRuleListResponse**](TransactionRuleListResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction rule list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchTransactionRule

> TransactionRule patchTransactionRule(ruleID, transactionRulePatchRequest)

Patch transaction rule fields for current authenticated user

### Example

```ts
import {
  Configuration,
  TransactionRulesApi,
} from '@penny-labs/openapi-penny-client';
import type { PatchTransactionRuleRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TransactionRulesApi(config);

  const body = {
    // string
    ruleID: ruleID_example,
    // TransactionRulePatchRequest
    transactionRulePatchRequest: ...,
  } satisfies PatchTransactionRuleRequest;

  try {
    const data = await api.patchTransactionRule(body);
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
| **ruleID** | `string` |  | [Defaults to `undefined`] |
| **transactionRulePatchRequest** | [TransactionRulePatchRequest](TransactionRulePatchRequest.md) |  | |

### Return type

[**TransactionRule**](TransactionRule.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction rule updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testApplyTransactionRule

> TransactionRuleTestApplyResponse testApplyTransactionRule(transactionRuleTestApplyRequest)

Preview a transaction rule against user-owned transactions without changing data

### Example

```ts
import {
  Configuration,
  TransactionRulesApi,
} from '@penny-labs/openapi-penny-client';
import type { TestApplyTransactionRuleRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TransactionRulesApi(config);

  const body = {
    // TransactionRuleTestApplyRequest
    transactionRuleTestApplyRequest: ...,
  } satisfies TestApplyTransactionRuleRequest;

  try {
    const data = await api.testApplyTransactionRule(body);
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
| **transactionRuleTestApplyRequest** | [TransactionRuleTestApplyRequest](TransactionRuleTestApplyRequest.md) |  | |

### Return type

[**TransactionRuleTestApplyResponse**](TransactionRuleTestApplyResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Read-only transaction rule application preview |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

