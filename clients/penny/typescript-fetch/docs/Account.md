
# Account


## Properties

Name | Type
------------ | -------------
`id` | string
`dateAdded` | Date
`dateModified` | Date
`name` | string
`officialName` | string
`mask` | string
`type` | [BankAccountType](BankAccountType.md)
`subtype` | [BankAccountSubtype](BankAccountSubtype.md)
`status` | [BankAccountStatus](BankAccountStatus.md)
`currentBalance` | [Balance](Balance.md)

## Example

```typescript
import type { Account } from '@penny/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "dateAdded": null,
  "dateModified": null,
  "name": null,
  "officialName": null,
  "mask": null,
  "type": null,
  "subtype": null,
  "status": null,
  "currentBalance": null,
} satisfies Account

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Account
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


