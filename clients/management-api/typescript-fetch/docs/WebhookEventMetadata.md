
# WebhookEventMetadata


## Properties

Name | Type
------------ | -------------
`id` | string
`endpointId` | string
`productId` | string
`licenseId` | string
`provider` | string
`eventType` | string
`providerDeliveryId` | string
`payloadSize` | number
`signatureVerified` | boolean
`status` | string
`receivedAt` | Date

## Example

```typescript
import type { WebhookEventMetadata } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "endpointId": null,
  "productId": null,
  "licenseId": null,
  "provider": null,
  "eventType": null,
  "providerDeliveryId": null,
  "payloadSize": null,
  "signatureVerified": null,
  "status": null,
  "receivedAt": null,
} satisfies WebhookEventMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookEventMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


