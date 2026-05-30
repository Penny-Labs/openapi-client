
# ManagedAccount


## Properties

Name | Type
------------ | -------------
`id` | string
`itemId` | string
`provider` | string
`providerAccountId` | string
`institutionId` | string
`institutionName` | string
`name` | string
`officialName` | string
`mask` | string
`type` | string
`subtype` | string
`balanceAvailable` | number
`balanceCurrent` | number
`balanceLimit` | number
`balanceIsoCurrencyCode` | string
`balanceUnofficialCurrencyCode` | string
`balanceLastUpdatedAt` | Date
`selected` | boolean
`dateAdded` | Date
`dateModified` | Date

## Example

```typescript
import type { ManagedAccount } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "itemId": null,
  "provider": plaid,
  "providerAccountId": null,
  "institutionId": null,
  "institutionName": null,
  "name": null,
  "officialName": null,
  "mask": null,
  "type": null,
  "subtype": null,
  "balanceAvailable": null,
  "balanceCurrent": null,
  "balanceLimit": null,
  "balanceIsoCurrencyCode": null,
  "balanceUnofficialCurrencyCode": null,
  "balanceLastUpdatedAt": null,
  "selected": null,
  "dateAdded": null,
  "dateModified": null,
} satisfies ManagedAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ManagedAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


