
# TransactionRuleTestApplyMatch


## Properties

Name | Type
------------ | -------------
`transactionId` | string
`bankAccountId` | string
`effectiveDate` | Date
`description` | string
`amount` | number
`currentCategoryId` | string
`proposedCategoryId` | string
`currentTagIds` | Array&lt;string&gt;
`proposedTagIds` | Array&lt;string&gt;
`appliedActionTypes` | [Array&lt;TransactionRuleActionType&gt;](TransactionRuleActionType.md)
`skippedReasons` | Array&lt;string&gt;
`conflictReasons` | Array&lt;string&gt;

## Example

```typescript
import type { TransactionRuleTestApplyMatch } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "transactionId": null,
  "bankAccountId": null,
  "effectiveDate": null,
  "description": null,
  "amount": null,
  "currentCategoryId": null,
  "proposedCategoryId": null,
  "currentTagIds": null,
  "proposedTagIds": null,
  "appliedActionTypes": null,
  "skippedReasons": null,
  "conflictReasons": null,
} satisfies TransactionRuleTestApplyMatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionRuleTestApplyMatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


