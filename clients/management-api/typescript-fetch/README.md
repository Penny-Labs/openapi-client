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
*LinkApi* | [**listLinkTransactions**](docs/LinkApi.md#listlinktransactions) | **GET** /v1/link/{itemID}/transactions | List synced managed transactions for a connected item
*LinkApi* | [**receivePlaidWebhook**](docs/LinkApi.md#receiveplaidwebhook) | **POST** /v1/plaid/webhook | Receive signed Plaid webhooks
*LinkApi* | [**syncLinkTransactions**](docs/LinkApi.md#synclinktransactions) | **POST** /v1/link/{itemID}/transactions/sync | Sync Plaid transactions for a connected item
*NewsletterApi* | [**listMailingLists**](docs/NewsletterApi.md#listmailinglists) | **GET** /v1/newsletter/mailing-lists | List mailing lists (admin)
*NewsletterApi* | [**listNewsletters**](docs/NewsletterApi.md#listnewsletters) | **GET** /v1/newsletter/ | List newsletters (admin)
*NewsletterApi* | [**listSubscribers**](docs/NewsletterApi.md#listsubscribers) | **GET** /v1/newsletter/subscribers | List subscribers (admin)
*NewsletterApi* | [**sendNewsletter**](docs/NewsletterApi.md#sendnewsletter) | **POST** /v1/newsletter/send | Publish newsletter to subscribed recipients (admin)
*NewsletterApi* | [**subscribeNewsletter**](docs/NewsletterApi.md#subscribenewsletter) | **POST** /v1/newsletter/subscribe | Subscribe email to a mailing list (admin)
*RuntimeApi* | [**activateRuntimeInstall**](docs/RuntimeApi.md#activateruntimeinstall) | **POST** /v1/runtime/activate | Activate runtime install and issue lease JWT
*RuntimeApi* | [**createRuntimeCommand**](docs/RuntimeApi.md#createruntimecommand) | **POST** /v1/runtime/commands | Dispatch runtime command to install/license/product target (admin)
*RuntimeApi* | [**getRuntimeActivationOverview**](docs/RuntimeApi.md#getruntimeactivationoverview) | **GET** /v1/runtime/activations/overview | Get runtime activation KPI overview (admin)
*RuntimeApi* | [**getRuntimeJwks**](docs/RuntimeApi.md#getruntimejwks) | **GET** /v1/runtime/jwks | Get active JWKS for lease JWT verification
*RuntimeApi* | [**ingestRuntimeUsageBatch**](docs/RuntimeApi.md#ingestruntimeusagebatch) | **POST** /v1/runtime/usage/batch | Ingest usage events for billing meters
*RuntimeApi* | [**listRuntimeActivationHistory**](docs/RuntimeApi.md#listruntimeactivationhistory) | **GET** /v1/runtime/activations/history | List runtime activation history by day (admin)
*RuntimeApi* | [**listRuntimeCommandDeliveries**](docs/RuntimeApi.md#listruntimecommanddeliveries) | **GET** /v1/runtime/commands/{commandID}/deliveries | List runtime command delivery states and acknowledgements (admin)
*RuntimeApi* | [**listRuntimeCommands**](docs/RuntimeApi.md#listruntimecommands) | **GET** /v1/runtime/commands | List runtime commands with delivery status counters (admin)
*RuntimeApi* | [**listRuntimeInstances**](docs/RuntimeApi.md#listruntimeinstances) | **GET** /v1/runtime/instances | List runtime instances and websocket connection state (admin)
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
- [InstitutionListResponse](docs/InstitutionListResponse.md)
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
- [MailingList](docs/MailingList.md)
- [MailingListListResponse](docs/MailingListListResponse.md)
- [ManagedTransaction](docs/ManagedTransaction.md)
- [ManagedTransactionListResponse](docs/ManagedTransactionListResponse.md)
- [NewsletterListResponse](docs/NewsletterListResponse.md)
- [NewsletterSendRequest](docs/NewsletterSendRequest.md)
- [NewsletterSendResponse](docs/NewsletterSendResponse.md)
- [NewsletterStatus](docs/NewsletterStatus.md)
- [NewsletterSubscribeRequest](docs/NewsletterSubscribeRequest.md)
- [NewsletterSummary](docs/NewsletterSummary.md)
- [PatchLicenseRequest](docs/PatchLicenseRequest.md)
- [PlaidTransactionsSyncResult](docs/PlaidTransactionsSyncResult.md)
- [PlaidWebhookResponse](docs/PlaidWebhookResponse.md)
- [ProductID](docs/ProductID.md)
- [RuntimeActivateRequest](docs/RuntimeActivateRequest.md)
- [RuntimeActivateResponse](docs/RuntimeActivateResponse.md)
- [RuntimeActivationDaily](docs/RuntimeActivationDaily.md)
- [RuntimeActivationHistoryListResponse](docs/RuntimeActivationHistoryListResponse.md)
- [RuntimeActivationOverviewResponse](docs/RuntimeActivationOverviewResponse.md)
- [RuntimeCommandCreateRequest](docs/RuntimeCommandCreateRequest.md)
- [RuntimeCommandCreateResponse](docs/RuntimeCommandCreateResponse.md)
- [RuntimeCommandDelivery](docs/RuntimeCommandDelivery.md)
- [RuntimeCommandDeliveryListResponse](docs/RuntimeCommandDeliveryListResponse.md)
- [RuntimeCommandListResponse](docs/RuntimeCommandListResponse.md)
- [RuntimeCommandStatus](docs/RuntimeCommandStatus.md)
- [RuntimeCommandSummary](docs/RuntimeCommandSummary.md)
- [RuntimeCommandTarget](docs/RuntimeCommandTarget.md)
- [RuntimeCommandTargetScope](docs/RuntimeCommandTargetScope.md)
- [RuntimeCommandType](docs/RuntimeCommandType.md)
- [RuntimeInstall](docs/RuntimeInstall.md)
- [RuntimeInstanceListResponse](docs/RuntimeInstanceListResponse.md)
- [RuntimeInstanceStatus](docs/RuntimeInstanceStatus.md)
- [RuntimeRenewResponse](docs/RuntimeRenewResponse.md)
- [RuntimeTransfer](docs/RuntimeTransfer.md)
- [RuntimeUsageBatchRequest](docs/RuntimeUsageBatchRequest.md)
- [RuntimeUsageBatchResponse](docs/RuntimeUsageBatchResponse.md)
- [RuntimeUsageEvent](docs/RuntimeUsageEvent.md)
- [SubscriberListResponse](docs/SubscriberListResponse.md)
- [SubscriberMailingListMembership](docs/SubscriberMailingListMembership.md)
- [SubscriberSummary](docs/SubscriberSummary.md)
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
- Generator version: `7.22.0`
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
