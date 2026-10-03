
# ConsoleOverview


## Properties

Name | Type
------------ | -------------
`asOf` | Date
`activityFrom` | Date
`sections` | [{ [key: string]: ConsoleOverviewSection; }](ConsoleOverviewSection.md)

## Example

```typescript
import type { ConsoleOverview } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "asOf": null,
  "activityFrom": null,
  "sections": null,
} satisfies ConsoleOverview

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConsoleOverview
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


