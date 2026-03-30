# TagsApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**attachTagToTransaction**](TagsApi.md#attachtagtotransaction) | **PUT** /v1/accounts/{accountID}/transactions/{transactionID}/tags/{tagID} | Attach a tag to a transaction owned by the current authenticated user |
| [**createTag**](TagsApi.md#createtag) | **POST** /v1/tags | Create a tag for current authenticated user |
| [**deleteTag**](TagsApi.md#deletetag) | **DELETE** /v1/tags/{tagID} | Delete tag by ID for current authenticated user |
| [**detachTagFromTransaction**](TagsApi.md#detachtagfromtransaction) | **DELETE** /v1/accounts/{accountID}/transactions/{transactionID}/tags/{tagID} | Detach a tag from a transaction owned by the current authenticated user |
| [**getTagByID**](TagsApi.md#gettagbyid) | **GET** /v1/tags/{tagID} | Get tag by ID for current authenticated user |
| [**listTags**](TagsApi.md#listtags) | **GET** /v1/tags | List tags for current authenticated user |
| [**patchTag**](TagsApi.md#patchtag) | **PATCH** /v1/tags/{tagID} | Patch tag fields for current authenticated user |
| [**replaceTransactionTags**](TagsApi.md#replacetransactiontags) | **PUT** /v1/accounts/{accountID}/transactions/{transactionID}/tags | Replace all tags for a transaction owned by the current authenticated user |



## attachTagToTransaction

> Transaction attachTagToTransaction(accountID, transactionID, tagID)

Attach a tag to a transaction owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@penny/openapi-penny-client';
import type { AttachTagToTransactionRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TagsApi(config);

  const body = {
    // string
    accountID: accountID_example,
    // string
    transactionID: transactionID_example,
    // string
    tagID: tagID_example,
  } satisfies AttachTagToTransactionRequest;

  try {
    const data = await api.attachTagToTransaction(body);
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
| **tagID** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Tag attached to transaction |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTag

> Tag createTag(tagCreateRequest)

Create a tag for current authenticated user

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@penny/openapi-penny-client';
import type { CreateTagRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TagsApi(config);

  const body = {
    // TagCreateRequest
    tagCreateRequest: ...,
  } satisfies CreateTagRequest;

  try {
    const data = await api.createTag(body);
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
| **tagCreateRequest** | [TagCreateRequest](TagCreateRequest.md) |  | |

### Return type

[**Tag**](Tag.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Tag created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTag

> deleteTag(tagID)

Delete tag by ID for current authenticated user

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@penny/openapi-penny-client';
import type { DeleteTagRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TagsApi(config);

  const body = {
    // string
    tagID: tagID_example,
  } satisfies DeleteTagRequest;

  try {
    const data = await api.deleteTag(body);
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
| **tagID** | `string` |  | [Defaults to `undefined`] |

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
| **204** | Tag deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## detachTagFromTransaction

> Transaction detachTagFromTransaction(accountID, transactionID, tagID)

Detach a tag from a transaction owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@penny/openapi-penny-client';
import type { DetachTagFromTransactionRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TagsApi(config);

  const body = {
    // string
    accountID: accountID_example,
    // string
    transactionID: transactionID_example,
    // string
    tagID: tagID_example,
  } satisfies DetachTagFromTransactionRequest;

  try {
    const data = await api.detachTagFromTransaction(body);
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
| **tagID** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Tag detached from transaction |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTagByID

> Tag getTagByID(tagID)

Get tag by ID for current authenticated user

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@penny/openapi-penny-client';
import type { GetTagByIDRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TagsApi(config);

  const body = {
    // string
    tagID: tagID_example,
  } satisfies GetTagByIDRequest;

  try {
    const data = await api.getTagByID(body);
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
| **tagID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Tag**](Tag.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tag found |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTags

> TagListResponse listTags()

List tags for current authenticated user

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@penny/openapi-penny-client';
import type { ListTagsRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TagsApi(config);

  try {
    const data = await api.listTags();
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

[**TagListResponse**](TagListResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tag list |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchTag

> Tag patchTag(tagID, tagPatchRequest)

Patch tag fields for current authenticated user

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@penny/openapi-penny-client';
import type { PatchTagRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TagsApi(config);

  const body = {
    // string
    tagID: tagID_example,
    // TagPatchRequest
    tagPatchRequest: ...,
  } satisfies PatchTagRequest;

  try {
    const data = await api.patchTag(body);
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
| **tagID** | `string` |  | [Defaults to `undefined`] |
| **tagPatchRequest** | [TagPatchRequest](TagPatchRequest.md) |  | |

### Return type

[**Tag**](Tag.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tag updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replaceTransactionTags

> Transaction replaceTransactionTags(accountID, transactionID, transactionTagsReplaceRequest)

Replace all tags for a transaction owned by the current authenticated user

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@penny/openapi-penny-client';
import type { ReplaceTransactionTagsRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TagsApi(config);

  const body = {
    // string
    accountID: accountID_example,
    // string
    transactionID: transactionID_example,
    // TransactionTagsReplaceRequest
    transactionTagsReplaceRequest: ...,
  } satisfies ReplaceTransactionTagsRequest;

  try {
    const data = await api.replaceTransactionTags(body);
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
| **transactionTagsReplaceRequest** | [TransactionTagsReplaceRequest](TransactionTagsReplaceRequest.md) |  | |

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
| **200** | Transaction tags replaced |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

