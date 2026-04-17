# CI/CD Pipeline - Interview Questions & Answers Guide

**Documentation for: Chiara AI Consulting React + Vite + Docker CI/CD Pipeline**

---

## **TABLE OF CONTENTS**
1. [Linting & Code Quality](#linting--code-quality)
2. [Testing](#testing)
3. [Build Process](#build-process)
4. [Container Security](#container-security)
5. [Pipeline Architecture](#pipeline-architecture)
6. [Troubleshooting & Debugging](#troubleshooting--debugging)

---

## **LINTING & CODE QUALITY**

### **Q1: Why do you lint in your CI pipeline before testing?**
**A:** Linting catches issues early:
- Syntax errors (typos, missing semicolons)
- Code style violations (consistency)
- Potential bugs (unused variables, missing dependencies)
- Dead code (unreachable statements)

**Timeline:** Lint → Test → Build
- Fail fast if code style is wrong (seconds)
- Don't waste time testing bad code
- Cost effective (linting is cheap)

---

### **Q2: What linting issues did you encounter and how did you fix them?**

**A:** We had 17 issues:

**4 Critical Errors (Blocked Pipeline):**
1. **Empty interfaces** (`CommandDialogProps`, `TextareaProps`)
   - Issue: Dead code, no type definition
   - Fix: Removed unused interfaces, used existing types (`DialogProps`, built-in React types)

2. **Explicit `any` type** in error handling
   - Issue: Defeats TypeScript type safety
   - Fix: Changed to `unknown` type (forces type checking)

3. **CommonJS `require()` in ES6 module**
   - Issue: Inconsistent module system
   - Fix: Added `// eslint-disable-next-line` with comment explaining why `require()` is necessary for Tailwind plugin

**14 Non-Critical Warnings:**
1. **Missing Hook dependencies** (2 warnings)
   - Issue: `useEffect` missing variables in dependency array
   - Symptom: Stale closure bugs
   - Fix: Added missing dependencies (`language`, `messages.length`, `t`)

2. **React Refresh violations** (14 warnings)
   - Issue: Exporting utilities alongside components breaks fast refresh
   - Fix: Added `// eslint-disable-next-line react-refresh/only-export-components` before utility exports

**Key Learning:**
> "Warnings aren't optional in production code—they're bugs waiting to happen."

---

### **Q3: How do you configure ESLint rules, and when would you disable them?**

**A:** ESLint Configuration (`.eslintrc.js`):
```javascript
react-hooks/exhaustive-deps    // Always include dependencies in useEffect
react-refresh/only-export-components  // Components should export alone
@typescript-eslint/no-explicit-any    // No 'any' types (use 'unknown')
@typescript-eslint/no-require-imports  // Use ES6 modules
```

**When to Disable (with caution):**
```javascript
// ✅ Good reason - necessary tool limitation
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("tailwindcss-animate")  // Tailwind config requires this

// ❌ Bad reason - ignoring real issues
// eslint-disable-next-line no-unused-vars
const unused = 5;  // This IS a problem, don't hide it
```

**Rule:** Only disable with a comment explaining WHY. If you can't explain it, you shouldn't disable it.

---

## **TESTING**

### **Q4: Why did tests fail in CI but work locally?**

**A:** **Root Cause:** Missing dependency in `package.json`

Your `vite.config.ts` specified:
```typescript
test: {
  environment: "jsdom",  // Tell Vitest to use DOM simulation
}
```

But `jsdom` wasn't in `devDependencies`. Locally it might have been cached or installed from another source.

**CI Process:**
```
1. Clone repo → fresh environment
2. npm ci (clean install from package-lock.json)
3. jsdom not listed → not installed
4. Vitest tries to use jsdom → "Cannot find package 'jsdom'"
5. Tests fail
```

**Fix:** Add `jsdom: ^24.0.0` to devDependencies

**Key Learning:**
> "Local != CI. Always test your CI pipeline."

---

### **Q5: What is `jsdom` and why do you need it for testing?**

**A:** `jsdom` is a JavaScript implementation of web standards. It simulates a DOM environment in Node.js.

**Why needed:**
- Tests run in Node.js (no browser)
- Your code uses browser APIs (window, document, etc.)
- jsdom provides fake implementations:
  ```javascript
  window.matchMedia() → mocked
  IntersectionObserver → mocked
  document.querySelector() → mocked
  ```

**Alternative:** Use `node` environment (no DOM APIs), but slower and limited.

**Your Setup:**
```javascript
// vite.config.ts
test: {
  environment: "jsdom",        // Use DOM simulation
  setupFiles: ["./src/setupTests.js"]  // Add custom mocks
}
```

---

### **Q6: What's in your test setup file and why?**

**A:** `src/setupTests.js` provides browser API mocks for jsdom:

```javascript
// Mock window.matchMedia (used by sonner toast)
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver (used by scroll-fade hook)
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};
```

**Why:**
- **sonner toast library** needs `window.matchMedia` to detect media queries
- **scroll-fade hook** needs `IntersectionObserver` to detect element visibility
- Without mocks: "window.matchMedia is not a function" → test crashes

**Lesson:**
> "jsdom doesn't provide everything. Need setupTests for missing APIs."

---

### **Q7: How do you structure tests for CI vs. local?**

**A:** Use two different commands:

```json
"scripts": {
  "test": "vitest",          // Watch mode (local dev)
  "test:ci": "vitest run"    // Run once, exit (CI)
}
```

**Differences:**
- `vitest` = watch mode, re-run on file changes, faster feedback
- `vitest run` = single pass, exit with code, perfect for CI

**In Pipeline:**
```yaml
- name: Run tests
  run: npm run test:ci  # Single pass, exit with status code
```

---

## **BUILD PROCESS**

### **Q8: What happens during the build step?**

**A:** Build compiles source → optimized production app

```
1. TypeScript → JavaScript compilation
2. JSX → React.createElement() transformation
3. CSS bundling & minification
4. Code splitting (separate chunks)
5. Asset optimization (images, fonts)
6. Output to dist/ folder
```

**Your Command:**
```bash
npm run build  # Runs: vite build
```

**Output:**
```
dist/
├── index.html           (entry point)
├── assets/
│   ├── app-ABC123.js    (hashed for cache busting)
│   ├── app-ABC123.css
│   └── vendor-XYZ789.js (external libraries)
```

**Why separate vendors?**
- node_modules rarely change
- Browser caches vendor chunk
- Only app code is re-downloaded on update
- Faster deployments

---

### **Q9: Why do you have both `build` and `build:dev` commands?**

**A:** Different optimization levels for different environments:

```json
"build": "vite build",           // Production (minified, optimized)
"build:dev": "vite build --mode development"  // Development (readable)
```

**Production Build:**
- Minified code (removes whitespace, comments)
- Tree-shaking (removes unused code)
- Source maps hidden (security)
- Optimizations enabled

**Development Build:**
- Readable code (easier debugging)
- No minification (preserves names)
- Source maps included
- Slower compilation

**Pipeline uses:** `npm run build` (production)

---

### **Q10: What does Vite cache do?**

**A:** GitHub Actions cache speeds up subsequent builds:

```yaml
cache-from: type=gha   # Use GitHub's cache
cache-to: type=gha,mode=max  # Save layer cache
```

**Without cache:**
```
Docker build → 2-3 minutes
```

**With cache:**
```
Docker build → 30-45 seconds (reuse layers)
```

**What's cached:**
- npm dependencies layer
- Base OS packages
- Previous build artifacts

---

## **CONTAINER SECURITY**

### **Q11: What is Trivy and why scan Docker images?**

**A:** Trivy is a security scanner for vulnerabilities in:
- Container images
- Dependencies
- Infrastructure as Code
- Filesystems

**Why scan:**
- Detect known CVEs (Common Vulnerabilities & Exposures)
- Prevent deploying insecure code
- Compliance & audit trails
- Shift-left security (catch issues early)

**Your Scanning:**
```yaml
# Push scan (blocking)
- Trivy scan gate (HIGH,CRITICAL)
  - Blocks deployment if HIGH/CRITICAL found
  - continues-on-error: true (allows reporting)

# Nightly full scan (non-blocking)
- Full scan at 2 AM UTC
  - Scans all severities (LOW, MEDIUM, HIGH, CRITICAL)
  - Reports trends over time
  - Doesn't block, just informs
```

---

### **Q12: What's the difference between blocking on vulnerabilities vs. reporting?**

**A:** 

**Blocking (Hard Gate):**
```yaml
exit-code: '1'    # Fail if HIGH/CRITICAL found
severity: HIGH,CRITICAL  # Only block high-severity
```
- ✅ Prevents bad code from shipping
- ❌ Might be too strict (blocks development)
- Use case: Production deployments

**Reporting (Soft Gate):**
```yaml
exit-code: '0'    # Report but don't fail
continue-on-error: true
severity: LOW,MEDIUM,HIGH,CRITICAL  # Report everything
```
- ✅ Team sees all issues
- ✅ Doesn't block deployments
- ✅ Enables prioritization
- Use case: Planning, trend analysis

**Your Approach (Best Practice):**
```
Push/PR → Hard block on HIGH+CRITICAL (prevents shipping)
         → Soft report on all severities (visibility)
         
Nightly → Soft report on everything (trends, compliance)
```

---

### **Q13: Why does Trivy report run even if gate fails?**

**A:** **Principle: Separate security concerns**

```
Gate Fail           → Stop deployment ✅
Report Still Runs   → Document findings ✅
```

**Without soft fail:**
```
Trivy gate finds HIGH → exit-code: 1 → Pipeline stops
SARIF report step → SKIPPED (never runs)
Team doesn't see report → doesn't know what to fix
```

**With soft fail (`continue-on-error: true`):**
```
Trivy gate finds HIGH → exit-code: 1 → Pipeline marked failed
SARIF report step → STILL RUNS
Team gets visibility in GitHub Security tab
Team can fix vulnerabilities and re-deploy
```

**Key Insight:**
> "Blocking deployment and reporting findings are separate concerns. Do both."

---

### **Q14: What is SARIF and why upload it to GitHub?**

**A:** **SARIF** = Static Analysis Results Interchange Format

Standardized JSON file for security findings:
```json
{
  "results": [
    {
      "ruleId": "CVE-2024-1234",
      "level": "error",
      "message": "Critical vulnerability in library X",
      "locations": [{ "physicalLocation": { "uri": "Dockerfile" } }]
    }
  ]
}
```

**Why upload to GitHub:**
- GitHub Security tab displays vulnerabilities
- Tracks trends over time
- Cross-references with code locations
- Enables alerts & notifications
- Compliance & audit trail

**Your Pipeline:**
```yaml
- Trivy generates SARIF
- Upload to GitHub Security API
- Team sees findings in Security → Vulnerabilities tab
```

---

## **PIPELINE ARCHITECTURE**

### **Q15: Describe your CI/CD pipeline architecture.**

**A:** 

**Pipeline Structure:**
```
        ┌─────────────────────────────────────┐
        │  On: Push to main / PR / Scheduled  │
        └──────────┬──────────────────────────┘
                   │
        ┌──────────▼──────────┐
        │  Concurrency Check  │ (cancel old runs)
        └──────────┬──────────┘
                   │
    ┌──────────────┼──────────────┐
    │              │              │
    ▼              ▼              ▼
 LINT          TEST           BUILD
 (10min)       (15min)        (15min)
 │              │              │
 └──────────────┬──────────────┘
                │
                ▼
            DOCKER (needs: lint,test,build)
            - Build image
            - Trivy gate (HIGH,CRITICAL)
            - Generate SARIF
            - Push to GHCR (if main branch)
            
    (Nightly 2 AM UTC)
                │
                ▼
         SECURITY-REPORT
         - Full Trivy scan
         - All severities
         - Upload SARIF
         - Generate artifact
```

**Key Design Decisions:**

1. **Parallel Jobs** (lint, test, build)
   - Don't wait for one to complete
   - Faster feedback (all 3 run at once, takes 15min not 40min)

2. **Docker Depends on All Three**
   - Only build image if code passes lint/test/build
   - Catch issues before containerization

3. **Two Scanning Strategies**
   - Push scan: Fast, blocking HIGH+CRITICAL only
   - Nightly scan: Comprehensive, all severities, trends

4. **Conditional Push to GHCR**
   - Only push if: main branch + push event
   - Don't push on PRs or scheduled runs
   - Saves storage and bandwidth

---

### **Q16: Why use matrix builds vs. separate jobs?**

**A:** Your pipeline uses **separate jobs** (not matrix):

**Separate Jobs (Your Approach):**
```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
  test:
    runs-on: ubuntu-latest
  build:
    runs-on: ubuntu-latest
```
- ✅ Clear, readable
- ✅ Easy to troubleshoot
- ✅ Different timeouts per job
- ❌ More YAML code

**Matrix Approach:**
```yaml
strategy:
  matrix:
    node-version: [18, 20]
    tests: [unit, integration]
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{ matrix }}
```
- ✅ Test multiple versions automatically
- ✅ Less code repetition
- ❌ Harder to debug
- Use case: Testing across Node 18/20/22

**Your Choice:**
Separate jobs are better for your pipeline because:
- Different steps (lint != test != build)
- Each has specific dependencies
- Easier to maintain

---

### **Q17: What's the purpose of `needs` in your pipeline?**

**A:** `needs` specifies job dependencies:

```yaml
docker:
  needs: [lint, test, build]  # Wait for all three
```

**Without `needs`:**
```
- All jobs run in parallel, ignore results
- Docker job might run before tests finish
- Building container with untested code ❌
```

**With `needs`:**
```
- Lint, test, build run in parallel
- Docker waits for ALL three to succeed
- Only builds if code is validated ✅
```

**Failure Cascade:**
```
If lint fails → docker doesn't run (blocked at dependency)
If test fails → docker doesn't run (blocked at dependency)
If build fails → docker doesn't run (blocked at dependency)
```

---

## **TROUBLESHOOTING & DEBUGGING**

### **Q18: Your pipeline failed with "Cannot find package jsdom". How would you debug this?**

**A:** **Debugging Process:**

```
Step 1: Read error message
├─ "Cannot find package 'jsdom'"
├─ Location: vitest trying to load jsdom
└─ Root cause: Package not installed

Step 2: Check local environment
├─ npm list jsdom → returns "not installed"
└─ But vite.config.ts specifies jsdom environment

Step 3: Check package.json
├─ devDependencies section
└─ jsdom not listed

Step 4: Root cause analysis
├─ Local might work (cached from before)
├─ CI runs npm ci (clean install)
├─ package-lock.json doesn't include jsdom
└─ CI environment missing package

Step 5: Fix
├─ Add "jsdom": "^24.0.0" to devDependencies
├─ Run npm install locally
├─ Commit package.json + package-lock.json
└─ CI will install jsdom

Step 6: Verify
├─ npm run test:ci (local test)
└─ git push (trigger CI)
```

**Key Learning:**
> "Test your CI commands locally before pushing."

---

### **Q19: Your Trivy action failed with "unable to find version 0.24.0". How debugging?**

**A:**

```
Error Message:
"Unable to resolve action `aquasecurity/trivy-action@0.24.0`,
 unable to find version `0.24.0`"

This means:
- GitHub Actions can't find that version
- Version doesn't exist or was removed
```

**Debugging:**

```
Step 1: Check action documentation
├─ Visit github.com/aquasecurity/trivy-action
├─ Check releases tab
└─ Find valid versions

Step 2: Identify pattern
├─ Latest: v0.35.0 (with 'v' prefix)
├─ Older versions: v0.28.0, v0.29.0, etc.
├─ Attempted: 2.0.0, 0.24.0 (don't exist)
└─ Pattern: all versions use 'v' prefix

Step 3: Fix
├─ Change @0.24.0 → @v0.35.0
└─ Commit and push

Step 4: Verify
├─ Check CI logs for action resolution
└─ Should show action downloaded successfully
```

**Lesson:**
> "When GitHub Actions fail to resolve an action, check the repo's releases page for valid versions."

---

### **Q20: Your pipeline blocked deployment but SARIF report didn't run. What happened?**

**A:** 

**Scenario:**
```
Trivy gate ran: exit-code 1 (found HIGH vulnerability)
SARIF report step: didn't run (pipeline stopped)
Error: "Path does not exist: trivy-results.sarif"
```

**Root Cause:**
```yaml
# ❌ OLD (broken)
- name: Trivy gate
  uses: aquasecurity/trivy-action@v0.35.0
  with:
    exit-code: '1'    # Stop pipeline if vulnerabilities found

- name: Trivy SARIF  # This step skipped because gate failed
  uses: aquasecurity/trivy-action@v0.35.0
```

**Fix:**
```yaml
# ✅ NEW (working)
- name: Trivy gate
  continue-on-error: true  # Don't stop, allow next step
  uses: aquasecurity/trivy-action@v0.35.0
  with:
    exit-code: '1'

- name: Trivy SARIF  # NOW RUNS even if gate failed
  uses: aquasecurity/trivy-action@v0.35.0
```

**Why it matters:**
- Gate blocks deployment ✅ (security)
- Report runs ✅ (visibility)
- Team sees issues ✅ (actionable)

---

### **Q21: A developer asks "Why did lint fail?" - How do you help them debug?**

**A:** **Structured Debugging:**

```
Step 1: Run locally
Dev: npm run lint
← Shows exact same errors as CI

Step 2: Fix lint errors
Options:
a) Fix manually (understand the issue)
b) npm run lint -- --fix (auto-fix simple issues)

Step 3: Stage & test again
Dev: npm run lint (verify no errors)

Step 4: Commit & push
Dev: git add . && git commit && git push
CI: Lint step passes, continues to test/build
```

**Common Lint Issues & Fixes:**

| Error | Fix | Why |
|-------|-----|-----|
| `line 5: unused variable` | Remove it or use `// eslint-disable` | Cleanup, prevents confusion |
| `missing dependency in useEffect` | Add to dependency array | Prevents stale closure bugs |
| `require() import forbidden` | Use `import` or add eslint-disable | Consistency with ES6 modules |
| `export multiple types` | Add eslint-disable comment | Document why rule is broken |

---

## **REAL-WORLD SCENARIO QUESTIONS**

### **Q22: "You're on-call and production is down. The last CI had a failing build that was ignored. How do you prevent this?"**

**A:** 

**Problem:**
- Build-step output was ignored
- Bad code shipped to production
- On-call incident

**Solution (3-layer approach):**

```
Layer 1: Fail fast in CI
├─ build job has exit-code: 1 (explicit failure)
├─ Pipeline shows red ✗ (visual)
└─ Merge blocked (GitHub requires CI pass)

Layer 2: Prevent merge
├─ Add branch protection rule
├─ Require CI status checks to pass
├─ Require code review approval
└─ Prevent force-push

Layer 3: Monitor merge
├─ Slack notification on failed CI
├─ Alert on build failures
├─ Daily digest of failed builds
└─ Follow up with developers
```

**Code:**
```yaml
# GitHub branch protection (Settings → Rules → Add rule)
- Require status checks to pass before merging
- Dismiss stale pull request approvals
- Require code review (1+ approvals)
```

---

### **Q23: "You need to run security scans nightly. Design it."**

**A:** **Your actual implementation:**

```yaml
schedule:
  - cron: '0 2 * * *'  # 2 AM UTC daily

security-report:
  if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'
  runs-on: ubuntu-latest
  steps:
    - Checkout
    - Build image
    - Trivy full scan (all severities)
    - Upload SARIF
    - Generate artifact
```

**Design Decisions:**

1. **Separate `security-report` job**
   - Doesn't block deployment
   - Runs independently on schedule
   - Doesn't compete with push scans

2. **2 AM UTC timing**
   - Off-peak hours (fewer deployments)
   - Results ready by morning
   - Low impact on resources

3. **Full-severity scan**
   - Push scan only checks HIGH+CRITICAL (fast)
   - Nightly checks LOW+MEDIUM+HIGH+CRITICAL (comprehensive)
   - Tracks trends over time

4. **Non-blocking (`exit-code: 0`)**
   - Don't prevent ongoing deployments
   - Just inform & track
   - Team reviews next morning

**Benefits:**
- ✅ Comprehensive security audit
- ✅ Shift-left security (find issues early)
- ✅ Compliance & audit trail
- ✅ Team awareness of vulnerabilities

---

## **SUMMARY: Interview Talking Points**

When asked about your CI/CD pipeline, emphasize:

1. **Multi-stage approach** - Lint → Test → Build → Security → Deploy
2. **Fail fast principle** - Catch issues early, save time
3. **Parallel execution** - Jobs run simultaneously when possible
4. **Security integrated** - Scanning containerized code before deployment
5. **Soft vs. hard failures** - Block bad code but report findings
6. **Observability** - SARIF reports, GitHub Security tab, audit trails
7. **Automation** - Nightly scans, scheduled reports, notifications
8. **Trade-offs** - Velocity vs. Security vs. Visibility

**Sample Answer:**
> "Our pipeline uses a multi-stage approach: lint and test run first to catch code style and logic errors, build validates everything compiles correctly, and only then do we containerize. Docker image goes through Trivy security scanning—we hard-block on HIGH/CRITICAL vulnerabilities but still generate a report for visibility. This prevents bad code from shipping while keeping the team informed about security issues. We also run nightly comprehensive scans for trend analysis and compliance."

---

**Last Updated:** April 10, 2026  
**Pipeline Version:** v1.0 (stable with soft gate)  
**Status:** ✅ Production-ready
