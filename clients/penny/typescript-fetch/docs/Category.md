
# Category


## Properties

Name | Type
------------ | -------------
`id` | string
`dateAdded` | Date
`dateModified` | Date
`name` | string
`parentCategoryId` | string

## Example

```typescript
import type { Category } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "dateAdded": null,
  "dateModified": null,
  "name": null,
  "parentCategoryId": null,
} satisfies Category

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Category
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


