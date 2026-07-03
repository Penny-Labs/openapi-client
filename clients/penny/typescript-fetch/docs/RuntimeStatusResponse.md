
# RuntimeStatusResponse


## Properties

Name | Type
------------ | -------------
`entitlement` | [RuntimeStatusEntitlement](RuntimeStatusEntitlement.md)
`management` | [RuntimeStatusManagement](RuntimeStatusManagement.md)
`websocket` | [RuntimeStatusWebsocket](RuntimeStatusWebsocket.md)
`lease` | [RuntimeStatusLease](RuntimeStatusLease.md)
`connections` | [Array&lt;RuntimeConnectionStatus&gt;](RuntimeConnectionStatus.md)

## Example

```typescript
import type { RuntimeStatusResponse } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "entitlement": null,
  "management": null,
  "websocket": null,
  "lease": null,
  "connections": null,
} satisfies RuntimeStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


