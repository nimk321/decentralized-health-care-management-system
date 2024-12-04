# Decentralized Health Care Management System

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [CI/CD Pipeline](#cicd-pipeline)
- [Docker Integration](#docker-integration)
- [Testing](#testing)
- [Contributing](#contributing)

## Introduction

The Decentralized Health Care Management System is a TypeScript-based application designed to facilitate healthcare processes, including patient registration, telemedicine consultations, prescription management, insurance claims processing, and research data sharing. The system aims to improve accessibility and efficiency in healthcare management.

## Features

- **Patient Registration**: Register new patients and manage their profiles.
- **Telemedicine Consultation**: Conduct remote consultations between patients and doctors.
- **Prescription Management**: Issue and track prescriptions for patients.
- **Insurance Claim Processing**: Manage and submit insurance claims for reimbursement.
- **Research Data Sharing**: Share anonymized patient data for research purposes.

## Technologies Used

- **TypeScript**: For building the application logic.
- **Node.js**: For running the backend services.
- **Jest**: For unit testing.
- **GitHub Actions**: For automating the CI/CD pipeline.
- **Docker**: For containerizing the application.
- **HTML**: For front-end pages.

## Installation

1. Clone the repository:
   ```bash
   cd Desktop
   mkdir decentralized-health-care-management-system
   cd decentralized-health-care-management-system
   git clone https://github.com/nimk321/Assignment1-DevOpps.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

## Usage

To start the application, run:
```bash
npm start
```

You can also run the application in development mode using:
```bash
npm run dev
```

## Project Structure

```
/decentralized-health-care-management-system
│
├── /src                        # Source code directory
│   ├── /entities               # Contains entity classes (Patient, Doctor, EHR, etc.)
│   ├── /functions              # Contains business processes (PatientRegistration, etc.)
│   └── index.ts                # Entry point of the application
│
├── /docker                      # Docker-related files
│   ├── Dockerfile               # Docker configuration to containerize the app
│   └── .dockerignore            # Files and directories to exclude from Docker image
│
├── /tests                       # Test files for Jest
│   └── patient.test.ts          # Example Jest test file
│
├── package.json                 # Project metadata and dependencies
├── tsconfig.json                # TypeScript configuration
├── .github                      # GitHub Actions workflow files
│   └── /workflows
│       └── ci.yml               # CI/CD pipeline configuration
├── README.md                    # Project documentation
```

## CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration and deployment (CI/CD). The pipeline automates:
- **Build and Deployment**: On every push or pull request, the pipeline will:
  - Build the Docker image.
  - Run Jest tests.
  - Lint the code.
  - Compile TypeScript.
- **Automated Testing**: Jest tests are run on every code push to ensure code quality.
- **Docker Integration**: The application is containerized using Docker.

### GitHub Actions Workflow

The CI/CD pipeline is defined in `.github/workflows/ci.yml`. It performs the following actions:
1. Triggers on push and pull request events.
2. Installs dependencies and runs tests.
3. Builds a Docker image.
4. Deploys the Docker container to a cloud service (such as AWS, Kubernetes, or another service).

## Docker Integration

A `Dockerfile` is included to containerize the application. To build the Docker image, use the following command:

```bash
docker build -t healthcare-management-system .
```

To run the Docker container locally:

```bash
docker run -p 3000:3000 healthcare-management-system
```

This will map the container’s port `3000` to the host machine’s port `3000` and allow access to the application.

## Testing

This project uses **Jest** for unit testing. To run tests locally, use the following command:

```bash
npm run test
```

Tests are also automatically executed as part of the GitHub Actions pipeline.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request. Be sure to follow the contribution guidelines and ensure that tests are updated when modifying functionality.

---