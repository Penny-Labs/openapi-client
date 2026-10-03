
# PatchWebhookDestinationRequest


## Properties

Name | Type
------------ | -------------
`url` | string
`maxAttempts` | number
`status` | string

## Example

```typescript
import type { PatchWebhookDestinationRequest } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "url": null,
  "maxAttempts": null,
  "status": null,
} satisfies PatchWebhookDestinationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PatchWebhookDestinationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


