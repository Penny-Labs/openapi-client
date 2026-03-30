# AuthApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSessionUser**](AuthApi.md#getsessionuser) | **GET** /v1/auth/me | Get current authenticated user |
| [**signin**](AuthApi.md#signin) | **POST** /v1/auth/signin | Authenticate credentials and start session |
| [**signout**](AuthApi.md#signout) | **POST** /v1/auth/signout | Revoke current session token and clear session cookie |
| [**signup**](AuthApi.md#signup) | **POST** /v1/auth/signup | Create local credentials and start session |



## getSessionUser

> User getSessionUser()

Get current authenticated user

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@penny/openapi-penny-client';
import type { GetSessionUserRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AuthApi(config);

  try {
    const data = await api.getSessionUser();
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

[**User**](User.md)

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Session user found |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## signin

> SessionAuthResponse signin(authCredentialRequest)

Authenticate credentials and start session

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@penny/openapi-penny-client';
import type { SigninRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const api = new AuthApi();

  const body = {
    // AuthCredentialRequest
    authCredentialRequest: ...,
  } satisfies SigninRequest;

  try {
    const data = await api.signin(body);
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
| **authCredentialRequest** | [AuthCredentialRequest](AuthCredentialRequest.md) |  | |

### Return type

[**SessionAuthResponse**](SessionAuthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signin succeeded |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## signout

> SignoutResponse signout()

Revoke current session token and clear session cookie

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@penny/openapi-penny-client';
import type { SignoutRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const api = new AuthApi();

  try {
    const data = await api.signout();
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

[**SignoutResponse**](SignoutResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signout succeeded |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## signup

> SessionAuthResponse signup(authCredentialRequest)

Create local credentials and start session

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@penny/openapi-penny-client';
import type { SignupRequest } from '@penny/openapi-penny-client';

async function example() {
  console.log("🚀 Testing @penny/openapi-penny-client SDK...");
  const api = new AuthApi();

  const body = {
    // AuthCredentialRequest
    authCredentialRequest: ...,
  } satisfies SignupRequest;

  try {
    const data = await api.signup(body);
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
| **authCredentialRequest** | [AuthCredentialRequest](AuthCredentialRequest.md) |  | |

### Return type

[**SessionAuthResponse**](SessionAuthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Signup succeeded |  -  |
| **400** | Bad request |  -  |
| **409** | Conflict |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

