import { Patient } from '../entities/Patient';

export class ResearchDataSharing {
    public requestDataSharingConsent(patient: Patient): void {
        console.log(`Requested consent from patient ${patient.getName()} for data sharing.`);
    }

    public shareAnonymizedData(): void {
        console.log(`Anonymized patient data shared for research purposes.`);
    }
}

