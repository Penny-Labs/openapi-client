
# ManagedTransaction


## Properties

Name | Type
------------ | -------------
`id` | string
`itemId` | string
`provider` | string
`providerTransactionId` | string
`providerAccountId` | string
`transactionDate` | Date
`authorizedDate` | Date
`name` | string
`merchantName` | string
`amount` | number
`isoCurrencyCode` | string
`pending` | boolean
`removed` | boolean
`raw` | { [key: string]: any; }
`dateAdded` | Date
`dateModified` | Date

## Example

```typescript
import type { ManagedTransaction } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "itemId": null,
  "provider": plaid,
  "providerTransactionId": null,
  "providerAccountId": null,
  "transactionDate": null,
  "authorizedDate": null,
  "name": null,
  "merchantName": null,
  "amount": null,
  "isoCurrencyCode": null,
  "pending": null,
  "removed": null,
  "raw": null,
  "dateAdded": null,
  "dateModified": null,
} satisfies ManagedTransaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ManagedTransaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


