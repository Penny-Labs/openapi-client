
# TransactionPatchRequest


## Properties

Name | Type
------------ | -------------
`datePosted` | Date
`originalDescription` | string
`description` | string
`amount` | number
`pending` | boolean
`isoCurrencyCode` | string
`unofficialCurrencyCode` | string
`paymentChannel` | [TransactionPaymentChannel](TransactionPaymentChannel.md)
`notes` | string
`categoryId` | string

## Example

```typescript
import type { TransactionPatchRequest } from '@penny/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "datePosted": null,
  "originalDescription": null,
  "description": null,
  "amount": null,
  "pending": null,
  "isoCurrencyCode": null,
  "unofficialCurrencyCode": null,
  "paymentChannel": null,
  "notes": null,
  "categoryId": null,
} satisfies TransactionPatchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionPatchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


