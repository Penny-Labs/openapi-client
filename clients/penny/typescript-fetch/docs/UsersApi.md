# UsersApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUser**](UsersApi.md#createuser) | **POST** /v1/users | Create user |
| [**getUserByID**](UsersApi.md#getuserbyid) | **GET** /v1/users/{userID} | Get user by ID (self only) |
| [**listUsers**](UsersApi.md#listusers) | **GET** /v1/users | List users (admin only) |



## createUser

> User createUser(userCreateRequest)

Create user

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@penny-labs/openapi-penny-client';
import type { CreateUserRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const api = new UsersApi();

  const body = {
    // UserCreateRequest
    userCreateRequest: ...,
  } satisfies CreateUserRequest;

  try {
    const data = await api.createUser(body);
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
| **userCreateRequest** | [UserCreateRequest](UserCreateRequest.md) |  | |

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | User created |  -  |
| **400** | Bad request |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserByID

> User getUserByID(userID)

Get user by ID (self only)

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@penny-labs/openapi-penny-client';
import type { GetUserByIDRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // string
    userID: userID_example,
  } satisfies GetUserByIDRequest;

  try {
    const data = await api.getUserByID(body);
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
| **userID** | `string` |  | [Defaults to `undefined`] |

### Return type

[**User**](User.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User found |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listUsers

> UserListResponse listUsers(q, status, limit, cursor)

List users (admin only)

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@penny-labs/openapi-penny-client';
import type { ListUsersRequest } from '@penny-labs/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny-labs/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new UsersApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // string | Comma-separated user status filters. (optional)
    status: status_example,
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies ListUsersRequest;

  try {
    const data = await api.listUsers(body);
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
| **status** | `string` | Comma-separated user status filters. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**UserListResponse**](UserListResponse.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User page |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

