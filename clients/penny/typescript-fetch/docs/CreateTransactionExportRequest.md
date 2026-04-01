
# CreateTransactionExportRequest


## Properties

Name | Type
------------ | -------------
`format` | [TransactionExportFormat](TransactionExportFormat.md)
`accountIds` | Array&lt;string&gt;
`q` | string
`pending` | boolean
`dateFrom` | Date
`dateTo` | Date
`amountMin` | number
`amountMax` | number
`categoryId` | string
`tagIds` | Array&lt;string&gt;
`tagMode` | string
`sort` | string

## Example

```typescript
import type { CreateTransactionExportRequest } from '@penny/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "format": null,
  "accountIds": null,
  "q": null,
  "pending": null,
  "dateFrom": null,
  "dateTo": null,
  "amountMin": null,
  "amountMax": null,
  "categoryId": null,
  "tagIds": null,
  "tagMode": null,
  "sort": null,
} satisfies CreateTransactionExportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTransactionExportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


