import { Patient } from '../entities/Patient';

export class PatientRegistration {
    public registerPatient(patient: Patient): void {
        console.log(`Patient registration completed for ${patient.getPatientId()}`);
    }

    public verifyRegistration(patient: Patient): boolean {
        console.log(`Verifying registration for ${patient.getPatientId()}`);
        return true; // Assume registration is verified
    }
}
