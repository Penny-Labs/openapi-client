
# TransactionListResponse


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;Transaction&gt;](Transaction.md)
`total` | number
`nextCursor` | string

## Example

```typescript
import type { TransactionListResponse } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "total": null,
  "nextCursor": null,
} satisfies TransactionListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


