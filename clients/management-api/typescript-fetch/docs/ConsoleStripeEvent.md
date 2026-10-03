
# ConsoleStripeEvent


## Properties

Name | Type
------------ | -------------
`id` | string
`eventType` | string
`createdAt` | Date
`processedAt` | Date

## Example

```typescript
import type { ConsoleStripeEvent } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "eventType": null,
  "createdAt": null,
  "processedAt": null,
} satisfies ConsoleStripeEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConsoleStripeEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


