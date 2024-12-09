export class Prescription {
    private prescriptionId: string;
    private doctorId: string;
    private patientId: string;
    private medicationDetails: string;
    private issueDate: Date;

    constructor(prescriptionId: string, doctorId: string, patientId: string, medicationDetails: string, issueDate: Date) {
        this.prescriptionId = prescriptionId;
        this.doctorId = doctorId;
        this.patientId = patientId;
        this.medicationDetails = medicationDetails;
        this.issueDate = issueDate;
    }

    public getPrescriptionId(): string {
        return this.prescriptionId;
    }

    public getDoctorId(): string {
        return this.doctorId;
    }

    public getPatientId(): string {
        return this.patientId;
    }

    public getMedicationDetails(): string {
        return this.medicationDetails;
    }

    public setMedicationDetails(newMedicationDetails: string): void {
        this.medicationDetails = newMedicationDetails;
    }

    public getIssueDate(): Date {
        return this.issueDate;
    }

    public setIssueDate(newIssueDate: Date): void {
        this.issueDate = newIssueDate;
    }

    public verifyPrescription(): boolean {
        console.log(`Verifying prescription ID ${this.prescriptionId} for patient ID ${this.patientId}`);
    
        return true; // Assume prescription is verified
    }

    public trackMedication(): void {
        console.log(`Tracking medication for prescription ID ${this.prescriptionId}`);
    
    }
}

