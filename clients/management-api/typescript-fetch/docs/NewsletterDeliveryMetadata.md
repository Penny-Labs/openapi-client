
# NewsletterDeliveryMetadata


## Properties

Name | Type
------------ | -------------
`id` | string
`newsletterId` | string
`subscriberId` | string
`name` | string
`email` | string
`status` | string
`dateAdded` | Date
`dateSent` | Date

## Example

```typescript
import type { NewsletterDeliveryMetadata } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "newsletterId": null,
  "subscriberId": null,
  "name": null,
  "email": null,
  "status": null,
  "dateAdded": null,
  "dateSent": null,
} satisfies NewsletterDeliveryMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewsletterDeliveryMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


