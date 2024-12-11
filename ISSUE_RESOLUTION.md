# Issue Resolution Guide

This document provides solutions for common issues encountered while setting up and running the **Decentralized Healthcare Management System (DHMS)** project.

## Table of Contents
1. [TypeScript Compilation Issues](#typescript-compilation-issues)
2. [Module Import Errors](#module-import-errors)
3. [Node Environment Errors](#node-environment-errors)
4. [Docker Setup Issues](#docker-setup-issues)
5. [Common Testing Issues](#common-testing-issues)
6. [Dependency Errors](#dependency-errors)

---

### 1. TypeScript Compilation Issues

#### **Error:** `Unknown file extension ".ts"`
**Solution:**  
Ensure TypeScript is compiled before running the app. Run the following command to compile your TypeScript files to JavaScript:
```bash
npx tsc
```
Alternatively, you can use `ts-node` for direct execution of `.ts` files:
```bash
npx ts-node src/index.ts
```
To avoid this error, ensure you use `ts-node` when running TypeScript files directly.

---

### 2. Module Import Errors

#### **Error:** `SyntaxError: Cannot use import statement outside a module`
**Solution:**  
Update your `tsconfig.json` to ensure compatibility with ES6 module imports:
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true
  }
}
```
Additionally, ensure the `type` field in your `package.json` is set to `"module"`:
```json
{
  "type": "module"
}
```
This will enable the usage of `import`/`export` syntax with CommonJS modules.

#### **Error:** `MODULE_NOT_FOUND` for imports like `import { Patient } from '../src/entities/Patient';`
**Solution:**  
Double-check the import path to ensure that the file exists in the specified directory.  
- Ensure that the file is in the correct directory (check case sensitivity).
- Confirm the file's extension (i.e., `.ts` or `.js`).
  
If the issue persists, try running the app using `ts-node`:
```bash
npx ts-node src/index.ts
```
This ensures TypeScript files are interpreted correctly.

---

### 3. Node Environment Errors

#### **Error:** `Unknown file extension ".ts"` when running the entry file with Node.js
**Solution:**  
Since Node.js cannot run TypeScript files directly, use `ts-node` to execute `.ts` files:
```bash
npx ts-node src/index.ts
```
Alternatively, you can compile the TypeScript files first and then run the compiled JavaScript using Node.js:
```bash
npx tsc
node dist/index.js
```

---

### 4. Docker Setup Issues

#### **Error:** `Cannot connect to the Docker daemon`
**Solution:**  
Ensure that Docker is installed and running on your machine.  
- **Windows/Mac:** Open Docker Desktop to ensure it is running.
- **Linux:** Check if Docker is running by executing:
```bash
sudo systemctl status docker
```
If it is not running, start Docker using:
```bash
sudo systemctl start docker
```

#### **Error:** `Dockerfile not found`
**Solution:**  
Ensure that the `Dockerfile` is present in the root of your project directory. If it is located elsewhere, specify the correct path when building the Docker image:
```bash
docker build -t my-app .
```
Ensure you are in the root project directory where `Dockerfile` is located before running the above command.

---

### 5. Common Testing Issues

#### **Error:** `SyntaxError: Unexpected token import` while running Jest tests
**Solution:**  
By default, Jest does not support ES module syntax. To resolve this issue:
- Add `"type": "module"` to `package.json`:
```json
{
  "type": "module"
}
```
- Alternatively, use CommonJS syntax in your files or configure Babel to transform ES modules for Jest compatibility.

#### **Error:** `Cannot find module 'express'` when running tests
**Solution:**  
Ensure that all dependencies are installed by running:
```bash
npm install
```
If the problem persists, delete `node_modules` and `package-lock.json`, and reinstall the dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### 6. Dependency Errors

#### **Error:** `Cannot find module 'express'` or other installed packages
**Solution:**  
Ensure that all dependencies are correctly installed by running:
```bash
npm install
```
If issues persist, remove the `node_modules` folder and the `package-lock.json` file, then run:
```bash
rm -rf node_modules package-lock.json
npm install
```
This will ensure that all packages are installed fresh and that there are no version conflicts.

---

### Additional Tips:

- **Clear Cache:** If you experience persistent errors related to `npm`, clearing the npm cache can help resolve strange issues:
  ```bash
  npm cache clean --force
  ```

- **Node Version Issues:** Ensure you're using a compatible version of Node.js. Use `nvm` (Node Version Manager) to switch between Node versions if needed:
  ```bash
  nvm use 14
  ```

## Version Control Challenges

### **Issue:**  
- **Pushing updates** to the repository's main branch was rejected.
- **Conflicts** arose due to mismatches between local and remote states.
- **Improper upstream configuration** resulted in failed synchronization attempts.

### **Cause:**  
- Local repository was **out of sync** with the remote branch.
- Remote repository contained **new changes**, leading to conflicts.
- **Upstream configuration** was incorrect, causing issues during push/pull attempts.

### **Resolution:**  
- **Fetched changes** from the remote repository:
    ```bash
    git fetch origin
    ```
- **Merged changes** into the local repository:
    ```bash
    git merge origin/main
    ```
- Resolved **merge conflicts** manually by reviewing both versions of the code:
    - Open conflicting files and choose the appropriate changes.
    - Commit the resolved files:
    ```bash
    git add <file>
    git commit -m "Resolved merge conflict"
    ```
- In rare cases, performed a **force reset**:
    ```bash
    git reset --hard origin/main
    ```

---

## 2. Continuous Integration Workflow Errors

### **Issue:**  
- Automation pipeline **failed to execute** due to misconfiguration in the CI/CD configuration file.
- Errors were primarily related to **event triggers** and **execution steps**.

### **Cause:**  
- **Improper formatting** in the configuration file.
- **Missing or incorrect event triggers** and execution steps.
  
### **Resolution:**  
- **Revised the CI configuration file** to align with platform requirements.
    - Corrected event trigger definitions and execution steps.
    - Ensured correct YAML indentation and structure.

- Example of corrected **GitHub Actions workflow** (for CI/CD):
    ```yaml
    name: CI/CD Pipeline
    on:
      push:
        branches:
          - main
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout code
            uses: actions/checkout@v2
          - name: Set up Node.js
            uses: actions/setup-node@v2
            with:
              node-version: '14'
          - name: Install dependencies
            run: npm install
          - name: Run tests
            run: npm test
    ```

- After modifications, **validated the configuration** by re-running the pipeline:
    ```bash
    # Trigger a manual workflow run on GitHub Actions
    git push origin main
---

This guide should provide you with a comprehensive approach to resolving common issues in the DHMS project. For more detailed or specific errors, please consult the relevant documentation or project maintainers.
