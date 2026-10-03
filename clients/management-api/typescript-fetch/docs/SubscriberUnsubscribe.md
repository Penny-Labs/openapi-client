
# SubscriberUnsubscribe


## Properties

Name | Type
------------ | -------------
`id` | string
`subscriberId` | string
`mailingListId` | string
`mailingList` | string
`reason` | string
`dateAdded` | Date

## Example

```typescript
import type { SubscriberUnsubscribe } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "subscriberId": null,
  "mailingListId": null,
  "mailingList": null,
  "reason": null,
  "dateAdded": null,
} satisfies SubscriberUnsubscribe

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscriberUnsubscribe
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


