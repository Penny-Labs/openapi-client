
# CategoryCreateRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`parentCategoryId` | string

## Example

```typescript
import type { CategoryCreateRequest } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "parentCategoryId": null,
} satisfies CategoryCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CategoryCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


