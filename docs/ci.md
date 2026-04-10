# CI Pipeline Documentation

This project uses GitHub Actions workflow file at `.github/workflows/ci.yaml`.

## When CI Runs

The workflow triggers on:

- Push to `main`
- Pull requests targeting `main`
- Manual run (`workflow_dispatch`)
- Nightly schedule (`cron: 0 2 * * *`)

It also uses concurrency control to cancel older in-progress runs for the same branch/ref.

## Global Permissions

Default workflow permission:

- `contents: read`

The Docker job elevates permissions only where needed:

- `packages: write`
- `security-events: write`

## Job Overview

The pipeline has four jobs:

1. `lint`
2. `test`
3. `build`
4. `docker`
5. `security-report` (nightly/manual non-blocking full report)

The Docker job depends on the first three jobs:

- `needs: [lint, test, build]`

This means container scanning/publish starts only if lint, tests, and build all pass.

## Job Details

### 1) Lint Job

- Runner: `ubuntu-latest`
- Timeout: 10 minutes
- Steps:
  - Checkout repository
  - Setup Node.js (`NODE_VERSION=20`)
  - Enable npm cache
  - Install dependencies with `npm ci`
  - Run lint with `npm run lint`

### 2) Test Job

- Runner: `ubuntu-latest`
- Timeout: 15 minutes
- Steps:
  - Checkout repository
  - Setup Node.js (`NODE_VERSION=20`) with npm cache
  - Install dependencies with `npm ci`
  - Run tests with `npm run test:ci`

### 3) Build Job

- Runner: `ubuntu-latest`
- Timeout: 15 minutes
- Steps:
  - Checkout repository
  - Setup Node.js (`NODE_VERSION=20`) with npm cache
  - Install dependencies with `npm ci`
  - Build project with `npm run build`

### 4) Docker Job

- Runner: `ubuntu-latest`
- Depends on: `lint`, `test`, `build`
- Timeout: 20 minutes
- Steps:
  - Checkout repository
  - Setup Docker Buildx
  - Generate image metadata/tags
  - Login to GHCR (only on push to `main`)
  - Build local image for scan: `ghcr.io/<owner>/chiara-react-app:scan-target`
  - Trivy security gate (`HIGH,CRITICAL`, `ignore-unfixed: true`, `exit-code: 1`)
  - Create Trivy SARIF report
  - Upload SARIF to GitHub Security
  - Push image to GHCR only on push to `main`

### 5) Security Report Job

- Runner: `ubuntu-latest`
- Triggered on: scheduled nightly run and manual dispatch
- Steps:
  - Build local image for report
  - Run Trivy non-blocking SARIF scan on `LOW,MEDIUM,HIGH,CRITICAL`
  - Upload SARIF to GitHub Security
  - Upload SARIF as build artifact

Published tags:

- `latest` (default branch)
- `sha-<commit>`

## Required GitHub Secret

No custom GHCR secret is required for this workflow.

It uses the built-in:

- `secrets.GITHUB_TOKEN`

with job-level `packages: write` permission for publishing.

## Notes

- CI uses `npm ci` for reproducible dependency installs.
- Node version in CI is pinned to `20`.
- Security scan runs before any container push.
- PRs validate security but do not publish images.
- Nightly report provides full-severity visibility without blocking deployments.

## Production Security Standard

This pipeline implements a practical production policy:

1. Block deploy on `HIGH` and `CRITICAL`.
2. Track and remediate `MEDIUM` on SLA (recommended: 14-30 days).
3. Monitor `LOW` without release blocking.
4. Keep `ignore-unfixed: true` to avoid impossible blockers.
5. Require exception owner and expiry date for accepted risk.

## Typical Flow

1. Developer pushes branch or opens PR.
2. Lint, test, and build run in parallel.
3. Docker job builds scan image and runs Trivy gate.
4. On push to `main`, image is pushed to GHCR; on PR, publish is skipped.

## Troubleshooting

### GHCR Login Fails

- Confirm workflow/job permissions include `packages: write`.
- Confirm package publishing is allowed for repository actions.

### Test Job Fails

- Run locally: `npm run test:ci`
- Fix failing tests before pushing.

### Build Job Fails

- Run locally: `npm run build`
- Confirm no TypeScript or bundling errors.

### Lint Job Fails

- Run locally: `npm run lint`
- Fix lint issues and push again.

### Trivy Gate Fails

- Review Trivy output in the Docker job logs.
- Prioritize fixing `CRITICAL` and `HIGH` findings with available fixes.
- If needed, tune policy inputs (`severity`, `ignore-unfixed`, `exit-code`) in `.github/workflows/ci.yaml`.
