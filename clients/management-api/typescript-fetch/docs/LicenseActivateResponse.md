
# LicenseActivateResponse


## Properties

Name | Type
------------ | -------------
`licenseId` | string
`status` | [LicenseStatus](LicenseStatus.md)
`activationId` | string
`leaseExpiresAt` | Date
`transferred` | boolean
`warning` | string

## Example

```typescript
import type { LicenseActivateResponse } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "licenseId": null,
  "status": null,
  "activationId": null,
  "leaseExpiresAt": null,
  "transferred": null,
  "warning": null,
} satisfies LicenseActivateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LicenseActivateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


