
# ConsoleConnection


## Properties

Name | Type
------------ | -------------
`id` | string
`licenseId` | string
`productId` | string
`installId` | string
`status` | string
`statusMessage` | string
`institutionId` | string
`institutionName` | string
`providerErrorCode` | string
`consentExpiresAt` | Date
`lastSynced` | Date
`dateAdded` | Date
`dateModified` | Date
`accountCount` | number
`transactionCount` | number

## Example

```typescript
import type { ConsoleConnection } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "licenseId": null,
  "productId": null,
  "installId": null,
  "status": null,
  "statusMessage": null,
  "institutionId": null,
  "institutionName": null,
  "providerErrorCode": null,
  "consentExpiresAt": null,
  "lastSynced": null,
  "dateAdded": null,
  "dateModified": null,
  "accountCount": null,
  "transactionCount": null,
} satisfies ConsoleConnection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConsoleConnection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


