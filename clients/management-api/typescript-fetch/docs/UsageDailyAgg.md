
# UsageDailyAgg


## Properties

Name | Type
------------ | -------------
`id` | string
`usageDate` | Date
`licenseId` | string
`productId` | string
`meterType` | string
`quantity` | number

## Example

```typescript
import type { UsageDailyAgg } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "usageDate": null,
  "licenseId": null,
  "productId": null,
  "meterType": null,
  "quantity": null,
} satisfies UsageDailyAgg

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageDailyAgg
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


