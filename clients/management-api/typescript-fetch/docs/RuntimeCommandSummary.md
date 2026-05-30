
# RuntimeCommandSummary


## Properties

Name | Type
------------ | -------------
`id` | string
`commandType` | [RuntimeCommandType](RuntimeCommandType.md)
`targetScope` | [RuntimeCommandTargetScope](RuntimeCommandTargetScope.md)
`productId` | [ProductID](ProductID.md)
`licenseId` | string
`installId` | string
`payload` | { [key: string]: any; }
`status` | [RuntimeCommandStatus](RuntimeCommandStatus.md)
`issuedAt` | Date
`expiresAt` | Date
`retryIntervalSeconds` | number
`maxAttempts` | number
`dateAdded` | Date
`dateModified` | Date
`totalTargets` | number
`ackedCount` | number
`sentCount` | number
`queuedCount` | number
`failedCount` | number
`expiredCount` | number

## Example

```typescript
import type { RuntimeCommandSummary } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "commandType": null,
  "targetScope": null,
  "productId": null,
  "licenseId": null,
  "installId": null,
  "payload": null,
  "status": null,
  "issuedAt": null,
  "expiresAt": null,
  "retryIntervalSeconds": null,
  "maxAttempts": null,
  "dateAdded": null,
  "dateModified": null,
  "totalTargets": null,
  "ackedCount": null,
  "sentCount": null,
  "queuedCount": null,
  "failedCount": null,
  "expiredCount": null,
} satisfies RuntimeCommandSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeCommandSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


