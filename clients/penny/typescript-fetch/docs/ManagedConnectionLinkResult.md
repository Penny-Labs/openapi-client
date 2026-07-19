
# ManagedConnectionLinkResult


## Properties

Name | Type
------------ | -------------
`connection` | [ManagedConnection](ManagedConnection.md)
`sync` | [ManagedConnectionSyncResult](ManagedConnectionSyncResult.md)
`syncError` | string

## Example

```typescript
import type { ManagedConnectionLinkResult } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "connection": null,
  "sync": null,
  "syncError": null,
} satisfies ManagedConnectionLinkResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ManagedConnectionLinkResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
