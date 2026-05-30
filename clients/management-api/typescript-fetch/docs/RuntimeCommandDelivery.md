
# RuntimeCommandDelivery


## Properties

Name | Type
------------ | -------------
`id` | string
`commandId` | string
`licenseId` | string
`productId` | [ProductID](ProductID.md)
`installId` | string
`status` | [RuntimeCommandStatus](RuntimeCommandStatus.md)
`attemptCount` | number
`lastAttemptAt` | Date
`nextAttemptAt` | Date
`ackedAt` | Date
`receivedAt` | Date
`ackDetails` | { [key: string]: any; }
`lastError` | string
`dateAdded` | Date
`dateModified` | Date

## Example

```typescript
import type { RuntimeCommandDelivery } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "commandId": null,
  "licenseId": null,
  "productId": null,
  "installId": null,
  "status": null,
  "attemptCount": null,
  "lastAttemptAt": null,
  "nextAttemptAt": null,
  "ackedAt": null,
  "receivedAt": null,
  "ackDetails": null,
  "lastError": null,
  "dateAdded": null,
  "dateModified": null,
} satisfies RuntimeCommandDelivery

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeCommandDelivery
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


