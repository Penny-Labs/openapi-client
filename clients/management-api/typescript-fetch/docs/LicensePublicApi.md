# LicensePublicApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activateLicense**](LicensePublicApi.md#activatelicense) | **POST** /v1/license/activate | Activate or transfer license to an install |
| [**signupLicense**](LicensePublicApi.md#signuplicense) | **POST** /v1/license/signup | Create a pending license via public signup |
| [**validateLicense**](LicensePublicApi.md#validatelicense) | **POST** /v1/license/validate | Validate license and refresh lease |



## activateLicense

> LicenseActivateResponse activateLicense(licenseActivateRequest)

Activate or transfer license to an install

### Example

```ts
import {
  Configuration,
  LicensePublicApi,
} from '@penny/openapi-management-api-client';
import type { ActivateLicenseRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new LicensePublicApi();

  const body = {
    // LicenseActivateRequest
    licenseActivateRequest: ...,
  } satisfies ActivateLicenseRequest;

  try {
    const data = await api.activateLicense(body);
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
| **licenseActivateRequest** | [LicenseActivateRequest](LicenseActivateRequest.md) |  | |

### Return type

[**LicenseActivateResponse**](LicenseActivateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | License activated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **409** | Transfer requires explicit confirmation |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## signupLicense

> LicenseSignupResponse signupLicense(licenseSignupRequest)

Create a pending license via public signup

### Example

```ts
import {
  Configuration,
  LicensePublicApi,
} from '@penny/openapi-management-api-client';
import type { SignupLicenseRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new LicensePublicApi();

  const body = {
    // LicenseSignupRequest
    licenseSignupRequest: ...,
  } satisfies SignupLicenseRequest;

  try {
    const data = await api.signupLicense(body);
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
| **licenseSignupRequest** | [LicenseSignupRequest](LicenseSignupRequest.md) |  | |

### Return type

[**LicenseSignupResponse**](LicenseSignupResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | License created |  -  |
| **400** | Bad request |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateLicense

> LicenseValidateResponse validateLicense(licenseValidateRequest)

Validate license and refresh lease

### Example

```ts
import {
  Configuration,
  LicensePublicApi,
} from '@penny/openapi-management-api-client';
import type { ValidateLicenseRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new LicensePublicApi();

  const body = {
    // LicenseValidateRequest
    licenseValidateRequest: ...,
  } satisfies ValidateLicenseRequest;

  try {
    const data = await api.validateLicense(body);
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
| **licenseValidateRequest** | [LicenseValidateRequest](LicenseValidateRequest.md) |  | |

### Return type

[**LicenseValidateResponse**](LicenseValidateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Validation result |  -  |
| **400** | Bad request |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

