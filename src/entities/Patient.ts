export class Patient {
    private patientId: string;
    private name: string;
    private dateOfBirth: Date;
    private email: string;
    private phone: string;

    constructor(patientId: string, name: string, dateOfBirth: Date, email: string, phone: string) {
        this.patientId = patientId;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phone = phone;
    }

    public getPatientId(): string {
        return this.patientId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public getDateOfBirth(): Date {
        return this.dateOfBirth;
    }

    public setDateOfBirth(newDateOfBirth: Date): void {
        this.dateOfBirth = newDateOfBirth;
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

    public accessEHR(): void {
        console.log(`Accessing EHR for patient ${this.name}`);
    }

    public requestConsultation(): void {
        console.log(`${this.name} is requesting a consultation.`);
    }

    public submitInsuranceClaim(): void {
        console.log(`${this.name} is submitting an insurance claim.`);
    }
}
