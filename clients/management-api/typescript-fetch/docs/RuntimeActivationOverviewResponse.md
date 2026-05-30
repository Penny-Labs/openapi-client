
# RuntimeActivationOverviewResponse


## Properties

Name | Type
------------ | -------------
`productId` | string
`licenseId` | string
`from` | Date
`to` | Date
`currentActiveInstalls` | number
`historicalActivations` | number

## Example

```typescript
import type { RuntimeActivationOverviewResponse } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "productId": null,
  "licenseId": null,
  "from": null,
  "to": null,
  "currentActiveInstalls": null,
  "historicalActivations": null,
} satisfies RuntimeActivationOverviewResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeActivationOverviewResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


