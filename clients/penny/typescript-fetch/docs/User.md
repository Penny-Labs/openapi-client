
# User


## Properties

Name | Type
------------ | -------------
`id` | string
`email` | string
`dateAdded` | Date
`dateModified` | Date
`status` | [UserStatus](UserStatus.md)

## Example

```typescript
import type { User } from '@penny-labs/openapi-penny-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "email": null,
  "dateAdded": null,
  "dateModified": null,
  "status": null,
} satisfies User

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as User
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


