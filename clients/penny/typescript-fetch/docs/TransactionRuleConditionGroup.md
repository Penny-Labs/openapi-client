
# TransactionRuleConditionGroup


## Properties

Name | Type
------------ | -------------
`operator` | [TransactionRuleGroupOperator](TransactionRuleGroupOperator.md)
`children` | [Array&lt;TransactionRuleConditionNode&gt;](TransactionRuleConditionNode.md)

## Example

```typescript
import type { TransactionRuleConditionGroup } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "operator": null,
  "children": null,
} satisfies TransactionRuleConditionGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionRuleConditionGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


