
# SupportOverrideGrantRequest


## Properties

Name | Type
------------ | -------------
`productId` | [ProductID](ProductID.md)
`reason` | string
`durationDays` | number

## Example

```typescript
import type { SupportOverrideGrantRequest } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "productId": null,
  "reason": null,
  "durationDays": null,
} satisfies SupportOverrideGrantRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SupportOverrideGrantRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
