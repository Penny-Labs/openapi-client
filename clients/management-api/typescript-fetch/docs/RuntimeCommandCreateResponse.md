
# RuntimeCommandCreateResponse


## Properties

Name | Type
------------ | -------------
`commandId` | string
`status` | [RuntimeCommandStatus](RuntimeCommandStatus.md)
`targetCount` | number
`expiresAt` | Date

## Example

```typescript
import type { RuntimeCommandCreateResponse } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "commandId": null,
  "status": null,
  "targetCount": null,
  "expiresAt": null,
} satisfies RuntimeCommandCreateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeCommandCreateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


