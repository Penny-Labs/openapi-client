
# TransactionCreateRequest


## Properties

Name | Type
------------ | -------------
`transactionId` | string
`datePosted` | Date
`originalDescription` | string
`description` | string
`amount` | number
`pending` | boolean
`isoCurrencyCode` | string
`unofficialCurrencyCode` | string
`paymentChannel` | [TransactionPaymentChannel](TransactionPaymentChannel.md)
`notes` | string

## Example

```typescript
import type { TransactionCreateRequest } from '@penny/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "transactionId": null,
  "datePosted": null,
  "originalDescription": null,
  "description": null,
  "amount": null,
  "pending": null,
  "isoCurrencyCode": null,
  "unofficialCurrencyCode": null,
  "paymentChannel": null,
  "notes": null,
} satisfies TransactionCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


