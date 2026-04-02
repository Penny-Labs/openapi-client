
# BalanceListResponse


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;Balance&gt;](Balance.md)
`total` | number
`nextCursor` | string

## Example

```typescript
import type { BalanceListResponse } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "total": null,
  "nextCursor": null,
} satisfies BalanceListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BalanceListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


