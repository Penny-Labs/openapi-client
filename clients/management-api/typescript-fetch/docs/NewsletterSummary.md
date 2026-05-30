
# NewsletterSummary


## Properties

Name | Type
------------ | -------------
`id` | string
`mailingListId` | string
`mailingList` | string
`dateAdded` | Date
`datePublished` | Date
`dateCompleted` | Date
`status` | [NewsletterStatus](NewsletterStatus.md)
`title` | string
`content` | string
`recipientCount` | number
`sentCount` | number
`failedCount` | number
`pendingCount` | number

## Example

```typescript
import type { NewsletterSummary } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "mailingListId": null,
  "mailingList": null,
  "dateAdded": null,
  "datePublished": null,
  "dateCompleted": null,
  "status": null,
  "title": null,
  "content": null,
  "recipientCount": null,
  "sentCount": null,
  "failedCount": null,
  "pendingCount": null,
} satisfies NewsletterSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewsletterSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


