# InstitutionsApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listInstitutions**](InstitutionsApi.md#listinstitutions) | **GET** /v1/institutions/ | List institutions |



## listInstitutions

> Array&lt;Institution&gt; listInstitutions()

List institutions

### Example

```ts
import {
  Configuration,
  InstitutionsApi,
} from '@penny/openapi-management-api-client';
import type { ListInstitutionsRequest } from '@penny/openapi-management-api-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-management-api-client SDK...");
  const api = new InstitutionsApi();

  try {
    const data = await api.listInstitutions();
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

[**Array&lt;Institution&gt;**](Institution.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Institution list |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

