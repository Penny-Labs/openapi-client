
# TransactionRuleAction

Canonical transaction rule action returned by Penny. Name-based references are resolved to IDs.

## Properties

Name | Type
------------ | -------------
`type` | [TransactionRuleActionType](TransactionRuleActionType.md)
`categoryId` | string
`tagIds` | Array&lt;string&gt;

## Example

```typescript
import type { TransactionRuleAction } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "categoryId": null,
  "tagIds": null,
} satisfies TransactionRuleAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionRuleAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


