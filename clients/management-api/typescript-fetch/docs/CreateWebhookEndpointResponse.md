
# CreateWebhookEndpointResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`productId` | string
`licenseId` | string
`provider` | string
`name` | string
`allowUnsigned` | boolean
`status` | string
`dateAdded` | Date
`dateModified` | Date
`dateDisabled` | Date
`endpointToken` | string

## Example

```typescript
import type { CreateWebhookEndpointResponse } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "productId": null,
  "licenseId": null,
  "provider": null,
  "name": null,
  "allowUnsigned": null,
  "status": null,
  "dateAdded": null,
  "dateModified": null,
  "dateDisabled": null,
  "endpointToken": null,
} satisfies CreateWebhookEndpointResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateWebhookEndpointResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


