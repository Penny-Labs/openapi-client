
# JwkKey


## Properties

Name | Type
------------ | -------------
`kty` | string
`crv` | string
`kid` | string
`alg` | string
`use` | string
`x` | string

## Example

```typescript
import type { JwkKey } from '@penny/openapi-management-api-client'

// TODO: Update the object below with actual values
const example = {
  "kty": OKP,
  "crv": Ed25519,
  "kid": null,
  "alg": EdDSA,
  "use": sig,
  "x": null,
} satisfies JwkKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JwkKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


