
# SessionAuthResponse


## Properties

Name | Type
------------ | -------------
`user` | [User](User.md)
`sessionToken` | string
`sessionExpiresAt` | Date

## Example

```typescript
import type { SessionAuthResponse } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "user": null,
  "sessionToken": null,
  "sessionExpiresAt": null,
} satisfies SessionAuthResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SessionAuthResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


