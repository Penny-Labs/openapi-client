
# ConsoleCheckout


## Properties

Name | Type
------------ | -------------
`id` | string
`licenseId` | string
`stripeCheckoutSessionId` | string
`plan` | string
`email` | string
`expiresAt` | Date
`completedAt` | Date
`claimedAt` | Date
`stripeCustomerId` | string
`stripeSubscriptionId` | string
`status` | string
`dateAdded` | Date
`dateModified` | Date

## Example

```typescript
import type { ConsoleCheckout } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "licenseId": null,
  "stripeCheckoutSessionId": null,
  "plan": null,
  "email": null,
  "expiresAt": null,
  "completedAt": null,
  "claimedAt": null,
  "stripeCustomerId": null,
  "stripeSubscriptionId": null,
  "status": null,
  "dateAdded": null,
  "dateModified": null,
} satisfies ConsoleCheckout

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConsoleCheckout
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


