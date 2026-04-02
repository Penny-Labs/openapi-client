
# Balance


## Properties

Name | Type
------------ | -------------
`id` | string
`bankAccountId` | string
`asOf` | Date
`dateAdded` | Date
`dateModified` | Date
`current` | number
`available` | number
`creditLimit` | number
`isoCurrencyCode` | string
`unofficialCurrencyCode` | string

## Example

```typescript
import type { Balance } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "bankAccountId": null,
  "asOf": null,
  "dateAdded": null,
  "dateModified": null,
  "current": null,
  "available": null,
  "creditLimit": null,
  "isoCurrencyCode": null,
  "unofficialCurrencyCode": null,
} satisfies Balance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Balance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


