import { InsuranceClaim } from '../entities/InsuranceClaim';
import { Patient } from '../entities/Patient';

export class InsuranceClaimProcessing {
    public submitClaim(claim: InsuranceClaim, patient: Patient): void {
        claim.submitClaim();
        console.log(`Claim submitted for patient ${patient.getName()}`);
    }

    public verifyClaim(claim: InsuranceClaim): boolean {
        const isVerified = claim.verifyCoverage();
        console.log(`Claim ID ${claim.getClaimId()} verification status: ${isVerified}`);
        return isVerified;
    }
}

