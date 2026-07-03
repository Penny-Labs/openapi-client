
# TransactionRuleActionInput

Transaction rule action input. Server validation applies action-specific requirements: set_category requires exactly one of category_id or category_name; clear_category does not accept category or tag references; add_tags and remove_tags require at least one tag reference; replace_tags accepts the provided tag references and may be empty to clear all tags. 

## Properties

Name | Type
------------ | -------------
`type` | [TransactionRuleActionType](TransactionRuleActionType.md)
`categoryId` | string
`categoryName` | string
`tagIds` | Array&lt;string&gt;
`tagNames` | Array&lt;string&gt;

## Example

```typescript
import type { TransactionRuleActionInput } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "categoryId": null,
  "categoryName": null,
  "tagIds": null,
  "tagNames": null,
} satisfies TransactionRuleActionInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionRuleActionInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


