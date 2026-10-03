
# ConsoleSearchGroup


## Properties

Name | Type
------------ | -------------
`kind` | string
`available` | boolean
`total` | number
`items` | [Array&lt;ConsoleSearchResult&gt;](ConsoleSearchResult.md)

## Example

```typescript
import type { ConsoleSearchGroup } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "kind": null,
  "available": null,
  "total": null,
  "items": null,
} satisfies ConsoleSearchGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConsoleSearchGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


