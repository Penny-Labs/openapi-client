
# LicenseValidateResponse


## Properties

Name | Type
------------ | -------------
`valid` | boolean
`reason` | string
`licenseId` | string
`status` | string
`leaseExpiresAt` | Date

## Example

```typescript
import type { LicenseValidateResponse } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "valid": null,
  "reason": null,
  "licenseId": null,
  "status": null,
  "leaseExpiresAt": null,
} satisfies LicenseValidateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LicenseValidateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


