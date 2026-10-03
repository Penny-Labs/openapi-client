# ConsoleApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getConsoleConnection**](ConsoleApi.md#getconsoleconnection) | **GET** /v1/admin/connections/{connectionID} | getConsoleConnection |
| [**getConsoleOverview**](ConsoleApi.md#getconsoleoverview) | **GET** /v1/admin/overview | getConsoleOverview |
| [**getLicenseAdmin**](ConsoleApi.md#getlicenseadmin) | **GET** /v1/license/{licenseID} | getLicenseAdmin |
| [**getLicenseUsageBillingSummary**](ConsoleApi.md#getlicenseusagebillingsummary) | **GET** /v1/license/{licenseID}/usage-billing/summary | getLicenseUsageBillingSummary |
| [**getRuntimeCommand**](ConsoleApi.md#getruntimecommand) | **GET** /v1/runtime/commands/{commandID} | getRuntimeCommand |
| [**getWebhookEndpoint**](ConsoleApi.md#getwebhookendpoint) | **GET** /v1/webhooks/endpoints/{endpointID} | getWebhookEndpoint |
| [**getWebhookEvent**](ConsoleApi.md#getwebhookevent) | **GET** /v1/webhooks/events/{eventID} | getWebhookEvent |
| [**listBillingCheckouts**](ConsoleApi.md#listbillingcheckouts) | **GET** /v1/billing/checkouts | listBillingCheckouts |
| [**listBillingSubscriptions**](ConsoleApi.md#listbillingsubscriptions) | **GET** /v1/billing/subscriptions | listBillingSubscriptions |
| [**listConsoleConnections**](ConsoleApi.md#listconsoleconnections) | **GET** /v1/admin/connections | listConsoleConnections |
| [**listNewsletterDeliveries**](ConsoleApi.md#listnewsletterdeliveries) | **GET** /v1/newsletter/{newsletterID}/deliveries | listNewsletterDeliveries |
| [**listNewsletterRecipientOutcomes**](ConsoleApi.md#listnewsletterrecipientoutcomes) | **GET** /v1/newsletter/deliveries | List recorded recipient outcomes |
| [**listProcessedStripeEvents**](ConsoleApi.md#listprocessedstripeevents) | **GET** /v1/billing/events | listProcessedStripeEvents |
| [**listSubscriberUnsubscribes**](ConsoleApi.md#listsubscriberunsubscribes) | **GET** /v1/newsletter/subscribers/{subscriberID}/unsubscribes | listSubscriberUnsubscribes |
| [**listSupportOverrideHistory**](ConsoleApi.md#listsupportoverridehistory) | **GET** /v1/license/{licenseID}/support-override/history | listSupportOverrideHistory |
| [**listWebhookDeliveries**](ConsoleApi.md#listwebhookdeliveries) | **GET** /v1/webhooks/deliveries | listWebhookDeliveries |
| [**listWebhookDestinations**](ConsoleApi.md#listwebhookdestinations) | **GET** /v1/webhooks/endpoints/{endpointID}/destinations | listWebhookDestinations |
| [**listWebhookEndpoints**](ConsoleApi.md#listwebhookendpoints) | **GET** /v1/webhooks/endpoints | listWebhookEndpoints |
| [**listWebhookEvents**](ConsoleApi.md#listwebhookevents) | **GET** /v1/webhooks/events | listWebhookEvents |
| [**searchConsole**](ConsoleApi.md#searchconsole) | **GET** /v1/admin/search | searchConsole |



## getConsoleConnection

> ConsoleConnection getConsoleConnection(connectionID)

getConsoleConnection

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { GetConsoleConnectionRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string
    connectionID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetConsoleConnectionRequest;

  try {
    const data = await api.getConsoleConnection(body);
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
| **connectionID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ConsoleConnection**](ConsoleConnection.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConsoleOverview

> ConsoleOverview getConsoleOverview(productId)

getConsoleOverview

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { GetConsoleOverviewRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // ProductID (optional)
    productId: ...,
  } satisfies GetConsoleOverviewRequest;

  try {
    const data = await api.getConsoleOverview(body);
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
| **productId** | `ProductID` |  | [Optional] [Defaults to `undefined`] [Enum: pennyos, openchat] |

### Return type

[**ConsoleOverview**](ConsoleOverview.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLicenseAdmin

> ConsoleLicense getLicenseAdmin(licenseID)

getLicenseAdmin

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { GetLicenseAdminRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string
    licenseID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetLicenseAdminRequest;

  try {
    const data = await api.getLicenseAdmin(body);
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
| **licenseID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ConsoleLicense**](ConsoleLicense.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLicenseUsageBillingSummary

> ConsoleUsageBillingSummary getLicenseUsageBillingSummary(licenseID, productId, from, to, month)

getLicenseUsageBillingSummary

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { GetLicenseUsageBillingSummaryRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string
    licenseID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ProductID (optional)
    productId: ...,
    // Date (optional)
    from: 2013-10-20,
    // Date (optional)
    to: 2013-10-20,
    // string (optional)
    month: month_example,
  } satisfies GetLicenseUsageBillingSummaryRequest;

  try {
    const data = await api.getLicenseUsageBillingSummary(body);
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
| **licenseID** | `string` |  | [Defaults to `undefined`] |
| **productId** | `ProductID` |  | [Optional] [Defaults to `undefined`] [Enum: pennyos, openchat] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **month** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ConsoleUsageBillingSummary**](ConsoleUsageBillingSummary.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRuntimeCommand

> RuntimeCommandSummary getRuntimeCommand(commandID)

getRuntimeCommand

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { GetRuntimeCommandRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string
    commandID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetRuntimeCommandRequest;

  try {
    const data = await api.getRuntimeCommand(body);
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
| **commandID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**RuntimeCommandSummary**](RuntimeCommandSummary.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhookEndpoint

> WebhookEndpoint getWebhookEndpoint(endpointID)

getWebhookEndpoint

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { GetWebhookEndpointRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string
    endpointID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWebhookEndpointRequest;

  try {
    const data = await api.getWebhookEndpoint(body);
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

[**WebhookEndpoint**](WebhookEndpoint.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhookEvent

> WebhookEventMetadata getWebhookEvent(eventID)

getWebhookEvent

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { GetWebhookEventRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string
    eventID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWebhookEventRequest;

  try {
    const data = await api.getWebhookEvent(body);
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
| **eventID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WebhookEventMetadata**](WebhookEventMetadata.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBillingCheckouts

> ConsoleCheckoutPage listBillingCheckouts(q, licenseId, status, from, to, limit, cursor)

listBillingCheckouts

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListBillingCheckoutsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // string (optional)
    licenseId: licenseId_example,
    // string (optional)
    status: status_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
  } satisfies ListBillingCheckoutsRequest;

  try {
    const data = await api.listBillingCheckouts(body);
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
| **licenseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |

### Return type

[**ConsoleCheckoutPage**](ConsoleCheckoutPage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBillingSubscriptions

> ConsoleSubscriptionPage listBillingSubscriptions(q, licenseId, status, from, to, limit, cursor)

listBillingSubscriptions

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListBillingSubscriptionsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // string (optional)
    licenseId: licenseId_example,
    // string (optional)
    status: status_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
  } satisfies ListBillingSubscriptionsRequest;

  try {
    const data = await api.listBillingSubscriptions(body);
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
| **licenseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |

### Return type

[**ConsoleSubscriptionPage**](ConsoleSubscriptionPage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listConsoleConnections

> ConsoleConnectionPage listConsoleConnections(q, productId, licenseId, installId, institutionId, status, from, to, limit, cursor)

listConsoleConnections

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListConsoleConnectionsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // ProductID (optional)
    productId: ...,
    // string (optional)
    licenseId: licenseId_example,
    // string (optional)
    installId: installId_example,
    // string (optional)
    institutionId: institutionId_example,
    // string (optional)
    status: status_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
  } satisfies ListConsoleConnectionsRequest;

  try {
    const data = await api.listConsoleConnections(body);
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
| **productId** | `ProductID` |  | [Optional] [Defaults to `undefined`] [Enum: pennyos, openchat] |
| **licenseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **installId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **institutionId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |

### Return type

[**ConsoleConnectionPage**](ConsoleConnectionPage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listNewsletterDeliveries

> NewsletterDeliveryMetadataPage listNewsletterDeliveries(newsletterID, q, subscriberId, status, from, to, limit, cursor)

listNewsletterDeliveries

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListNewsletterDeliveriesRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string
    newsletterID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    q: q_example,
    // string (optional)
    subscriberId: subscriberId_example,
    // string (optional)
    status: status_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
  } satisfies ListNewsletterDeliveriesRequest;

  try {
    const data = await api.listNewsletterDeliveries(body);
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
| **newsletterID** | `string` |  | [Defaults to `undefined`] |
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **subscriberId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |

### Return type

[**NewsletterDeliveryMetadataPage**](NewsletterDeliveryMetadataPage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listNewsletterRecipientOutcomes

> NewsletterDeliveryMetadataPage listNewsletterRecipientOutcomes(q, subscriberId, status, from, to, limit, cursor, newsletterId)

List recorded recipient outcomes

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListNewsletterRecipientOutcomesRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // string (optional)
    subscriberId: subscriberId_example,
    // string (optional)
    status: status_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
    // string (optional)
    newsletterId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListNewsletterRecipientOutcomesRequest;

  try {
    const data = await api.listNewsletterRecipientOutcomes(body);
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
| **subscriberId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |
| **newsletterId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**NewsletterDeliveryMetadataPage**](NewsletterDeliveryMetadataPage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listProcessedStripeEvents

> ConsoleStripeEventPage listProcessedStripeEvents(q, eventType, from, to, limit, cursor)

listProcessedStripeEvents

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListProcessedStripeEventsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // string (optional)
    eventType: eventType_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
  } satisfies ListProcessedStripeEventsRequest;

  try {
    const data = await api.listProcessedStripeEvents(body);
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
| **eventType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |

### Return type

[**ConsoleStripeEventPage**](ConsoleStripeEventPage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSubscriberUnsubscribes

> SubscriberUnsubscribePage listSubscriberUnsubscribes(subscriberID, q, mailingListId, from, to, limit, cursor)

listSubscriberUnsubscribes

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListSubscriberUnsubscribesRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string
    subscriberID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    q: q_example,
    // string (optional)
    mailingListId: mailingListId_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
  } satisfies ListSubscriberUnsubscribesRequest;

  try {
    const data = await api.listSubscriberUnsubscribes(body);
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
| **subscriberID** | `string` |  | [Defaults to `undefined`] |
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **mailingListId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |

### Return type

[**SubscriberUnsubscribePage**](SubscriberUnsubscribePage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSupportOverrideHistory

> SupportOverrideAuditPage listSupportOverrideHistory(licenseID, q, productId, action, from, to, limit, cursor)

listSupportOverrideHistory

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListSupportOverrideHistoryRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string
    licenseID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    q: q_example,
    // ProductID (optional)
    productId: ...,
    // string (optional)
    action: action_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
  } satisfies ListSupportOverrideHistoryRequest;

  try {
    const data = await api.listSupportOverrideHistory(body);
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
| **licenseID** | `string` |  | [Defaults to `undefined`] |
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **productId** | `ProductID` |  | [Optional] [Defaults to `undefined`] [Enum: pennyos, openchat] |
| **action** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |

### Return type

[**SupportOverrideAuditPage**](SupportOverrideAuditPage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhookDeliveries

> WebhookDeliveryMetadataPage listWebhookDeliveries(q, eventId, endpointId, destinationId, productId, licenseId, status, from, to, limit, cursor)

listWebhookDeliveries

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListWebhookDeliveriesRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // string (optional)
    eventId: eventId_example,
    // string (optional)
    endpointId: endpointId_example,
    // string (optional)
    destinationId: destinationId_example,
    // ProductID (optional)
    productId: ...,
    // string (optional)
    licenseId: licenseId_example,
    // string (optional)
    status: status_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
  } satisfies ListWebhookDeliveriesRequest;

  try {
    const data = await api.listWebhookDeliveries(body);
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
| **eventId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **endpointId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **destinationId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **productId** | `ProductID` |  | [Optional] [Defaults to `undefined`] [Enum: pennyos, openchat] |
| **licenseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |

### Return type

[**WebhookDeliveryMetadataPage**](WebhookDeliveryMetadataPage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhookDestinations

> WebhookDestinationPage listWebhookDestinations(endpointID, q, status, from, to, limit, cursor)

listWebhookDestinations

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListWebhookDestinationsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string
    endpointID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    q: q_example,
    // string (optional)
    status: status_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
  } satisfies ListWebhookDestinationsRequest;

  try {
    const data = await api.listWebhookDestinations(body);
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
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |

### Return type

[**WebhookDestinationPage**](WebhookDestinationPage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhookEndpoints

> WebhookEndpointPage listWebhookEndpoints(q, productId, licenseId, provider, status, from, to, limit, cursor)

listWebhookEndpoints

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListWebhookEndpointsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // ProductID (optional)
    productId: ...,
    // string (optional)
    licenseId: licenseId_example,
    // string (optional)
    provider: provider_example,
    // string (optional)
    status: status_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
  } satisfies ListWebhookEndpointsRequest;

  try {
    const data = await api.listWebhookEndpoints(body);
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
| **productId** | `ProductID` |  | [Optional] [Defaults to `undefined`] [Enum: pennyos, openchat] |
| **licenseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **provider** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |

### Return type

[**WebhookEndpointPage**](WebhookEndpointPage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhookEvents

> WebhookEventMetadataPage listWebhookEvents(q, endpointId, productId, licenseId, provider, eventType, status, from, to, limit, cursor)

listWebhookEvents

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { ListWebhookEventsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // string (optional)
    endpointId: endpointId_example,
    // ProductID (optional)
    productId: ...,
    // string (optional)
    licenseId: licenseId_example,
    // string (optional)
    provider: provider_example,
    // string (optional)
    eventType: eventType_example,
    // string (optional)
    status: status_example,
    // Date (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    to: 2013-10-20T19:20:30+01:00,
    // number (optional)
    limit: 56,
    // string | Opaque endpoint and filter-bound cursor. Reset when filters change. (optional)
    cursor: cursor_example,
  } satisfies ListWebhookEventsRequest;

  try {
    const data = await api.listWebhookEvents(body);
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
| **endpointId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **productId** | `ProductID` |  | [Optional] [Defaults to `undefined`] [Enum: pennyos, openchat] |
| **licenseId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **provider** | `string` |  | [Optional] [Defaults to `undefined`] |
| **eventType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` | Opaque endpoint and filter-bound cursor. Reset when filters change. | [Optional] [Defaults to `undefined`] |

### Return type

[**WebhookEventMetadataPage**](WebhookEventMetadataPage.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchConsole

> ConsoleSearchResponse searchConsole(q)

searchConsole

### Example

```ts
import {
  Configuration,
  ConsoleApi,
} from '@penny/openapi-management-api-client';
import type { SearchConsoleRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConsoleApi(config);

  const body = {
    // string (optional)
    q: q_example,
  } satisfies SearchConsoleRequest;

  try {
    const data = await api.searchConsole(body);
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

### Return type

[**ConsoleSearchResponse**](ConsoleSearchResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Operational metadata |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **503** | Operational data unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
