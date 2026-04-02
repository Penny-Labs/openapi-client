
# Transaction


## Properties

Name | Type
------------ | -------------
`id` | string
`bankAccountId` | string
`transactionId` | string
`dateAdded` | Date
`dateModified` | Date
`datePosted` | Date
`originalDescription` | string
`description` | string
`amount` | number
`pending` | boolean
`isoCurrencyCode` | string
`unofficialCurrencyCode` | string
`paymentChannel` | [TransactionPaymentChannel](TransactionPaymentChannel.md)
`merchantId` | string
`locationId` | string
`notes` | string
`categoryId` | string
`tagIds` | Array&lt;string&gt;

## Example

```typescript
import type { Transaction } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "bankAccountId": null,
  "transactionId": null,
  "dateAdded": null,
  "dateModified": null,
  "datePosted": null,
  "originalDescription": null,
  "description": null,
  "amount": null,
  "pending": null,
  "isoCurrencyCode": null,
  "unofficialCurrencyCode": null,
  "paymentChannel": null,
  "merchantId": null,
  "locationId": null,
  "notes": null,
  "categoryId": null,
  "tagIds": null,
} satisfies Transaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Transaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


