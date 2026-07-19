
# SupportOverrideResponse


## Properties

Name | Type
------------ | -------------
`licenseId` | string
`productId` | [ProductID](ProductID.md)
`expiresAt` | Date
`reason` | string

## Example

```typescript
import type { SupportOverrideResponse } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "licenseId": null,
  "productId": null,
  "expiresAt": null,
  "reason": null,
} satisfies SupportOverrideResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SupportOverrideResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
