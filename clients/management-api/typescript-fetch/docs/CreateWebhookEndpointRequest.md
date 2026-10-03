
# CreateWebhookEndpointRequest


## Properties

Name | Type
------------ | -------------
`productId` | [ProductID](ProductID.md)
`licenseId` | string
`provider` | string
`name` | string
`secret` | string
`allowUnsigned` | boolean

## Example

```typescript
import type { CreateWebhookEndpointRequest } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "productId": null,
  "licenseId": null,
  "provider": null,
  "name": null,
  "secret": null,
  "allowUnsigned": null,
} satisfies CreateWebhookEndpointRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateWebhookEndpointRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


