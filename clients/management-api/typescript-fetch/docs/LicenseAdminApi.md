# LicenseAdminApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLicenseAdmin**](LicenseAdminApi.md#createlicenseadmin) | **POST** /v1/license/ | Issue new pending license (admin) |
| [**listLicenseBillingMonthly**](LicenseAdminApi.md#listlicensebillingmonthly) | **GET** /v1/license/{licenseID}/billing/monthly | List monthly billing lines for a license/product (admin) |
| [**listLicenseEntitlements**](LicenseAdminApi.md#listlicenseentitlements) | **GET** /v1/license/{licenseID}/entitlements | List product entitlements for a license (admin) |
| [**listLicenseInstalls**](LicenseAdminApi.md#listlicenseinstalls) | **GET** /v1/license/{licenseID}/installs | List runtime installs for a license (admin) |
| [**listLicenseTransfers**](LicenseAdminApi.md#listlicensetransfers) | **GET** /v1/license/{licenseID}/transfers | List runtime transfer history for a license (admin) |
| [**listLicenseUsageDaily**](LicenseAdminApi.md#listlicenseusagedaily) | **GET** /v1/license/{licenseID}/usage/daily | List daily usage aggregates for a license/product (admin) |
| [**listLicenses**](LicenseAdminApi.md#listlicenses) | **GET** /v1/license/ | List licenses (admin) |
| [**patchLicense**](LicenseAdminApi.md#patchlicenseoperation) | **PATCH** /v1/license/{licenseID} | Patch license status/expiry (admin) |
| [**upsertLicenseEntitlement**](LicenseAdminApi.md#upsertlicenseentitlement) | **PUT** /v1/license/{licenseID}/entitlements | Upsert product entitlement for a license (admin) |



## createLicenseAdmin

> CreateLicenseResponse createLicenseAdmin(body)

Issue new pending license (admin)

### Example

```ts
import {
  Configuration,
  LicenseAdminApi,
} from '@penny/openapi-management-api-client';
import type { CreateLicenseAdminRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LicenseAdminApi(config);

  const body = {
    // object (optional)
    body: Object,
  } satisfies CreateLicenseAdminRequest;

  try {
    const data = await api.createLicenseAdmin(body);
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
| **body** | `object` |  | [Optional] |

### Return type

[**CreateLicenseResponse**](CreateLicenseResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | License issued |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLicenseBillingMonthly

> BillingMonthlyListResponse listLicenseBillingMonthly(licenseID, productId, month)

List monthly billing lines for a license/product (admin)

### Example

```ts
import {
  Configuration,
  LicenseAdminApi,
} from '@penny/openapi-management-api-client';
import type { ListLicenseBillingMonthlyRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LicenseAdminApi(config);

  const body = {
    // string
    licenseID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    productId: productId_example,
    // string
    month: month_example,
  } satisfies ListLicenseBillingMonthlyRequest;

  try {
    const data = await api.listLicenseBillingMonthly(body);
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
| **productId** | `string` |  | [Defaults to `undefined`] |
| **month** | `string` |  | [Defaults to `undefined`] |

### Return type

[**BillingMonthlyListResponse**](BillingMonthlyListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Monthly billing lines |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLicenseEntitlements

> EntitlementListResponse listLicenseEntitlements(licenseID)

List product entitlements for a license (admin)

### Example

```ts
import {
  Configuration,
  LicenseAdminApi,
} from '@penny/openapi-management-api-client';
import type { ListLicenseEntitlementsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LicenseAdminApi(config);

  const body = {
    // string
    licenseID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListLicenseEntitlementsRequest;

  try {
    const data = await api.listLicenseEntitlements(body);
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

[**EntitlementListResponse**](EntitlementListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Entitlements list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLicenseInstalls

> InstallListResponse listLicenseInstalls(licenseID)

List runtime installs for a license (admin)

### Example

```ts
import {
  Configuration,
  LicenseAdminApi,
} from '@penny/openapi-management-api-client';
import type { ListLicenseInstallsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LicenseAdminApi(config);

  const body = {
    // string
    licenseID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListLicenseInstallsRequest;

  try {
    const data = await api.listLicenseInstalls(body);
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

[**InstallListResponse**](InstallListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Installs list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLicenseTransfers

> TransferListResponse listLicenseTransfers(licenseID)

List runtime transfer history for a license (admin)

### Example

```ts
import {
  Configuration,
  LicenseAdminApi,
} from '@penny/openapi-management-api-client';
import type { ListLicenseTransfersRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LicenseAdminApi(config);

  const body = {
    // string
    licenseID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListLicenseTransfersRequest;

  try {
    const data = await api.listLicenseTransfers(body);
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

[**TransferListResponse**](TransferListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transfers list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLicenseUsageDaily

> UsageDailyListResponse listLicenseUsageDaily(licenseID, productId, from, to)

List daily usage aggregates for a license/product (admin)

### Example

```ts
import {
  Configuration,
  LicenseAdminApi,
} from '@penny/openapi-management-api-client';
import type { ListLicenseUsageDailyRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LicenseAdminApi(config);

  const body = {
    // string
    licenseID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    productId: productId_example,
    // Date (optional)
    from: 2013-10-20,
    // Date (optional)
    to: 2013-10-20,
  } satisfies ListLicenseUsageDailyRequest;

  try {
    const data = await api.listLicenseUsageDaily(body);
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
| **productId** | `string` |  | [Defaults to `undefined`] |
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**UsageDailyListResponse**](UsageDailyListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Daily usage list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLicenses

> LicenseListResponse listLicenses(q, status, limit, offset)

List licenses (admin)

### Example

```ts
import {
  Configuration,
  LicenseAdminApi,
} from '@penny/openapi-management-api-client';
import type { ListLicensesRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LicenseAdminApi(config);

  const body = {
    // string | Search by id or key suffix (optional)
    q: q_example,
    // LicenseStatus (optional)
    status: ...,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListLicensesRequest;

  try {
    const data = await api.listLicenses(body);
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
| **q** | `string` | Search by id or key suffix | [Optional] [Defaults to `undefined`] |
| **status** | `LicenseStatus` |  | [Optional] [Defaults to `undefined`] [Enum: active, pending, revoked, suspended, expired] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **offset** | `number` |  | [Optional] [Defaults to `0`] |

### Return type

[**LicenseListResponse**](LicenseListResponse.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated license list |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchLicense

> License patchLicense(licenseID, patchLicenseRequest)

Patch license status/expiry (admin)

### Example

```ts
import {
  Configuration,
  LicenseAdminApi,
} from '@penny/openapi-management-api-client';
import type { PatchLicenseOperationRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LicenseAdminApi(config);

  const body = {
    // string
    licenseID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PatchLicenseRequest
    patchLicenseRequest: ...,
  } satisfies PatchLicenseOperationRequest;

  try {
    const data = await api.patchLicense(body);
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
| **patchLicenseRequest** | [PatchLicenseRequest](PatchLicenseRequest.md) |  | |

### Return type

[**License**](License.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated license |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertLicenseEntitlement

> Entitlement upsertLicenseEntitlement(licenseID, upsertEntitlementRequest)

Upsert product entitlement for a license (admin)

### Example

```ts
import {
  Configuration,
  LicenseAdminApi,
} from '@penny/openapi-management-api-client';
import type { UpsertLicenseEntitlementRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: AdminBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LicenseAdminApi(config);

  const body = {
    // string
    licenseID: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpsertEntitlementRequest
    upsertEntitlementRequest: ...,
  } satisfies UpsertLicenseEntitlementRequest;

  try {
    const data = await api.upsertLicenseEntitlement(body);
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
| **upsertEntitlementRequest** | [UpsertEntitlementRequest](UpsertEntitlementRequest.md) |  | |

### Return type

[**Entitlement**](Entitlement.md)

### Authorization

[AdminBearer](../README.md#AdminBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated entitlement |  -  |
| **201** | Created entitlement |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

