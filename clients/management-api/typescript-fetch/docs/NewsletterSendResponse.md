
# NewsletterSendResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`mailingListId` | string
`mailingList` | string
`recipientCount` | number
`sentCount` | number
`failedCount` | number
`pendingCount` | number
`status` | [NewsletterStatus](NewsletterStatus.md)
`datePublished` | Date

## Example

```typescript
import type { NewsletterSendResponse } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "mailingListId": null,
  "mailingList": null,
  "recipientCount": null,
  "sentCount": null,
  "failedCount": null,
  "pendingCount": null,
  "status": null,
  "datePublished": null,
} satisfies NewsletterSendResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewsletterSendResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


