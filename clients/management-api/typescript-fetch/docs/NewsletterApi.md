# NewsletterApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listMailingLists**](NewsletterApi.md#listmailinglists) | **GET** /v1/newsletter/mailing-lists | List mailing lists (admin) |
| [**listNewsletters**](NewsletterApi.md#listnewsletters) | **GET** /v1/newsletter/ | List newsletters (admin) |
| [**listSubscribers**](NewsletterApi.md#listsubscribers) | **GET** /v1/newsletter/subscribers | List subscribers (admin) |
| [**sendNewsletter**](NewsletterApi.md#sendnewsletter) | **POST** /v1/newsletter/send | Publish newsletter to subscribed recipients (admin) |
| [**subscribeNewsletter**](NewsletterApi.md#subscribenewsletter) | **POST** /v1/newsletter/subscribe | Subscribe email to a mailing list (admin) |



## listMailingLists

> MailingListListResponse listMailingLists(q, limit, cursor)

List mailing lists (admin)

### Example

```ts
import {
  Configuration,
  NewsletterApi,
} from '@penny/openapi-management-api-client';
import type { ListMailingListsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NewsletterApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListMailingListsRequest;

  try {
    const data = await api.listMailingLists(body);
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
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**MailingListListResponse**](MailingListListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mailing lists |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listNewsletters

> NewsletterListResponse listNewsletters(mailingListId, status, limit, cursor)

List newsletters (admin)

### Example

```ts
import {
  Configuration,
  NewsletterApi,
} from '@penny/openapi-management-api-client';
import type { ListNewslettersRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NewsletterApi(config);

  const body = {
    // string (optional)
    mailingListId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // NewsletterStatus (optional)
    status: ...,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListNewslettersRequest;

  try {
    const data = await api.listNewsletters(body);
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
| **mailingListId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `NewsletterStatus` |  | [Optional] [Defaults to `undefined`] [Enum: draft, scheduled, published, canceled] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**NewsletterListResponse**](NewsletterListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Newsletter list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSubscribers

> SubscriberListResponse listSubscribers(q, mailingListId, limit, cursor)

List subscribers (admin)

### Example

```ts
import {
  Configuration,
  NewsletterApi,
} from '@penny/openapi-management-api-client';
import type { ListSubscribersRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NewsletterApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // string (optional)
    mailingListId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListSubscribersRequest;

  try {
    const data = await api.listSubscribers(body);
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
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **mailingListId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**SubscriberListResponse**](SubscriberListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subscriber list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendNewsletter

> NewsletterSendResponse sendNewsletter(newsletterSendRequest)

Publish newsletter to subscribed recipients (admin)

### Example

```ts
import {
  Configuration,
  NewsletterApi,
} from '@penny/openapi-management-api-client';
import type { SendNewsletterRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NewsletterApi(config);

  const body = {
    // NewsletterSendRequest
    newsletterSendRequest: ...,
  } satisfies SendNewsletterRequest;

  try {
    const data = await api.sendNewsletter(body);
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
| **newsletterSendRequest** | [NewsletterSendRequest](NewsletterSendRequest.md) |  | |

### Return type

[**NewsletterSendResponse**](NewsletterSendResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Newsletter send result |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## subscribeNewsletter

> subscribeNewsletter(newsletterSubscribeRequest)

Subscribe email to a mailing list (admin)

### Example

```ts
import {
  Configuration,
  NewsletterApi,
} from '@penny/openapi-management-api-client';
import type { SubscribeNewsletterRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NewsletterApi(config);

  const body = {
    // NewsletterSubscribeRequest
    newsletterSubscribeRequest: ...,
  } satisfies SubscribeNewsletterRequest;

  try {
    const data = await api.subscribeNewsletter(body);
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
| **newsletterSubscribeRequest** | [NewsletterSubscribeRequest](NewsletterSubscribeRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Subscription accepted |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

