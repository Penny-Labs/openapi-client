
# BudgetPeriod


## Properties

Name | Type
------------ | -------------
`id` | string
`budgetId` | string
`dateAdded` | Date
`dateModified` | Date
`startDate` | Date
`endDate` | Date
`targetAmount` | number
`status` | [BudgetPeriodStatus](BudgetPeriodStatus.md)
`allocations` | [Array&lt;BudgetPeriodAllocation&gt;](BudgetPeriodAllocation.md)

## Example

```typescript
import type { BudgetPeriod } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "budgetId": null,
  "dateAdded": null,
  "dateModified": null,
  "startDate": null,
  "endDate": null,
  "targetAmount": null,
  "status": null,
  "allocations": null,
} satisfies BudgetPeriod

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BudgetPeriod
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


