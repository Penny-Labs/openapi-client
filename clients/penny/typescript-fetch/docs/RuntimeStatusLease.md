
# RuntimeStatusLease


## Properties

Name | Type
------------ | -------------
`tokenPresent` | boolean
`expired` | boolean
`issuedAt` | Date
`expiresAt` | Date
`scopes` | Array&lt;string&gt;
`activationId` | string
`installId` | string
`tokenFingerprint` | string

## Example

```typescript
import type { RuntimeStatusLease } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "tokenPresent": null,
  "expired": null,
  "issuedAt": null,
  "expiresAt": null,
  "scopes": null,
  "activationId": null,
  "installId": null,
  "tokenFingerprint": null,
} satisfies RuntimeStatusLease

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeStatusLease
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


