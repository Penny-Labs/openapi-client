
# LicenseActivateRequest


## Properties

Name | Type
------------ | -------------
`licenseKey` | string
`installId` | string
`machineFingerprint` | string
`confirmTransfer` | boolean

## Example

```typescript
import type { LicenseActivateRequest } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "licenseKey": null,
  "installId": null,
  "machineFingerprint": null,
  "confirmTransfer": null,
} satisfies LicenseActivateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LicenseActivateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


