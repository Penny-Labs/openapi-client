
# TransactionRulePredicate


## Properties

Name | Type
------------ | -------------
`field` | [TransactionRuleDateField](TransactionRuleDateField.md)
`operator` | string
`value` | [Array&lt;TransactionRuleDateValue&gt;](TransactionRuleDateValue.md)
`caseSensitive` | boolean

## Example

```typescript
import type { TransactionRulePredicate } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "field": null,
  "operator": null,
  "value": null,
  "caseSensitive": null,
} satisfies TransactionRulePredicate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionRulePredicate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


