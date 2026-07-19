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
PACKAGE_VERSION="${PACKAGE_VERSION:-}"
PENNY_PACKAGE_NAME="@penny-labs/openapi-penny-client"
PENNY_REPO_URL="git+https://github.com/Penny-Labs/openapi-client.git"
PENNY_REGISTRY_URL="https://npm.pkg.github.com"

if [[ "${API_NAME}" == "penny" && "${GENERATOR}" == "typescript-fetch" ]]; then
  PACKAGE_NAME="${PENNY_PACKAGE_NAME}"
  PACKAGE_VERSION="${PACKAGE_VERSION:-0.5.0}"
else
  PACKAGE_VERSION="${PACKAGE_VERSION:-0.2.0}"
fi

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

if [[ "${API_NAME}" == "penny" && "${GENERATOR}" == "typescript-fetch" ]]; then
  PACKAGE_JSON="${OUTPUT_DIR}/package.json"
  TS_CONFIG="${OUTPUT_DIR}/tsconfig.json"
  perl -0pi -e 's#"url":\s*"https://github\.com/GIT_USER_ID/GIT_REPO_ID\.git"#"url": "'"${PENNY_REPO_URL}"'"#' "${PACKAGE_JSON}"
  perl -0pi -e 's#("repository":\s*\{[^}]*\}\s*,)#$1\n  "publishConfig": {\n    "registry": "'"${PENNY_REGISTRY_URL}"'"\n  },#s' "${PACKAGE_JSON}"
  if grep -q '"ignoreDeprecations"' "${TS_CONFIG}"; then
    perl -0pi -e 's#"ignoreDeprecations":\s*"[^"]+"#"ignoreDeprecations": "5.0"#' "${TS_CONFIG}"
  else
    perl -0pi -e 's#("declaration":\s*true,\n)#$1    "ignoreDeprecations": "5.0",\n#' "${TS_CONFIG}"
  fi
  if ! grep -q '"rootDir"' "${TS_CONFIG}"; then
    perl -0pi -e 's#("moduleResolution":\s*"node",\n)#$1    "rootDir": "src",\n#' "${TS_CONFIG}"
  fi
fi

# The existing clients were generated with different whitespace conventions.
# Normalize management output wholesale, but only touch Penny files that
# actually changed, so regeneration remains focused and passes diff checks.
if [[ "${API_NAME}" == "management-api" ]]; then
  find "${OUTPUT_DIR}" -type f \( -name '*.ts' -o -name '*.md' \) \
    -exec perl -pi -e 's/[ \t]+$//' {} +
else
  while IFS= read -r generated_file; do
    case "${generated_file}" in
      *.ts|*.md) perl -pi -e 's/[ \t]+$//' "${ROOT_DIR}/${generated_file}" ;;
    esac
  done < <(
    git -C "${ROOT_DIR}" diff --name-only -- "clients/${API_NAME}/${GENERATOR}"
    git -C "${ROOT_DIR}" ls-files --others --exclude-standard -- "clients/${API_NAME}/${GENERATOR}"
  )
fi

while IFS= read -r generated_file; do
  case "${generated_file}" in
    *.ts|*.md) perl -0pi -e 's/(?:\r?\n)+\z/\n/' "${ROOT_DIR}/${generated_file}" ;;
  esac
done < <(
  git -C "${ROOT_DIR}" diff --name-only -- "clients/${API_NAME}/${GENERATOR}"
  git -C "${ROOT_DIR}" ls-files --others --exclude-standard -- "clients/${API_NAME}/${GENERATOR}"
)

echo "Synced spec to ${TARGET_SPEC}"
echo "Generated ${GENERATOR} client at ${OUTPUT_DIR}"
echo "Package metadata: ${PACKAGE_NAME}@${PACKAGE_VERSION}"
