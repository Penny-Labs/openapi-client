
# RuntimeStatusManagement


## Properties

Name | Type
------------ | -------------
`mode` | string
`apiConfigured` | boolean
`apiUrlConfigured` | boolean
`apiTokenConfigured` | boolean
`runtimeSecretDirConfigured` | boolean

## Example

```typescript
import type { RuntimeStatusManagement } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "mode": null,
  "apiConfigured": null,
  "apiUrlConfigured": null,
  "apiTokenConfigured": null,
  "runtimeSecretDirConfigured": null,
} satisfies RuntimeStatusManagement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeStatusManagement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


