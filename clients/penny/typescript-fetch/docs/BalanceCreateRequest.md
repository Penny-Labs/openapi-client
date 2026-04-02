
# BalanceCreateRequest


## Properties

Name | Type
------------ | -------------
`asOf` | Date
`current` | number
`available` | number
`creditLimit` | number
`isoCurrencyCode` | string
`unofficialCurrencyCode` | string

## Example

```typescript
import type { BalanceCreateRequest } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "asOf": null,
  "current": null,
  "available": null,
  "creditLimit": null,
  "isoCurrencyCode": null,
  "unofficialCurrencyCode": null,
} satisfies BalanceCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BalanceCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


