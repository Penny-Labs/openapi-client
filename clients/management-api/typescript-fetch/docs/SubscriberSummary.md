
# SubscriberSummary


## Properties

Name | Type
------------ | -------------
`id` | string
`dateAdded` | Date
`email` | string
`name` | string
`mailingLists` | [Array&lt;SubscriberMailingListMembership&gt;](SubscriberMailingListMembership.md)

## Example

```typescript
import type { SubscriberSummary } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "dateAdded": null,
  "email": null,
  "name": null,
  "mailingLists": null,
} satisfies SubscriberSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscriberSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


