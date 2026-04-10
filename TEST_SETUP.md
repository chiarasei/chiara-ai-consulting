# Testing Setup Guide

## Overview
This document outlines the complete testing setup journey for the Chiara AI Consulting project, including all issues encountered and solutions implemented.

## Initial Setup

### Configuration Files
- **vite.config.ts**: Added Vitest configuration with jsdom environment
- **package.json**: Added testing dependencies and test scripts
- **src/setupTests.js**: Created test setup file with necessary mocks

### Scripts Added
```json
{
  "test": "vitest",
  "test:ci": "vitest run"
}
```

## Issues Encountered & Solutions

### Issue 1: Syntax Errors in vite.config.ts
**Problem**: File had corrupted quotes and duplicate configuration blocks
**Solution**: 
- Removed extra double quotes throughout the file
- Fixed imports (removed duplicates)
- Properly formatted the configuration object

**Fixed Config**:
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
}));
```

### Issue 2: Missing Plugin Dependencies
**Problem**: vite.config.ts imported `@vitejs/plugin-react-swc` but package.json had different version
**Solution**: 
- Changed import to `@vitejs/plugin-react`
- Updated package.json to match: `"@vitejs/plugin-react": "^4.7.0"`

### Issue 3: Version Conflicts
**Problem**: npm had vite@8.0.8 which was incompatible with @vitejs/plugin-react (requires ^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0)
**Solution**: Downgraded vite to v7.x
```bash
npm install vite@^7.0.0 --save-dev
```

### Issue 4: Security Vulnerabilities
**Problem**: 2 moderate vulnerabilities in esbuild (transitive via vite)
**Solution**: Downgrading vite to v7 resolved the vulnerabilities
```bash
npm audit  # Result: 0 vulnerabilities
```

### Issue 5: Missing Testing Library
**Problem**: Test file imported `@testing-library/react` which wasn't installed
**Solution**: Added to devDependencies
```json
{
  "@testing-library/react": "^14.1.2",
  "@testing-library/jest-dom": "^6.1.5"
}
```

### Issue 6: window.matchMedia is not a function
**Problem**: Sonner (toast library) needs `window.matchMedia` which doesn't exist in jsdom test environment
**Solution**: Added mock to setupTests.js
```typescript
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
```

### Issue 7: IntersectionObserver is not defined
**Problem**: use-scroll-fade.ts hook uses IntersectionObserver which doesn't exist in jsdom
**Solution**: Added mock to setupTests.js
```typescript
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {}
  unobserve() {}
};
```

## Final Setup

### src/setupTests.js
```javascript
import { vi } from 'vitest';

// Mock window.matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {}
  unobserve() {}
};
```

### Test File Structure
```
src/
├── App.test.jsx          # Main app test
└── setupTests.js         # Test configuration & mocks
```

## Running Tests

```bash
# Run tests in watch mode
npm run test

# Run tests once (CI mode)
npm run test:ci
```

## Test Status
- ✅ App.test.jsx - renders without crashing: **PASSED**
- ✅ All 1 test passing
- ✅ 0 vulnerabilities

## Key Learnings

1. **jsdom Environment**: Missing browser APIs like matchMedia and IntersectionObserver need mocks
2. **Version Compatibility**: Always check package compatibility before updating major versions
3. **Security First**: Fix vulnerabilities at the source (vite) rather than ignoring them
4. **Setup Files**: Essential for providing common mocks and utilities for all tests

## Dependencies Added
- vitest@^4.1.4 - Test runner
- @testing-library/react@^14.1.2 - React testing utilities
- @testing-library/jest-dom@^6.1.5 - DOM matchers

## Next Steps
- Add more comprehensive tests for components
- Test edge cases and error scenarios
- Set up CI/CD pipeline to run tests automatically
