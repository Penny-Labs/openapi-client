# ExportsApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTransactionExport**](ExportsApi.md#createtransactionexportoperation) | **POST** /v1/exports/transactions | Create a transactions export job |
| [**downloadTransactionExport**](ExportsApi.md#downloadtransactionexport) | **GET** /v1/exports/transactions/{exportID}/download | Download a completed transaction export |
| [**getTransactionExportByID**](ExportsApi.md#gettransactionexportbyid) | **GET** /v1/exports/transactions/{exportID} | Get transaction export job status |



## createTransactionExport

> TransactionExportJob createTransactionExport(createTransactionExportRequest)

Create a transactions export job

### Example

```ts
import {
  Configuration,
  ExportsApi,
} from '@penny-labs/openapi-penny-client';
import type { CreateTransactionExportOperationRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ExportsApi(config);

  const body = {
    // CreateTransactionExportRequest
    createTransactionExportRequest: ...,
  } satisfies CreateTransactionExportOperationRequest;

  try {
    const data = await api.createTransactionExport(body);
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
| **createTransactionExportRequest** | [CreateTransactionExportRequest](CreateTransactionExportRequest.md) |  | |

### Return type

[**TransactionExportJob**](TransactionExportJob.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Export job created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadTransactionExport

> Blob downloadTransactionExport(exportID)

Download a completed transaction export

### Example

```ts
import {
  Configuration,
  ExportsApi,
} from '@penny-labs/openapi-penny-client';
import type { DownloadTransactionExportRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ExportsApi(config);

  const body = {
    // string
    exportID: exportID_example,
  } satisfies DownloadTransactionExportRequest;

  try {
    const data = await api.downloadTransactionExport(body);
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
| **exportID** | `string` |  | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Export file stream |  * Content-Disposition - Attachment filename. <br>  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransactionExportByID

> TransactionExportJob getTransactionExportByID(exportID)

Get transaction export job status

### Example

```ts
import {
  Configuration,
  ExportsApi,
} from '@penny-labs/openapi-penny-client';
import type { GetTransactionExportByIDRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ExportsApi(config);

  const body = {
    // string
    exportID: exportID_example,
  } satisfies GetTransactionExportByIDRequest;

  try {
    const data = await api.getTransactionExportByID(body);
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
| **exportID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TransactionExportJob**](TransactionExportJob.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Export job |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

