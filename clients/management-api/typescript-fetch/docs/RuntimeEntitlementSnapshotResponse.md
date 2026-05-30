
# RuntimeEntitlementSnapshotResponse


## Properties

Name | Type
------------ | -------------
`licenseId` | string
`productId` | [ProductID](ProductID.md)
`installId` | string
`licenseStatus` | [LicenseStatus](LicenseStatus.md)
`entitlementStatus` | string
`scopes` | Array&lt;string&gt;
`caps` | [RuntimeEntitlementSnapshotResponseCaps](RuntimeEntitlementSnapshotResponseCaps.md)
`leaseExpiresAt` | Date

## Example

```typescript
import type { RuntimeEntitlementSnapshotResponse } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "licenseId": null,
  "productId": null,
  "installId": null,
  "licenseStatus": null,
  "entitlementStatus": null,
  "scopes": null,
  "caps": null,
  "leaseExpiresAt": null,
} satisfies RuntimeEntitlementSnapshotResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeEntitlementSnapshotResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


