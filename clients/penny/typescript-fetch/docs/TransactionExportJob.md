
# TransactionExportJob


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`format` | [TransactionExportFormat](TransactionExportFormat.md)
`status` | [TransactionExportStatus](TransactionExportStatus.md)
`createdAt` | Date
`completedAt` | Date
`expiresAt` | Date
`rowCount` | number
`error` | string

## Example

```typescript
import type { TransactionExportJob } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "format": null,
  "status": null,
  "createdAt": null,
  "completedAt": null,
  "expiresAt": null,
  "rowCount": null,
  "error": null,
} satisfies TransactionExportJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionExportJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


