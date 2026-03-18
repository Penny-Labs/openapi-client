
# RuntimeActivateResponse


## Properties

Name | Type
------------ | -------------
`licenseId` | string
`productId` | string
`installId` | string
`leaseToken` | string
`leaseExpiresAt` | Date
`scopes` | Array&lt;string&gt;
`caps` | { [key: string]: number; }
`transferred` | boolean
`warning` | string

## Example

```typescript
import type { RuntimeActivateResponse } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "licenseId": null,
  "productId": null,
  "installId": null,
  "leaseToken": null,
  "leaseExpiresAt": null,
  "scopes": null,
  "caps": null,
  "transferred": null,
  "warning": null,
} satisfies RuntimeActivateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeActivateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


