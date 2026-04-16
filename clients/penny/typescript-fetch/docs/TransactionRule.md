
# TransactionRule


## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`dateAdded` | Date
`dateModified` | Date
`name` | string
`status` | [TransactionRuleStatus](TransactionRuleStatus.md)
`priority` | number
`sourceScope` | [TransactionRuleSourceScope](TransactionRuleSourceScope.md)
`stopProcessing` | boolean
`dslVersion` | number
`conditionTree` | [TransactionRuleConditionNode](TransactionRuleConditionNode.md)
`actions` | [Array&lt;TransactionRuleAction&gt;](TransactionRuleAction.md)

## Example

```typescript
import type { TransactionRule } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "dateAdded": null,
  "dateModified": null,
  "name": null,
  "status": null,
  "priority": null,
  "sourceScope": null,
  "stopProcessing": null,
  "dslVersion": null,
  "conditionTree": null,
  "actions": null,
} satisfies TransactionRule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionRule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


