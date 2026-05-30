
# RuntimeCommandTarget


## Properties

Name | Type
------------ | -------------
`scope` | [RuntimeCommandTargetScope](RuntimeCommandTargetScope.md)
`productId` | [ProductID](ProductID.md)
`licenseId` | string
`installId` | string

## Example

```typescript
import type { RuntimeCommandTarget } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "scope": null,
  "productId": null,
  "licenseId": null,
  "installId": null,
} satisfies RuntimeCommandTarget

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeCommandTarget
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


