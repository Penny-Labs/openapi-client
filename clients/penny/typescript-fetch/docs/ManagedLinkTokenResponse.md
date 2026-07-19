
# ManagedLinkTokenResponse


## Properties

Name | Type
------------ | -------------
`connectionId` | string
`linkToken` | string
`expiration` | Date
`mode` | string

## Example

```typescript
import type { ManagedLinkTokenResponse } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "connectionId": null,
  "linkToken": null,
  "expiration": null,
  "mode": null,
} satisfies ManagedLinkTokenResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ManagedLinkTokenResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
