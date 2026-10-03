
# SupportOverrideAudit


## Properties

Name | Type
------------ | -------------
`id` | string
`licenseId` | string
`productId` | string
`action` | string
`reason` | string
`actor` | string
`expiresAt` | Date
`dateAdded` | Date

## Example

```typescript
import type { SupportOverrideAudit } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "licenseId": null,
  "productId": null,
  "action": null,
  "reason": null,
  "actor": null,
  "expiresAt": null,
  "dateAdded": null,
} satisfies SupportOverrideAudit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SupportOverrideAudit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


