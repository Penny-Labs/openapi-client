# WebhooksApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhookDestination**](WebhooksApi.md#createwebhookdestinationoperation) | **POST** /v1/webhooks/endpoints/{endpointID}/destinations | createWebhookDestination |
| [**createWebhookEndpoint**](WebhooksApi.md#createwebhookendpointoperation) | **POST** /v1/webhooks/endpoints | createWebhookEndpoint |
| [**disableWebhookDestination**](WebhooksApi.md#disablewebhookdestination) | **DELETE** /v1/webhooks/destinations/{destinationID} | disableWebhookDestination |
| [**disableWebhookEndpoint**](WebhooksApi.md#disablewebhookendpoint) | **DELETE** /v1/webhooks/endpoints/{endpointID} | disableWebhookEndpoint |
| [**patchWebhookDestination**](WebhooksApi.md#patchwebhookdestinationoperation) | **PATCH** /v1/webhooks/destinations/{destinationID} | patchWebhookDestination |
| [**patchWebhookEndpoint**](WebhooksApi.md#patchwebhookendpointoperation) | **PATCH** /v1/webhooks/endpoints/{endpointID} | patchWebhookEndpoint |
| [**receiveRelayWebhook**](WebhooksApi.md#receiverelaywebhook) | **POST** /v1/webhooks/inbound/{endpointID} | Receive a signed or endpoint-token-authenticated relay event |



## createWebhookDestination

> WebhookDestination createWebhookDestination(endpointID, createWebhookDestinationRequest)

createWebhookDestination

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@penny/openapi-management-api-client';
import type { CreateWebhookDestinationOperationRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    endpointID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreateWebhookDestinationRequest
    createWebhookDestinationRequest: ...,
  } satisfies CreateWebhookDestinationOperationRequest;

  try {
    const data = await api.createWebhookDestination(body);
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
| **endpointID** | `string` |  | [Defaults to `undefined`] |
| **createWebhookDestinationRequest** | [CreateWebhookDestinationRequest](CreateWebhookDestinationRequest.md) |  | |

### Return type

[**WebhookDestination**](WebhookDestination.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createWebhookEndpoint

> CreateWebhookEndpointResponse createWebhookEndpoint(createWebhookEndpointRequest)

createWebhookEndpoint

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@penny/openapi-management-api-client';
import type { CreateWebhookEndpointOperationRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // CreateWebhookEndpointRequest
    createWebhookEndpointRequest: ...,
  } satisfies CreateWebhookEndpointOperationRequest;

  try {
    const data = await api.createWebhookEndpoint(body);
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
| **createWebhookEndpointRequest** | [CreateWebhookEndpointRequest](CreateWebhookEndpointRequest.md) |  | |

### Return type

[**CreateWebhookEndpointResponse**](CreateWebhookEndpointResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disableWebhookDestination

> disableWebhookDestination(destinationID)

disableWebhookDestination

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@penny/openapi-management-api-client';
import type { DisableWebhookDestinationRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    destinationID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DisableWebhookDestinationRequest;

  try {
    const data = await api.disableWebhookDestination(body);
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
| **destinationID** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Disabled |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disableWebhookEndpoint

> disableWebhookEndpoint(endpointID)

disableWebhookEndpoint

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@penny/openapi-management-api-client';
import type { DisableWebhookEndpointRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    endpointID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DisableWebhookEndpointRequest;

  try {
    const data = await api.disableWebhookEndpoint(body);
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
| **endpointID** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Disabled |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchWebhookDestination

> WebhookDestination patchWebhookDestination(destinationID, patchWebhookDestinationRequest)

patchWebhookDestination

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@penny/openapi-management-api-client';
import type { PatchWebhookDestinationOperationRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    destinationID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PatchWebhookDestinationRequest
    patchWebhookDestinationRequest: ...,
  } satisfies PatchWebhookDestinationOperationRequest;

  try {
    const data = await api.patchWebhookDestination(body);
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
| **destinationID** | `string` |  | [Defaults to `undefined`] |
| **patchWebhookDestinationRequest** | [PatchWebhookDestinationRequest](PatchWebhookDestinationRequest.md) |  | |

### Return type

[**WebhookDestination**](WebhookDestination.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchWebhookEndpoint

> WebhookEndpoint patchWebhookEndpoint(endpointID, patchWebhookEndpointRequest)

patchWebhookEndpoint

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@penny/openapi-management-api-client';
import type { PatchWebhookEndpointOperationRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    endpointID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PatchWebhookEndpointRequest
    patchWebhookEndpointRequest: ...,
  } satisfies PatchWebhookEndpointOperationRequest;

  try {
    const data = await api.patchWebhookEndpoint(body);
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
| **endpointID** | `string` |  | [Defaults to `undefined`] |
| **patchWebhookEndpointRequest** | [PatchWebhookEndpointRequest](PatchWebhookEndpointRequest.md) |  | |

### Return type

[**WebhookEndpoint**](WebhookEndpoint.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## receiveRelayWebhook

> WebhookReceiveResponse receiveRelayWebhook(endpointID, requestBody, xHubSignature256, xWebhookEndpointToken)

Receive a signed or endpoint-token-authenticated relay event

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@penny/openapi-management-api-client';
import type { ReceiveRelayWebhookRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new WebhooksApi();

  const body = {
    // string
    endpointID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
    // string (optional)
    xHubSignature256: xHubSignature256_example,
    // string (optional)
    xWebhookEndpointToken: xWebhookEndpointToken_example,
  } satisfies ReceiveRelayWebhookRequest;

  try {
    const data = await api.receiveRelayWebhook(body);
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
| **endpointID** | `string` |  | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | |
| **xHubSignature256** | `string` |  | [Optional] [Defaults to `undefined`] |
| **xWebhookEndpointToken** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**WebhookReceiveResponse**](WebhookReceiveResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Operational metadata |  -  |
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **413** | Payload too large |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

