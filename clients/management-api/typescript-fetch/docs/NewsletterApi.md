# NewsletterApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**subscribeNewsletter**](NewsletterApi.md#subscribenewsletter) | **POST** /v1/newsletter/subscribe | Subscribe email to a mailing list (admin) |



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

