
# WebhookDeliveryMetadata


## Properties

Name | Type
------------ | -------------
`id` | string
`eventId` | string
`endpointId` | string
`destinationId` | string
`productId` | string
`licenseId` | string
`status` | string
`attemptCount` | number
`nextAttemptAt` | Date
`lastAttemptAt` | Date
`responseStatus` | number
`lastError` | string
`dateAdded` | Date
`dateModified` | Date

## Example

```typescript
import type { WebhookDeliveryMetadata } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "eventId": null,
  "endpointId": null,
  "destinationId": null,
  "productId": null,
  "licenseId": null,
  "status": null,
  "attemptCount": null,
  "nextAttemptAt": null,
  "lastAttemptAt": null,
  "responseStatus": null,
  "lastError": null,
  "dateAdded": null,
  "dateModified": null,
} satisfies WebhookDeliveryMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookDeliveryMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


