
# PlaidWebhookResponse


## Properties

Name | Type
------------ | -------------
`duplicate` | boolean
`eventKey` | string
`kid` | string
`ignored` | boolean
`reason` | string
`commandCreated` | boolean
`commandId` | string
`warning` | string

## Example

```typescript
import type { PlaidWebhookResponse } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "duplicate": null,
  "eventKey": null,
  "kid": null,
  "ignored": null,
  "reason": null,
  "commandCreated": null,
  "commandId": null,
  "warning": null,
} satisfies PlaidWebhookResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaidWebhookResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


