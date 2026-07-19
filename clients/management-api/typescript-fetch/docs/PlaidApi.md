# PlaidApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**receivePlaidWebhook**](PlaidApi.md#receiveplaidwebhook) | **POST** /v1/plaid/webhook | Receive a verified Plaid webhook |

## receivePlaidWebhook

> PlaidWebhookResponse receivePlaidWebhook(plaidVerification, plaidWebhookRequest)

Verifies the `Plaid-Verification` JWT and queues a managed transaction sync for supported events.

### Authorization

No application authentication. The Plaid signature is required.

### Return type

[**PlaidWebhookResponse**](PlaidWebhookResponse.md)

[[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
