
# Entitlement


## Properties

Name | Type
------------ | -------------
`id` | string
`licenseId` | string
`productId` | [ProductID](ProductID.md)
`status` | string
`plan` | string
`scopes` | string
`capManagedConnections` | number
`capTransactionsConnectedAccounts` | number
`capRecurringConnectedAccounts` | number
`capTransactionsRefreshCalls` | number
`overrideExpiresAt` | Date
`overrideReason` | string

## Example

```typescript
import type { Entitlement } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "licenseId": null,
  "productId": null,
  "status": null,
  "plan": null,
  "scopes": null,
  "capManagedConnections": null,
  "capTransactionsConnectedAccounts": null,
  "capRecurringConnectedAccounts": null,
  "capTransactionsRefreshCalls": null,
  "overrideExpiresAt": null,
  "overrideReason": null,
} satisfies Entitlement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Entitlement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
