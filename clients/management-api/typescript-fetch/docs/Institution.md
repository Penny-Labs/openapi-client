
# Institution


## Properties

Name | Type
------------ | -------------
`iD` | string
`name` | string
`countryCode` | string
`logoUrl` | string
`websiteUrl` | string
`websiteLoginUrl` | string

## Example

```typescript
import type { Institution } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "iD": null,
  "name": null,
  "countryCode": null,
  "logoUrl": null,
  "websiteUrl": null,
  "websiteLoginUrl": null,
} satisfies Institution

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Institution
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


