# openapi-client

Centralized repository for generated OpenAPI client code.

## Layout

- `specs/<api>/openapi.yaml`: copied source spec for each API.
- `clients/<api>/<generator>/`: generated client outputs.
- `scripts/generate.sh`: canonical Docker-based generation entry point.

## Prerequisites

- `docker`

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

Use `OPENAPI_GENERATOR_IMAGE=<image>` to override the generator image.
