# Decentralized Health Care Management System

This project is a TypeScript-based application for managing decentralized healthcare processes. It includes various entities such as Patients, Doctors, EHR (Electronic Health Records), Insurance Claims, and Telemedicine Consultations. The application supports key healthcare processes like patient registration, insurance claim processing, prescription management, and more.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Configuration Files](#configuration-files)
6. [Running the Application](#running-the-application)
7. [Testing](#testing)
8. [Docker Setup](#docker-setup)
9. [CI/CD](#cicd)
10. [Common Issues & Resolution](#common-issues-resolution)
11. [License](#license)

## Project Overview

The Decentralized Health Care Management System (DHMS) is designed to improve healthcare operations by decentralizing critical healthcare processes. The system allows for secure management of patient data, insurance claims, prescriptions, and telemedicine consultations.

The application is structured using TypeScript and leverages modern development tools and practices, including Jest for testing and Docker for containerization.

## Features

- **Patient Registration**: Efficient management of patient data, including registration and verification.
- **Insurance Claim Processing**: Handling of insurance claim submissions, verification, and processing.
- **Prescription Management**: Managing prescriptions issued by doctors and tracking their status.
- **Telemedicine Consultations**: Facilitates online consultations between patients and doctors.
- **Research Data Sharing**: Anonymized data sharing for medical research.

## Getting Started

To get started with the project, clone the repository and install the dependencies.

### Prerequisites

- Node.js (>=14.x)
- npm or yarn (for managing dependencies)
- Docker (for containerized deployments, optional)
- TypeScript (>=4.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nimk321/decentralized-health-care-management-system.git
   cd decentralized-health-care-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Or with yarn:

   ```bash
   yarn install
   ```

### Configuration

Set up environment variables by creating a `.env` file in the root directory, as required by the application.

```env
# Example environment variables
DATABASE_URL=mongodb://localhost:27017/dhms
PORT=3000
```

## Project Structure

The project is organized as follows:

```
decentralized-health-care-management-system/
├── .github/
│   └── workflows/
│       └── ci.yml                     # GitHub Actions CI configuration
├── __tests__/                          # Test files
│   ├── Doctor.test.ts                  # Unit tests for Doctor entity
│   ├── EHR.test.ts                     # Unit tests for EHR entity
│   ├── InsuranceClaim.test.ts          # Unit tests for InsuranceClaim entity
│   ├── Patient.test.ts                 # Unit tests for Patient entity
│   ├── Prescription.test.ts            # Unit tests for Prescription entity
│   └── TelemedicineConsultation.test.ts # Unit tests for TelemedicineConsultation entity
├── docker/                             # Docker configuration
│   ├── .dockerignore                   # Files to ignore during Docker image build
│   └── Dockerfile                      # Dockerfile for creating Docker image
├── src/                                # Source files for the project
│   ├── entities/                       # Entity classes for the project
│   │   ├── Doctor.ts                   # Doctor entity definition
│   │   ├── EHR.ts                      # EHR (Electronic Health Record) entity definition
│   │   ├── InsuranceClaim.ts           # InsuranceClaim entity definition
│   │   ├── Patient.ts                  # Patient entity definition
│   │   ├── Prescription.ts             # Prescription entity definition
│   │   └── TelemedicineConsultation.ts # TelemedicineConsultation entity definition
│   ├── functions/                      # Business logic functions for healthcare processes
│   │   ├── InsuranceClaimProcessing.ts # Logic for processing insurance claims
│   │   ├── PatientRegistration.ts      # Logic for patient registration
│   │   ├── PrescriptionManagement.ts   # Logic for managing prescriptions
│   │   ├── ResearchDataSharing.ts      # Logic for sharing research data
│   │   └── TelemedicineConsultation.ts # Logic for handling telemedicine consultations
│   ├── index.ts                        # Main entry point for the application
├── .gitignore                          # Git ignore file for the repository
├── ISSUE_RESOLUTION.md                 # Troubleshooting guide for common issues
├── README.md                           # Project overview and documentation
├── index.html                          # Index HTML file (if applicable, for front-end)
├── package-lock.json                   # npm lock file for project dependencies
├── package.json                        # npm package configuration and dependencies
└── tsconfig.json                       # TypeScript configuration file
```

## Configuration Files

- **`.gitignore`**: Specifies which files and directories should be ignored by Git, including `node_modules`, build outputs, and environment files.
- **`tsconfig.json`**: Configures TypeScript compilation options. It sets `module` to `commonjs` and enables strict type checking.
- **`package.json`**: Contains the project's dependencies, scripts, and metadata.
- **`ci.yml`**: Defines the CI pipeline using GitHub Actions. It runs tests on every push or pull request to the `main` branch.

## Running the Application

1. Compile TypeScript files:

   ```bash
   npx tsc
   ```

2. Start the application:

   ```bash
   npm start
   ```

   Or with Yarn:

   ```bash
   yarn start
   ```

3. Access the application at `http://localhost:3000` (or the port you set in the `.env` file).

## Testing

This project uses Jest for testing. To run the tests:

1. Run the tests using npm:

   ```bash
   npm test
   ```

2. Run tests using yarn:

   ```bash
   yarn test
   ```

Test results will be displayed in the console.

## Docker Setup

1. Build the Docker image:

   ```bash
   docker build -t dhms .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 dhms
   ```

The application will be accessible at `http://localhost:3000`.

## CI/CD

This project uses GitHub Actions for continuous integration and deployment (CI/CD). The `ci.yml` file in the `.github/workflows/` directory defines the CI pipeline, which runs on every push or pull request to the `main` branch. It installs dependencies, runs tests, and deploys the application to production if tests pass.

## Common Issues & Resolution

For troubleshooting common issues, refer to the `ISSUE_RESOLUTION.md` file, which includes solutions for issues related to TypeScript compilation, module imports, Node.js environment, Docker, testing, and dependency errors.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
```