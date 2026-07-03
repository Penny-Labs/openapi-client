
# RuntimeStatusWebsocket


## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`configured` | boolean
`endpointConfigured` | boolean
`status` | string

## Example

```typescript
import type { RuntimeStatusWebsocket } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "configured": null,
  "endpointConfigured": null,
  "status": null,
} satisfies RuntimeStatusWebsocket

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeStatusWebsocket
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


