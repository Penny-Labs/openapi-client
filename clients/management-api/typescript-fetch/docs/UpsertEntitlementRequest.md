
# UpsertEntitlementRequest


## Properties

Name | Type
------------ | -------------
`productId` | string
`status` | string
`scopes` | string
`capTransactionsConnectedAccounts` | number
`capRecurringConnectedAccounts` | number
`capTransactionsRefreshCalls` | number

## Example

```typescript
import type { UpsertEntitlementRequest } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "productId": null,
  "status": null,
  "scopes": null,
  "capTransactionsConnectedAccounts": null,
  "capRecurringConnectedAccounts": null,
  "capTransactionsRefreshCalls": null,
} satisfies UpsertEntitlementRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpsertEntitlementRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


