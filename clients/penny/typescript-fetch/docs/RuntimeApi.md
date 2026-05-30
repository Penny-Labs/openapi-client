# RuntimeApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getRuntimeEntitlementSnapshot**](RuntimeApi.md#getRuntimeEntitlementSnapshot) | **GET** /v1/runtime/entitlement | Get the local runtime entitlement snapshot |

# **getRuntimeEntitlementSnapshot**
> RuntimeEntitlementSnapshotResponse getRuntimeEntitlementSnapshot()

Get the local runtime entitlement snapshot

### Example

```typescript
import { RuntimeApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new RuntimeApi(configuration);

const { status, data } = await apiInstance.getRuntimeEntitlementSnapshotRaw();
```

### Parameters
This endpoint does not need any parameter.

### Return type

**RuntimeEntitlementSnapshotResponse**

### Authorization

[SessionCookieAuth](../README.md#SessionCookieAuth)
