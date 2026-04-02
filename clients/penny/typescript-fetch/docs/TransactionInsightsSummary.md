
# TransactionInsightsSummary


## Properties

Name | Type
------------ | -------------
`planned` | number
`spent` | number
`remaining` | number
`income` | number

## Example

```typescript
import type { TransactionInsightsSummary } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "planned": null,
  "spent": null,
  "remaining": null,
  "income": null,
} satisfies TransactionInsightsSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionInsightsSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


