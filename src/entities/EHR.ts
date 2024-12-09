export class EHR {
    private recordId: string;
    private patientId: string;
    private medicalHistory: string;
    private allergies: string[];
    private medications: string[];

    constructor(recordId: string, patientId: string, medicalHistory: string, allergies: string[], medications: string[]) {
        this.recordId = recordId;
        this.patientId = patientId;
        this.medicalHistory = medicalHistory;
        this.allergies = allergies;
        this.medications = medications;
    }

    public getRecordId(): string {
        return this.recordId;
    }

    public getPatientId(): string {
        return this.patientId;
    }

    public getMedicalHistory(): string {
        return this.medicalHistory;
    }

    public setMedicalHistory(newMedicalHistory: string): void {
        this.medicalHistory = newMedicalHistory;
    }

    public getAllergies(): string[] {
        return this.allergies;
    }

    public setAllergies(newAllergies: string[]): void {
        this.allergies = newAllergies;
    }

    public getMedications(): string[] {
        return this.medications;
    }

    public setMedications(newMedications: string[]): void {
        this.medications = newMedications;
    }

    public updateRecord(): void {
        console.log(`Updating record ID ${this.recordId}`);
    }

    public grantAccess(): void {
        console.log(`Granting access to record ID ${this.recordId}`);
    }
}
