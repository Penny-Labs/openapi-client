# InstitutionsApi

All URIs are relative to *http://localhost:8090*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listInstitutions**](InstitutionsApi.md#listinstitutions) | **GET** /v1/institutions/ | List institutions |



## listInstitutions

> InstitutionListResponse listInstitutions(q, limit, cursor)

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

  const body = {
    // string (optional)
    q: q_example,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListInstitutionsRequest;

  try {
    const data = await api.listInstitutions(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**InstitutionListResponse**](InstitutionListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Institution list |  -  |
| **400** | Bad request |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

