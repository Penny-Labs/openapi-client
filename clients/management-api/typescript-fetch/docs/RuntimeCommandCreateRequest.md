
# RuntimeCommandCreateRequest


## Properties

Name | Type
------------ | -------------
`commandType` | [RuntimeCommandType](RuntimeCommandType.md)
`target` | [RuntimeCommandTarget](RuntimeCommandTarget.md)
`payload` | { [key: string]: any; }
`expiresAt` | Date
`expiresInSeconds` | number
`retryIntervalSeconds` | number
`maxAttempts` | number

## Example

```typescript
import type { RuntimeCommandCreateRequest } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "commandType": null,
  "target": null,
  "payload": null,
  "expiresAt": null,
  "expiresInSeconds": null,
  "retryIntervalSeconds": null,
  "maxAttempts": null,
} satisfies RuntimeCommandCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuntimeCommandCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


