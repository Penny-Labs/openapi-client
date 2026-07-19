# BillingApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**claimBillingPurchase**](BillingApi.md#claimbillingpurchase) | **POST** /v1/billing/claim | Claim a fulfilled test-mode purchase license exactly once |
| [**createBillingCheckout**](BillingApi.md#createbillingcheckout) | **POST** /v1/billing/checkout | Create a Stripe test-mode Checkout session for PennyOS Pro |
| [**createRuntimeBillingPortal**](BillingApi.md#createruntimebillingportal) | **POST** /v1/runtime/billing/portal | Create a Stripe test-mode customer portal session |
| [**receiveStripeWebhook**](BillingApi.md#receivestripewebhook) | **POST** /v1/stripe/webhook | Receive a signature-verified Stripe test-mode webhook |



## claimBillingPurchase

> BillingClaimResponse claimBillingPurchase(billingClaimRequest)

Claim a fulfilled test-mode purchase license exactly once

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@penny/openapi-management-api-client';
import type { ClaimBillingPurchaseRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new BillingApi();

  const body = {
    // BillingClaimRequest
    billingClaimRequest: ...,
  } satisfies ClaimBillingPurchaseRequest;

  try {
    const data = await api.claimBillingPurchase(body);
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
| **billingClaimRequest** | [BillingClaimRequest](BillingClaimRequest.md) |  | |

### Return type

[**BillingClaimResponse**](BillingClaimResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | License claimed |  -  |
| **409** | Checkout is still being confirmed by Stripe |  -  |
| **410** | Claim is invalid, expired, or already used |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBillingCheckout

> BillingCheckoutResponse createBillingCheckout(billingCheckoutRequest)

Create a Stripe test-mode Checkout session for PennyOS Pro

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@penny/openapi-management-api-client';
import type { CreateBillingCheckoutRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new BillingApi();

  const body = {
    // BillingCheckoutRequest
    billingCheckoutRequest: ...,
  } satisfies CreateBillingCheckoutRequest;

  try {
    const data = await api.createBillingCheckout(body);
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
| **billingCheckoutRequest** | [BillingCheckoutRequest](BillingCheckoutRequest.md) |  | |

### Return type

[**BillingCheckoutResponse**](BillingCheckoutResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Checkout session created |  -  |
| **400** | Bad request |  -  |
| **502** | Upstream provider error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRuntimeBillingPortal

> BillingPortalResponse createRuntimeBillingPortal()

Create a Stripe test-mode customer portal session

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@penny/openapi-management-api-client';
import type { CreateRuntimeBillingPortalRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: RuntimeBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BillingApi(config);

  try {
    const data = await api.createRuntimeBillingPortal();
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

[**BillingPortalResponse**](BillingPortalResponse.md)

### Authorization

[RuntimeBearer](../README.md#RuntimeBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Portal session created |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **502** | Upstream provider error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## receiveStripeWebhook

> receiveStripeWebhook(stripeSignature, requestBody)

Receive a signature-verified Stripe test-mode webhook

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@penny/openapi-management-api-client';
import type { ReceiveStripeWebhookRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new BillingApi();

  const body = {
    // string
    stripeSignature: stripeSignature_example,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies ReceiveStripeWebhookRequest;

  try {
    const data = await api.receiveStripeWebhook(body);
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
| **stripeSignature** | `string` |  | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook processed or previously processed |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
