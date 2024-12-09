export class TelemedicineConsultation {
    private consultationId: string;
    private patientId: string;
    private doctorId: string;
    private dateTime: Date;
    private notes: string;

    constructor(consultationId: string, patientId: string, doctorId: string, dateTime: Date, notes: string) {
        this.consultationId = consultationId;
        this.patientId = patientId;
        this.doctorId = doctorId;
        this.dateTime = dateTime;
        this.notes = notes;
    }

    public getConsultationId(): string {
        return this.consultationId;
    }

    public getPatientId(): string {
        return this.patientId;
    }

    public getDoctorId(): string {
        return this.doctorId;
    }

    public getDateTime(): Date {
        return this.dateTime;
    }

    public setDateTime(newDateTime: Date): void {
        this.dateTime = newDateTime;
    }

    public getNotes(): string {
        return this.notes;
    }

    public setNotes(newNotes: string): void {
        this.notes = newNotes;
    }

    public initiateConsultation(): void {
        console.log(`Consultation ID ${this.consultationId} has been initiated.`);
    }

    public recordConsultation(): void {
        console.log(`Recording notes for consultation ID ${this.consultationId}`);
    }
}
