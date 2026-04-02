# CategoriesApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCategory**](CategoriesApi.md#createcategory) | **POST** /v1/categories | Create a category for current authenticated user |
| [**deleteCategory**](CategoriesApi.md#deletecategory) | **DELETE** /v1/categories/{categoryID} | Delete category by ID for current authenticated user |
| [**getCategoryByID**](CategoriesApi.md#getcategorybyid) | **GET** /v1/categories/{categoryID} | Get category by ID for current authenticated user |
| [**listCategories**](CategoriesApi.md#listcategories) | **GET** /v1/categories | List categories for current authenticated user |
| [**patchCategory**](CategoriesApi.md#patchcategory) | **PATCH** /v1/categories/{categoryID} | Patch category fields for current authenticated user |



## createCategory

> Category createCategory(categoryCreateRequest)

Create a category for current authenticated user

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '@penny-labs/openapi-penny-client';
import type { CreateCategoryRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CategoriesApi(config);

  const body = {
    // CategoryCreateRequest
    categoryCreateRequest: ...,
  } satisfies CreateCategoryRequest;

  try {
    const data = await api.createCategory(body);
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
| **categoryCreateRequest** | [CategoryCreateRequest](CategoryCreateRequest.md) |  | |

### Return type

[**Category**](Category.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Category created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCategory

> deleteCategory(categoryID)

Delete category by ID for current authenticated user

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '@penny-labs/openapi-penny-client';
import type { DeleteCategoryRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CategoriesApi(config);

  const body = {
    // string
    categoryID: categoryID_example,
  } satisfies DeleteCategoryRequest;

  try {
    const data = await api.deleteCategory(body);
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
| **categoryID** | `string` |  | [Defaults to `undefined`] |

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
| **204** | Category deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCategoryByID

> Category getCategoryByID(categoryID)

Get category by ID for current authenticated user

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '@penny-labs/openapi-penny-client';
import type { GetCategoryByIDRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CategoriesApi(config);

  const body = {
    // string
    categoryID: categoryID_example,
  } satisfies GetCategoryByIDRequest;

  try {
    const data = await api.getCategoryByID(body);
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
| **categoryID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Category**](Category.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Category found |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCategories

> CategoryListResponse listCategories()

List categories for current authenticated user

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '@penny-labs/openapi-penny-client';
import type { ListCategoriesRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CategoriesApi(config);

  try {
    const data = await api.listCategories();
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

[**CategoryListResponse**](CategoryListResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Category list |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchCategory

> Category patchCategory(categoryID, categoryPatchRequest)

Patch category fields for current authenticated user

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '@penny-labs/openapi-penny-client';
import type { PatchCategoryRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CategoriesApi(config);

  const body = {
    // string
    categoryID: categoryID_example,
    // CategoryPatchRequest
    categoryPatchRequest: ...,
  } satisfies PatchCategoryRequest;

  try {
    const data = await api.patchCategory(body);
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
| **categoryID** | `string` |  | [Defaults to `undefined`] |
| **categoryPatchRequest** | [CategoryPatchRequest](CategoryPatchRequest.md) |  | |

### Return type

[**Category**](Category.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Category updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

