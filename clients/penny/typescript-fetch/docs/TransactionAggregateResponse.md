
# TransactionAggregateResponse


## Properties

Name | Type
------------ | -------------
`totalSpent` | number
`income` | number
`netFlow` | number
`pendingCount` | number
`spendingByCategory` | [Array&lt;TransactionSpendingByCategoryPoint&gt;](TransactionSpendingByCategoryPoint.md)
`spendingByDay` | [Array&lt;TransactionSpendingByDayPoint&gt;](TransactionSpendingByDayPoint.md)

## Example

```typescript
import type { TransactionAggregateResponse } from '@penny/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "totalSpent": null,
  "income": null,
  "netFlow": null,
  "pendingCount": null,
  "spendingByCategory": null,
  "spendingByDay": null,
} satisfies TransactionAggregateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionAggregateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


