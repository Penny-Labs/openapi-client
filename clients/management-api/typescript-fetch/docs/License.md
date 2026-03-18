
# License


## Properties

Name | Type
------------ | -------------
`id` | string
`keySuffix` | string
`dateAdded` | Date
`dateModified` | Date
`dateExpires` | Date
`status` | [LicenseStatus](LicenseStatus.md)
`holderName` | string
`holderEmail` | string
`holderCompany` | string

## Example

```typescript
import type { License } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "keySuffix": null,
  "dateAdded": null,
  "dateModified": null,
  "dateExpires": null,
  "status": null,
  "holderName": null,
  "holderEmail": null,
  "holderCompany": null,
} satisfies License

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as License
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


