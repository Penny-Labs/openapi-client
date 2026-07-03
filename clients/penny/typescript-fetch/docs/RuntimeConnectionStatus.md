
# RuntimeConnectionStatus


## Properties

Name | Type
------------ | -------------
`id` | string
`managedItemId` | string
`status` | string
`lastSyncStartedAt` | Date
`lastSyncCompletedAt` | Date
`lastSyncError` | string
`dateAdded` | Date
`dateModified` | Date

## Example

```typescript
import type { RuntimeConnectionStatus } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "managedItemId": null,
  "status": null,
  "lastSyncStartedAt": null,
  "lastSyncCompletedAt": null,
  "lastSyncError": null,
  "dateAdded": null,
  "dateModified": null,
} satisfies RuntimeConnectionStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeConnectionStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


