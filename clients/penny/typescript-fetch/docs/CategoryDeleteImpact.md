
# CategoryDeleteImpact


## Properties

Name | Type
------------ | -------------
`categoryId` | string
`mode` | string
`canDelete` | boolean
`dependencyCounts` | [CategoryDeleteDependencyCounts](CategoryDeleteDependencyCounts.md)
`blockingReasons` | Array&lt;string&gt;

## Example

```typescript
import type { CategoryDeleteImpact } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "categoryId": null,
  "mode": null,
  "canDelete": null,
  "dependencyCounts": null,
  "blockingReasons": null,
} satisfies CategoryDeleteImpact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CategoryDeleteImpact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


