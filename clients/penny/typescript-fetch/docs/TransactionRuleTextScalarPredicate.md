
# TransactionRuleTextScalarPredicate


## Properties

Name | Type
------------ | -------------
`field` | [TransactionRuleTextField](TransactionRuleTextField.md)
`operator` | string
`value` | string
`caseSensitive` | boolean

## Example

```typescript
import type { TransactionRuleTextScalarPredicate } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "field": null,
  "operator": null,
  "value": null,
  "caseSensitive": null,
} satisfies TransactionRuleTextScalarPredicate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionRuleTextScalarPredicate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


