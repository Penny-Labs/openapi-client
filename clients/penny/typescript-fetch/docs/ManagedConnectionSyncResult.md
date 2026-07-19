
# ManagedConnectionSyncResult


## Properties

Name | Type
------------ | -------------
`connectionId` | string
`status` | string
`sync` | { [key: string]: any; }
`error` | string

## Example

```typescript
import type { ManagedConnectionSyncResult } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "connectionId": null,
  "status": null,
  "sync": null,
  "error": null,
} satisfies ManagedConnectionSyncResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ManagedConnectionSyncResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
