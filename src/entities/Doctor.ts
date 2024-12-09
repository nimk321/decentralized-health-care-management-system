export class Doctor {
    private doctorId: string;
    private name: string;
    private specialization: string;
    private email: string;
    private phone: string;

    constructor(doctorId: string, name: string, specialization: string, email: string, phone: string) {
        this.doctorId = doctorId;
        this.name = name;
        this.specialization = specialization;
        this.email = email;
        this.phone = phone;
    }

    public getDoctorId(): string {
        return this.doctorId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public getSpecialization(): string {
        return this.specialization;
    }

    public setSpecialization(newSpecialization: string): void {
        this.specialization = newSpecialization;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(newEmail: string): void {
        this.email = newEmail;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(newPhone: string): void {
        this.phone = newPhone;
    }

    public viewPatientRecords(): void {
        console.log(`${this.name} is viewing patient records.`);
    }

    public initiateConsultation(patientId: string): void {
        console.log(`Initiating consultation with patient ID: ${patientId}`);
    }

    public issuePrescription(patientId: string, medication: string): void {
        console.log(`Issuing prescription for patient ID: ${patientId}`);
    }
}
