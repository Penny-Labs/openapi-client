
# RuntimeUsageEvent


## Properties

Name | Type
------------ | -------------
`eventId` | string
`meterType` | string
`quantity` | number
`occurredAt` | Date
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { RuntimeUsageEvent } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "eventId": null,
  "meterType": null,
  "quantity": null,
  "occurredAt": null,
  "metadata": null,
} satisfies RuntimeUsageEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeUsageEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


