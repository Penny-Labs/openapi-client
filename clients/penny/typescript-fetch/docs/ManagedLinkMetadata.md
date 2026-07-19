
# ManagedLinkMetadata


## Properties

Name | Type
------------ | -------------
`institution` | [ManagedLinkInstitution](ManagedLinkInstitution.md)
`accounts` | [Array&lt;ManagedLinkAccount&gt;](ManagedLinkAccount.md)

## Example

```typescript
import type { ManagedLinkMetadata } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "institution": null,
  "accounts": null,
} satisfies ManagedLinkMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ManagedLinkMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)
