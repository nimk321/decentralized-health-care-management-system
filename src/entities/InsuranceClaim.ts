export class InsuranceClaim {
    private claimId: string;
    private patientId: string;
    private doctorId: string;
    private claimAmount: number;
    private status: string;

    constructor(claimId: string, patientId: string, doctorId: string, claimAmount: number, status: string) {
        this.claimId = claimId;
        this.patientId = patientId;
        this.doctorId = doctorId;
        this.claimAmount = claimAmount;
        this.status = status;
    }

    public getClaimId(): string {
        return this.claimId;
    }

    public getPatientId(): string {
        return this.patientId;
    }

    public getDoctorId(): string {
        return this.doctorId;
    }

    public getClaimAmount(): number {
        return this.claimAmount;
    }

    public setClaimAmount(newClaimAmount: number): void {
        this.claimAmount = newClaimAmount;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(newStatus: string): void {
        this.status = newStatus;
    }

    public submitClaim(): void {
        console.log(`Claim ID ${this.claimId} has been submitted for patient ID ${this.patientId}.`);
    }

    public verifyCoverage(): boolean {
        console.log(`Verifying coverage for claim ID ${this.claimId}`);
        
        return true; 
    }
}

