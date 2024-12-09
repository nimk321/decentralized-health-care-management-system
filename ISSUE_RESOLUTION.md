# Issue Resolution

This document aims to help developers troubleshoot common issues encountered while setting up and running the Decentralized Healthcare Management System (DHMS) project.

## Table of Contents
1. [TypeScript Compilation Issues](#typescript-compilation-issues)
2. [Module Import Errors](#module-import-errors)
3. [Node Environment Errors](#node-environment-errors)
4. [Docker Setup Issues](#docker-setup-issues)
5. [Common Testing Issues](#common-testing-issues)
6. [Dependency Errors](#dependency-errors)

### 1. TypeScript Compilation Issues

**Error:** `Unknown file extension ".ts"`  
**Solution:** Ensure that TypeScript is compiled before running the app. Run `npx tsc` to compile TypeScript files to JavaScript. To avoid this error, always use the `ts-node` command when running `.ts` files.

### 2. Module Import Errors

**Error:** `SyntaxError: Cannot use import statement outside a module`  
**Solution:** Update your `tsconfig.json` file by setting `"module": "commonjs"` and `"esModuleInterop": true` to ensure compatibility. Make sure that the `type` field in `package.json` is set to `"module"`.

**Error:** `MODULE_NOT_FOUND` for imports like `import { Patient } from '../src/entities/Patient';`  
**Solution:** Verify the import path and confirm that the file exists in the specified directory. If the issue persists, try running `npx ts-node` instead of `node` for TypeScript files.

### 3. Node Environment Errors

**Error:** `Unknown file extension ".ts"` when running the entry file with Node.js  
**Solution:** TypeScript files should be run with `ts-node` instead of `node`. To start the project, use `npx ts-node src/index.ts`.

### 4. Docker Setup Issues

**Error:** `Cannot connect to the Docker daemon`  
**Solution:** Ensure Docker is installed and running on your machine. If you’re using Windows or Mac, open Docker Desktop. For Linux, verify that Docker is running by executing `sudo systemctl start docker`.

**Error:** `Dockerfile not found`  
**Solution:** Ensure that the `Dockerfile` is in the root of your project directory or specify the correct path when building the Docker image. Use the command `docker build -t my-app .` from the root directory.

### 5. Common Testing Issues

**Error:** `SyntaxError: Unexpected token import` while running Jest tests  
**Solution:** Jest does not support ES module syntax by default. To resolve this, add `"type": "module"` in `package.json` and use Babel or switch to CommonJS syntax for compatibility.

### 6. Dependency Errors

**Error:** `Cannot find module 'express'` or other installed packages  
**Solution:** Run `npm install` to ensure all dependencies are correctly installed. If the issue persists, delete `node_modules` and `package-lock.json` files and reinstall dependencies with `npm install`.

---

Each section addresses a specific error or issue, including a brief description of the problem and a solution to resolve it. This guide should help streamline troubleshooting during development!
