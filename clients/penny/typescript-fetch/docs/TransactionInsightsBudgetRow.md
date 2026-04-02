
# TransactionInsightsBudgetRow


## Properties

Name | Type
------------ | -------------
`categoryId` | string
`categoryName` | string
`parentCategoryId` | string
`parentCategoryName` | string
`planned` | number
`spent` | number
`remaining` | number
`utilizationPct` | number

## Example

```typescript
import type { TransactionInsightsBudgetRow } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "categoryId": null,
  "categoryName": null,
  "parentCategoryId": null,
  "parentCategoryName": null,
  "planned": null,
  "spent": null,
  "remaining": null,
  "utilizationPct": null,
} satisfies TransactionInsightsBudgetRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionInsightsBudgetRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


