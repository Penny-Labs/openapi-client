
# BillingSubscriptionSummary


## Properties

Name | Type
------------ | -------------
`configured` | boolean
`stripeCustomerId` | string
`stripeSubscriptionId` | string
`email` | string
`plan` | string
`status` | string
`currentPeriodEnd` | Date
`cancelAtPeriodEnd` | boolean
`updatedAt` | Date

## Example

```typescript
import type { BillingSubscriptionSummary } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "configured": null,
  "stripeCustomerId": null,
  "stripeSubscriptionId": null,
  "email": null,
  "plan": null,
  "status": null,
  "currentPeriodEnd": null,
  "cancelAtPeriodEnd": null,
  "updatedAt": null,
} satisfies BillingSubscriptionSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BillingSubscriptionSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
