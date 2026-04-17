# GHCR 403 Forbidden - Troubleshooting Guide

## The Problem
Docker push to GHCR failing with `403 Forbidden` when trying to push image.

```
Error: failed to push ghcr.io/chiarasei/chiara-react-app:latest
403 Forbidden on blob upload
```

## Root Causes

### **1. GITHUB_TOKEN Permissions** (Most Likely)
`GITHUB_TOKEN` in GitHub Actions is scoped to the workflow. It might not have:
- `packages:write` scope by default
- Repository package creation permissions

**Fix:**
- Repository → Settings → Actions → General
- Scroll to "Workflow permissions"
- Enable: "Read and write permissions"
- Enable: "Allow GitHub Actions to create and approve pull requests"

### **2. GHCR Container Repository Doesn't Exist**
You're trying to push to `ghcr.io/chiarasei/chiara-react-app` but it might not exist yet.

**Fix:**
Create the repo first:
```bash
docker login ghcr.io -u chiarasei -p $GITHUB_TOKEN
docker pull alpine:latest
docker tag alpine:latest ghcr.io/chiarasei/chiara-react-app:test
docker push ghcr.io/chiarasei/chiara-react-app:test
```

This creates the repository in GHCR.

### **3. Using GITHUB_TOKEN vs. PAT**
`GITHUB_TOKEN` is temporary and scoped. For reliable image pushing, use a Personal Access Token (PAT).

**Fix:**
1. Create PAT: GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Scopes needed:
   - `repo` (full control)
   - `packages:write` (push containers)
   - `packages:read` (pull containers)

3. Store as secret: Repository → Settings → Secrets and variables → Actions → New repository secret
4. Update workflow:
```yaml
- name: Login to GHCR
  uses: docker/login-action@v3
  with:
    registry: ghcr.io
    username: ${{ github.repository_owner }}
    password: ${{ secrets.GHCR_PAT }}  # Your new PAT
```

## Immediate Actions to Take

**Option A: Quick Fix (Use GITHUB_TOKEN with proper settings)**
1. Go to: Repository → Settings → Actions → General
2. Under "Workflow permissions", select "Read and write permissions"
3. Click Save
4. Re-run the workflow

**Option B: Secure Fix (Use PAT)**
1. Create Personal Access Token with `packages:write` scope
2. Add as repository secret `GHCR_PAT`
3. Update workflow to use the secret

**Option C: Create Repository First**
```bash
# Manually push a test image to create the repo
docker login ghcr.io
docker tag alpine:latest ghcr.io/chiarasei/chiara-react-app:v0.0.0
docker push ghcr.io/chiarasei/chiara-react-app:v0.0.0
```

## What We Fixed in Workflow

✅ Made login **unconditional** (runs once, not skipped)  
✅ Added **id-token: write** permission (helps with OIDC)  
✅ Kept **packages: write** for container push permissions  

## Next Steps

1. Check repository settings (Option A above)
2. If still fails, create PAT (Option B)
3. If PAT approach, update these lines in ci.yaml:

```yaml
# Change from:
password: ${{ secrets.GITHUB_TOKEN }}

# To:
password: ${{ secrets.GHCR_PAT }}
```

Then: 
```bash
git add .github/workflows/ci.yaml
git commit -m "Fix: Use GHCR_PAT for authenticated push"
git push
```
