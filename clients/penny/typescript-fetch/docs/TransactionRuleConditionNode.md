
# TransactionRuleConditionNode


## Properties

Name | Type
------------ | -------------
`kind` | any
`group` | [TransactionRuleConditionGroup](TransactionRuleConditionGroup.md)
`predicate` | [TransactionRulePredicate](TransactionRulePredicate.md)

## Example

```typescript
import type { TransactionRuleConditionNode } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "kind": null,
  "group": null,
  "predicate": null,
} satisfies TransactionRuleConditionNode

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionRuleConditionNode
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


