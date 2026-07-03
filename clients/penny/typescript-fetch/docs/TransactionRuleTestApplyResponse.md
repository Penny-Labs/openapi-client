
# TransactionRuleTestApplyResponse


## Properties

Name | Type
------------ | -------------
`ruleId` | string
`matchedCount` | number
`scannedCount` | number
`items` | [Array&lt;TransactionRuleTestApplyMatch&gt;](TransactionRuleTestApplyMatch.md)
`limit` | number
`truncated` | boolean

## Example

```typescript
import type { TransactionRuleTestApplyResponse } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "ruleId": null,
  "matchedCount": null,
  "scannedCount": null,
  "items": null,
  "limit": null,
  "truncated": null,
} satisfies TransactionRuleTestApplyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionRuleTestApplyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


