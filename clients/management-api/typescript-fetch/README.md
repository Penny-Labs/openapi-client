# @penny/openapi-management-api-client@0.1.0

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install @penny/openapi-management-api-client --save
```

Next, try it out.


```ts
import {
  Configuration,
  HealthApi,
} from '@penny/openapi-management-api-client';
import type { GetHealthzRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new HealthApi();

  try {
    const data = await api.getHealthz();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *http://localhost:8090*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*HealthApi* | [**getHealthz**](docs/HealthApi.md#gethealthz) | **GET** /healthz | Health check
*HealthApi* | [**getReadyz**](docs/HealthApi.md#getreadyz) | **GET** /readyz | Readiness check
*InstitutionsApi* | [**listInstitutions**](docs/InstitutionsApi.md#listinstitutions) | **GET** /v1/institutions/ | List institutions
*LicenseAdminApi* | [**createLicenseAdmin**](docs/LicenseAdminApi.md#createlicenseadmin) | **POST** /v1/license/ | Issue new pending license (admin)
*LicenseAdminApi* | [**listLicenseBillingMonthly**](docs/LicenseAdminApi.md#listlicensebillingmonthly) | **GET** /v1/license/{licenseID}/billing/monthly | List monthly billing lines for a license/product (admin)
*LicenseAdminApi* | [**listLicenseEntitlements**](docs/LicenseAdminApi.md#listlicenseentitlements) | **GET** /v1/license/{licenseID}/entitlements | List product entitlements for a license (admin)
*LicenseAdminApi* | [**listLicenseInstalls**](docs/LicenseAdminApi.md#listlicenseinstalls) | **GET** /v1/license/{licenseID}/installs | List runtime installs for a license (admin)
*LicenseAdminApi* | [**listLicenseTransfers**](docs/LicenseAdminApi.md#listlicensetransfers) | **GET** /v1/license/{licenseID}/transfers | List runtime transfer history for a license (admin)
*LicenseAdminApi* | [**listLicenseUsageDaily**](docs/LicenseAdminApi.md#listlicenseusagedaily) | **GET** /v1/license/{licenseID}/usage/daily | List daily usage aggregates for a license/product (admin)
*LicenseAdminApi* | [**listLicenses**](docs/LicenseAdminApi.md#listlicenses) | **GET** /v1/license/ | List licenses (admin)
*LicenseAdminApi* | [**patchLicense**](docs/LicenseAdminApi.md#patchlicenseoperation) | **PATCH** /v1/license/{licenseID} | Patch license status/expiry (admin)
*LicenseAdminApi* | [**upsertLicenseEntitlement**](docs/LicenseAdminApi.md#upsertlicenseentitlement) | **PUT** /v1/license/{licenseID}/entitlements | Upsert product entitlement for a license (admin)
*LicensePublicApi* | [**activateLicense**](docs/LicensePublicApi.md#activatelicense) | **POST** /v1/license/activate | Activate or transfer license to an install
*LicensePublicApi* | [**signupLicense**](docs/LicensePublicApi.md#signuplicense) | **POST** /v1/license/signup | Create a pending license via public signup
*LicensePublicApi* | [**validateLicense**](docs/LicensePublicApi.md#validatelicense) | **POST** /v1/license/validate | Validate license and refresh lease
*LinkApi* | [**connectLinkToken**](docs/LinkApi.md#connectlinktokenoperation) | **POST** /v1/link/connect | Exchange public token and connect item
*LinkApi* | [**createLinkToken**](docs/LinkApi.md#createlinktoken) | **PUT** /v1/link/token | Create Plaid link token
*NewsletterApi* | [**subscribeNewsletter**](docs/NewsletterApi.md#subscribenewsletter) | **POST** /v1/newsletter/subscribe | Subscribe email to a mailing list (admin)
*RuntimeApi* | [**activateRuntimeInstall**](docs/RuntimeApi.md#activateruntimeinstall) | **POST** /v1/runtime/activate | Activate runtime install and issue lease JWT
*RuntimeApi* | [**getRuntimeJwks**](docs/RuntimeApi.md#getruntimejwks) | **GET** /v1/runtime/jwks | Get active JWKS for lease JWT verification
*RuntimeApi* | [**ingestRuntimeUsageBatch**](docs/RuntimeApi.md#ingestruntimeusagebatch) | **POST** /v1/runtime/usage/batch | Ingest usage events for billing meters
*RuntimeApi* | [**renewRuntimeLease**](docs/RuntimeApi.md#renewruntimelease) | **POST** /v1/runtime/lease/renew | Renew runtime lease JWT


### Models

- [BillingMonthlyLine](docs/BillingMonthlyLine.md)
- [BillingMonthlyListResponse](docs/BillingMonthlyListResponse.md)
- [ConnectLinkMetadata](docs/ConnectLinkMetadata.md)
- [ConnectLinkTokenRequest](docs/ConnectLinkTokenRequest.md)
- [ConnectLinkTokenResponse](docs/ConnectLinkTokenResponse.md)
- [CreateLicenseResponse](docs/CreateLicenseResponse.md)
- [CreateLinkTokenResponse](docs/CreateLinkTokenResponse.md)
- [Entitlement](docs/Entitlement.md)
- [EntitlementListResponse](docs/EntitlementListResponse.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [InstallListResponse](docs/InstallListResponse.md)
- [Institution](docs/Institution.md)
- [JwkKey](docs/JwkKey.md)
- [JwksResponse](docs/JwksResponse.md)
- [License](docs/License.md)
- [LicenseActivateRequest](docs/LicenseActivateRequest.md)
- [LicenseActivateResponse](docs/LicenseActivateResponse.md)
- [LicenseListResponse](docs/LicenseListResponse.md)
- [LicenseSignupRequest](docs/LicenseSignupRequest.md)
- [LicenseSignupResponse](docs/LicenseSignupResponse.md)
- [LicenseStatus](docs/LicenseStatus.md)
- [LicenseValidateRequest](docs/LicenseValidateRequest.md)
- [LicenseValidateResponse](docs/LicenseValidateResponse.md)
- [LinkAccount](docs/LinkAccount.md)
- [LinkInstitution](docs/LinkInstitution.md)
- [NewsletterSubscribeRequest](docs/NewsletterSubscribeRequest.md)
- [PatchLicenseRequest](docs/PatchLicenseRequest.md)
- [RuntimeActivateRequest](docs/RuntimeActivateRequest.md)
- [RuntimeActivateResponse](docs/RuntimeActivateResponse.md)
- [RuntimeInstall](docs/RuntimeInstall.md)
- [RuntimeRenewResponse](docs/RuntimeRenewResponse.md)
- [RuntimeTransfer](docs/RuntimeTransfer.md)
- [RuntimeUsageBatchRequest](docs/RuntimeUsageBatchRequest.md)
- [RuntimeUsageBatchResponse](docs/RuntimeUsageBatchResponse.md)
- [RuntimeUsageEvent](docs/RuntimeUsageEvent.md)
- [TransferConfirmationRequiredResponse](docs/TransferConfirmationRequiredResponse.md)
- [TransferListResponse](docs/TransferListResponse.md)
- [UpsertEntitlementRequest](docs/UpsertEntitlementRequest.md)
- [UsageDailyAgg](docs/UsageDailyAgg.md)
- [UsageDailyListResponse](docs/UsageDailyListResponse.md)

### Authorization


Authentication schemes defined for the API:
<a id="AdminBearer"></a>
#### AdminBearer


- **Type**: HTTP Bearer Token authentication (APIKey)
<a id="RuntimeBearer"></a>
#### RuntimeBearer


- **Type**: HTTP Bearer Token authentication (JWT)
<a id="XLicenseKey"></a>
#### XLicenseKey


- **Type**: API key
- **API key parameter name**: `X-License-Key`
- **Location**: HTTP header
<a id="XLicenseInstallID"></a>
#### XLicenseInstallID


- **Type**: API key
- **API key parameter name**: `X-License-Install-ID`
- **Location**: HTTP header
<a id="XLicenseMachineFingerprint"></a>
#### XLicenseMachineFingerprint


- **Type**: API key
- **API key parameter name**: `X-License-Machine-Fingerprint`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `v1`
- Package version: `0.1.0`
- Generator version: `7.20.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
