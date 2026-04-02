# openapi-client

Centralized repository for generated OpenAPI client code.

## Layout

- `specs/<api>/openapi.yaml`: copied source spec for each API.
- `clients/<api>/<generator>/`: generated client outputs.
- `scripts/generate.sh`: canonical Docker-based generation entry point.

## Prerequisites

- `docker`
- `node` + `npm` (for build/publish workflows)

## Generate management-api client

From `openapi-client/`:

```bash
./scripts/generate.sh management-api typescript-fetch
```

This command:
- Copies `../management-api/api/openapi.yaml` to `specs/management-api/openapi.yaml`.
- Runs `openapitools/openapi-generator-cli:v7.20.0` in Docker.
- Generates `clients/management-api/typescript-fetch`.
- Sets generated package metadata to `@penny/openapi-management-api-client` and version `0.1.0`.

## Generate penny client

From `openapi-client/`:

```bash
./scripts/generate.sh penny typescript-fetch
```

This command:
- Copies `../penny/api/openapi.yaml` to `specs/penny/openapi.yaml`.
- Runs `openapitools/openapi-generator-cli:v7.20.0` in Docker.
- Generates `clients/penny/typescript-fetch`.
- Sets generated package metadata to `@penny-labs/openapi-penny-client` and version `0.1.0`.
- Applies Penny-specific post-generation normalization for `tsconfig.json`:
  - `ignoreDeprecations: "5.0"` (compatible with TS 5.x and TS 6.x toolchains)
  - `rootDir: "src"`
- Sets publish registry metadata for GitHub Packages (`https://npm.pkg.github.com`).

Use `OPENAPI_GENERATOR_IMAGE=<image>` to override the generator image.

## Publish Penny client (tag-based)

1. Regenerate the Penny client:
   ```bash
   ./scripts/generate.sh penny typescript-fetch
   ```
2. Commit and push generated changes to `main`.
3. Create and push a release tag with semver:
   ```bash
   git tag penny-client-v0.1.0
   git push origin penny-client-v0.1.0
   ```
4. GitHub Actions workflow `.github/workflows/publish-penny-client.yml` publishes
   `@penny-labs/openapi-penny-client` to GitHub Packages.
