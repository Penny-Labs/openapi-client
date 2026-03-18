
# RuntimeActivateRequest


## Properties

Name | Type
------------ | -------------
`licenseKey` | string
`productId` | string
`installId` | string
`installPublicKey` | string
`challenge` | string
`challengeSignature` | string
`confirmTransfer` | boolean

## Example

```typescript
import type { RuntimeActivateRequest } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "licenseKey": null,
  "productId": null,
  "installId": null,
  "installPublicKey": null,
  "challenge": null,
  "challengeSignature": null,
  "confirmTransfer": null,
} satisfies RuntimeActivateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeActivateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


