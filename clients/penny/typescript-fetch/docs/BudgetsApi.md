# BudgetsApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBudget**](BudgetsApi.md#createbudget) | **POST** /v1/budgets | Create a budget for current authenticated user |
| [**createBudgetPeriod**](BudgetsApi.md#createbudgetperiod) | **POST** /v1/budgets/{budgetID}/periods | Create a budget period for a budget owned by the current authenticated user |
| [**deleteBudget**](BudgetsApi.md#deletebudget) | **DELETE** /v1/budgets/{budgetID} | Delete budget by ID for current authenticated user |
| [**getBudgetByID**](BudgetsApi.md#getbudgetbyid) | **GET** /v1/budgets/{budgetID} | Get budget by ID for current authenticated user |
| [**getBudgetPeriodByID**](BudgetsApi.md#getbudgetperiodbyid) | **GET** /v1/budgets/{budgetID}/periods/{budgetPeriodID} | Get budget period by ID for a budget owned by the current authenticated user |
| [**listBudgetPeriods**](BudgetsApi.md#listbudgetperiods) | **GET** /v1/budgets/{budgetID}/periods | List budget periods for a budget owned by the current authenticated user |
| [**listBudgets**](BudgetsApi.md#listbudgets) | **GET** /v1/budgets | List budgets for current authenticated user |
| [**patchBudget**](BudgetsApi.md#patchbudget) | **PATCH** /v1/budgets/{budgetID} | Patch budget fields for current authenticated user |
| [**patchBudgetPeriod**](BudgetsApi.md#patchbudgetperiod) | **PATCH** /v1/budgets/{budgetID}/periods/{budgetPeriodID} | Patch budget period fields for a budget owned by the current authenticated user |
| [**replaceBudgetPeriodAllocations**](BudgetsApi.md#replacebudgetperiodallocations) | **PUT** /v1/budgets/{budgetID}/periods/{budgetPeriodID}/allocations | Replace all category allocations for a budget period owned by the current authenticated user |



## createBudget

> Budget createBudget(budgetCreateRequest)

Create a budget for current authenticated user

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '@penny-labs/openapi-penny-client';
import type { CreateBudgetRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // BudgetCreateRequest
    budgetCreateRequest: ...,
  } satisfies CreateBudgetRequest;

  try {
    const data = await api.createBudget(body);
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
| **budgetCreateRequest** | [BudgetCreateRequest](BudgetCreateRequest.md) |  | |

### Return type

[**Budget**](Budget.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Budget created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBudgetPeriod

> BudgetPeriod createBudgetPeriod(budgetID, budgetPeriodCreateRequest)

Create a budget period for a budget owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '@penny-labs/openapi-penny-client';
import type { CreateBudgetPeriodRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetID: budgetID_example,
    // BudgetPeriodCreateRequest
    budgetPeriodCreateRequest: ...,
  } satisfies CreateBudgetPeriodRequest;

  try {
    const data = await api.createBudgetPeriod(body);
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
| **budgetID** | `string` |  | [Defaults to `undefined`] |
| **budgetPeriodCreateRequest** | [BudgetPeriodCreateRequest](BudgetPeriodCreateRequest.md) |  | |

### Return type

[**BudgetPeriod**](BudgetPeriod.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Budget period created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBudget

> deleteBudget(budgetID)

Delete budget by ID for current authenticated user

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '@penny-labs/openapi-penny-client';
import type { DeleteBudgetRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetID: budgetID_example,
  } satisfies DeleteBudgetRequest;

  try {
    const data = await api.deleteBudget(body);
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
| **budgetID** | `string` |  | [Defaults to `undefined`] |

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
| **204** | Budget deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBudgetByID

> Budget getBudgetByID(budgetID)

Get budget by ID for current authenticated user

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '@penny-labs/openapi-penny-client';
import type { GetBudgetByIDRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetID: budgetID_example,
  } satisfies GetBudgetByIDRequest;

  try {
    const data = await api.getBudgetByID(body);
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
| **budgetID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Budget**](Budget.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Budget found |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBudgetPeriodByID

> BudgetPeriod getBudgetPeriodByID(budgetID, budgetPeriodID)

Get budget period by ID for a budget owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '@penny-labs/openapi-penny-client';
import type { GetBudgetPeriodByIDRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetID: budgetID_example,
    // string
    budgetPeriodID: budgetPeriodID_example,
  } satisfies GetBudgetPeriodByIDRequest;

  try {
    const data = await api.getBudgetPeriodByID(body);
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
| **budgetID** | `string` |  | [Defaults to `undefined`] |
| **budgetPeriodID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**BudgetPeriod**](BudgetPeriod.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Budget period found |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBudgetPeriods

> BudgetPeriodListResponse listBudgetPeriods(budgetID, status)

List budget periods for a budget owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '@penny-labs/openapi-penny-client';
import type { ListBudgetPeriodsRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetID: budgetID_example,
    // BudgetPeriodStatus (optional)
    status: ...,
  } satisfies ListBudgetPeriodsRequest;

  try {
    const data = await api.listBudgetPeriods(body);
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
| **budgetID** | `string` |  | [Defaults to `undefined`] |
| **status** | `BudgetPeriodStatus` |  | [Optional] [Defaults to `undefined`] [Enum: draft, active, closed] |

### Return type

[**BudgetPeriodListResponse**](BudgetPeriodListResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Budget period list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBudgets

> BudgetListResponse listBudgets()

List budgets for current authenticated user

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '@penny-labs/openapi-penny-client';
import type { ListBudgetsRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  try {
    const data = await api.listBudgets();
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

[**BudgetListResponse**](BudgetListResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Budget list |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchBudget

> Budget patchBudget(budgetID, budgetPatchRequest)

Patch budget fields for current authenticated user

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '@penny-labs/openapi-penny-client';
import type { PatchBudgetRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetID: budgetID_example,
    // BudgetPatchRequest
    budgetPatchRequest: ...,
  } satisfies PatchBudgetRequest;

  try {
    const data = await api.patchBudget(body);
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
| **budgetID** | `string` |  | [Defaults to `undefined`] |
| **budgetPatchRequest** | [BudgetPatchRequest](BudgetPatchRequest.md) |  | |

### Return type

[**Budget**](Budget.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Budget updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchBudgetPeriod

> BudgetPeriod patchBudgetPeriod(budgetID, budgetPeriodID, budgetPeriodPatchRequest)

Patch budget period fields for a budget owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '@penny-labs/openapi-penny-client';
import type { PatchBudgetPeriodRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetID: budgetID_example,
    // string
    budgetPeriodID: budgetPeriodID_example,
    // BudgetPeriodPatchRequest
    budgetPeriodPatchRequest: ...,
  } satisfies PatchBudgetPeriodRequest;

  try {
    const data = await api.patchBudgetPeriod(body);
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
| **budgetID** | `string` |  | [Defaults to `undefined`] |
| **budgetPeriodID** | `string` |  | [Defaults to `undefined`] |
| **budgetPeriodPatchRequest** | [BudgetPeriodPatchRequest](BudgetPeriodPatchRequest.md) |  | |

### Return type

[**BudgetPeriod**](BudgetPeriod.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Budget period updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replaceBudgetPeriodAllocations

> BudgetPeriod replaceBudgetPeriodAllocations(budgetID, budgetPeriodID, budgetPeriodAllocationsReplaceRequest)

Replace all category allocations for a budget period owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  BudgetsApi,
} from '@penny-labs/openapi-penny-client';
import type { ReplaceBudgetPeriodAllocationsRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BudgetsApi(config);

  const body = {
    // string
    budgetID: budgetID_example,
    // string
    budgetPeriodID: budgetPeriodID_example,
    // BudgetPeriodAllocationsReplaceRequest
    budgetPeriodAllocationsReplaceRequest: ...,
  } satisfies ReplaceBudgetPeriodAllocationsRequest;

  try {
    const data = await api.replaceBudgetPeriodAllocations(body);
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
| **budgetID** | `string` |  | [Defaults to `undefined`] |
| **budgetPeriodID** | `string` |  | [Defaults to `undefined`] |
| **budgetPeriodAllocationsReplaceRequest** | [BudgetPeriodAllocationsReplaceRequest](BudgetPeriodAllocationsReplaceRequest.md) |  | |

### Return type

[**BudgetPeriod**](BudgetPeriod.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Budget period allocations replaced |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

