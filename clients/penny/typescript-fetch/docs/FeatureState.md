
# FeatureState


## Properties

Name | Type
------------ | -------------
`key` | string
`enabled` | boolean
`defaultEnabled` | boolean
`buildEnabled` | boolean

## Example

```typescript
import type { FeatureState } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "enabled": null,
  "defaultEnabled": null,
  "buildEnabled": null,
} satisfies FeatureState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FeatureState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


