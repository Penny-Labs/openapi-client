#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
API_NAME="${1:-management-api}"
GENERATOR="${2:-typescript-fetch}"
SOURCE_SPEC="${ROOT_DIR}/../${API_NAME}/api/openapi.yaml"
TARGET_SPEC="${ROOT_DIR}/specs/${API_NAME}/openapi.yaml"
OUTPUT_DIR="${ROOT_DIR}/clients/${API_NAME}/${GENERATOR}"
OPENAPI_GENERATOR_IMAGE="${OPENAPI_GENERATOR_IMAGE:-openapitools/openapi-generator-cli:v7.20.0}"
PACKAGE_NAME="@penny/openapi-${API_NAME}-client"
PACKAGE_VERSION="${PACKAGE_VERSION:-0.1.0}"

if ! command -v docker >/dev/null 2>&1; then
  echo "error: docker is required to generate OpenAPI clients" >&2
  exit 1
fi

if [[ ! -f "${SOURCE_SPEC}" ]]; then
  echo "error: source OpenAPI spec not found at ${SOURCE_SPEC}" >&2
  exit 1
fi

mkdir -p "$(dirname "${TARGET_SPEC}")" "$(dirname "${OUTPUT_DIR}")"
cp "${SOURCE_SPEC}" "${TARGET_SPEC}"
rm -rf "${OUTPUT_DIR}"

docker run --rm \
  --user "$(id -u):$(id -g)" \
  -v "${ROOT_DIR}:/workspace" \
  -w /workspace \
  "${OPENAPI_GENERATOR_IMAGE}" generate \
  -i "/workspace/specs/${API_NAME}/openapi.yaml" \
  -g "${GENERATOR}" \
  -o "/workspace/clients/${API_NAME}/${GENERATOR}" \
  --additional-properties "npmName=${PACKAGE_NAME},npmVersion=${PACKAGE_VERSION}"

echo "Synced spec to ${TARGET_SPEC}"
echo "Generated ${GENERATOR} client at ${OUTPUT_DIR}"
echo "Package metadata: ${PACKAGE_NAME}@${PACKAGE_VERSION}"
