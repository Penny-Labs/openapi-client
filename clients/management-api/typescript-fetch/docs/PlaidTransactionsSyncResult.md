
# PlaidTransactionsSyncResult


## Properties

Name | Type
------------ | -------------
`itemId` | string
`nextCursor` | string
`startedAt` | Date
`completedAt` | Date
`pages` | number
`addedCount` | number
`modifiedCount` | number
`removedCount` | number
`requestId` | string
`hadMore` | boolean

## Example

```typescript
import type { PlaidTransactionsSyncResult } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "nextCursor": null,
  "startedAt": null,
  "completedAt": null,
  "pages": null,
  "addedCount": null,
  "modifiedCount": null,
  "removedCount": null,
  "requestId": null,
  "hadMore": null,
} satisfies PlaidTransactionsSyncResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaidTransactionsSyncResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


