
# ConsoleSubscription


## Properties

Name | Type
------------ | -------------
`id` | string
`licenseId` | string
`stripeCustomerId` | string
`email` | string
`plan` | string
`status` | string
`currentPeriodEnd` | Date
`cancelAtPeriodEnd` | boolean
`dateAdded` | Date
`dateModified` | Date

## Example

```typescript
import type { ConsoleSubscription } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "licenseId": null,
  "stripeCustomerId": null,
  "email": null,
  "plan": null,
  "status": null,
  "currentPeriodEnd": null,
  "cancelAtPeriodEnd": null,
  "dateAdded": null,
  "dateModified": null,
} satisfies ConsoleSubscription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConsoleSubscription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


