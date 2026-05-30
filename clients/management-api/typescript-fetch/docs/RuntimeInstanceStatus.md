
# RuntimeInstanceStatus


## Properties

Name | Type
------------ | -------------
`id` | string
`licenseId` | string
`productId` | [ProductID](ProductID.md)
`installId` | string
`status` | string
`activatedAt` | Date
`transferredAt` | Date
`lastSeenAt` | Date
`lastSeenIp` | string
`connected` | boolean
`clientId` | string
`connectedAt` | Date
`disconnectedAt` | Date

## Example

```typescript
import type { RuntimeInstanceStatus } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "licenseId": null,
  "productId": null,
  "installId": null,
  "status": null,
  "activatedAt": null,
  "transferredAt": null,
  "lastSeenAt": null,
  "lastSeenIp": null,
  "connected": null,
  "clientId": null,
  "connectedAt": null,
  "disconnectedAt": null,
} satisfies RuntimeInstanceStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeInstanceStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


