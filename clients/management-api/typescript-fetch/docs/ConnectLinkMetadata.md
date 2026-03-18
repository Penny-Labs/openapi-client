
# ConnectLinkMetadata


## Properties

Name | Type
------------ | -------------
`institution` | [LinkInstitution](LinkInstitution.md)
`accounts` | [Array&lt;LinkAccount&gt;](LinkAccount.md)

## Example

```typescript
import type { ConnectLinkMetadata } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "institution": null,
  "accounts": null,
} satisfies ConnectLinkMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConnectLinkMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


