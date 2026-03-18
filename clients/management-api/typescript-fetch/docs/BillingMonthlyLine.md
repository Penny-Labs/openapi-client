
# BillingMonthlyLine


## Properties

Name | Type
------------ | -------------
`id` | string
`billingMonth` | Date
`licenseId` | string
`productId` | string
`meterType` | string
`quantity` | number
`unitPriceUsd` | string
`amountUsd` | string
`currency` | string

## Example

```typescript
import type { BillingMonthlyLine } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "billingMonth": null,
  "licenseId": null,
  "productId": null,
  "meterType": null,
  "quantity": null,
  "unitPriceUsd": null,
  "amountUsd": null,
  "currency": null,
} satisfies BillingMonthlyLine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BillingMonthlyLine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


