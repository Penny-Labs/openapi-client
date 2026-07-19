# PlaidApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**receivePlaidWebhook**](PlaidApi.md#receiveplaidwebhook) | **POST** /v1/plaid/webhook | Receive a verified Plaid webhook |



## receivePlaidWebhook

> PlaidWebhookResponse receivePlaidWebhook(plaidVerification, plaidWebhookRequest)

Receive a verified Plaid webhook

### Example

```ts
import {
  Configuration,
  PlaidApi,
} from '@penny/openapi-management-api-client';
import type { ReceivePlaidWebhookRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new PlaidApi();

  const body = {
    // string
    plaidVerification: plaidVerification_example,
    // PlaidWebhookRequest
    plaidWebhookRequest: ...,
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
| **plaidWebhookRequest** | [PlaidWebhookRequest](PlaidWebhookRequest.md) |  | |

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
| **200** | Webhook ignored or already processed |  -  |
| **202** | Managed sync command queued |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
