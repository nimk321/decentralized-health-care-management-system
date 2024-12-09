import { InsuranceClaim } from '../src/entities/InsuranceClaim';

describe('InsuranceClaim Entity', () => {
  test('Should create a new insurance claim with all attributes', () => {
    // Arrange: Create a new InsuranceClaim instance
    const claimId = 'C001';
    const patientId = 'P001';
    const doctorId = 'D001';
    const claimAmount = 500.00;
    const status = 'Pending';
    const claim = new InsuranceClaim(claimId, patientId, doctorId, claimAmount, status);

    // Act: Retrieve claim data using getter methods
    const claimClaimId = claim.getClaimId();
    const claimPatientId = claim.getPatientId();
    const claimDoctorId = claim.getDoctorId();
    const claimClaimAmount = claim.getClaimAmount();
    const claimStatus = claim.getStatus();

    // Assert: Verify the claim data is correct
    expect(claimClaimId).toBe(claimId);
    expect(claimPatientId).toBe(patientId);
    expect(claimDoctorId).toBe(doctorId);
    expect(claimClaimAmount).toBe(claimAmount);
    expect(claimStatus).toBe(status);
  });

  test('Should update the claim amount', () => {
    // Arrange: Create a new InsuranceClaim instance
    const claim = new InsuranceClaim('C001', 'P001', 'D001', 500.00, 'Pending');

    // Act: Update the claim amount
    const newClaimAmount = 600.00;
    claim.setClaimAmount(newClaimAmount);

    // Assert: Verify that the claim amount was updated
    expect(claim.getClaimAmount()).toBe(newClaimAmount);
  });

  test('Should update the claim status', () => {
    // Arrange: Create a new InsuranceClaim instance
    const claim = new InsuranceClaim('C001', 'P001', 'D001', 500.00, 'Pending');

    // Act: Update the claim status
    const newStatus = 'Approved';
    claim.setStatus(newStatus);

    // Assert: Verify that the claim status was updated
    expect(claim.getStatus()).toBe(newStatus);
  });

  test('Should print message when submitting the claim', () => {
    // Arrange: Create a new InsuranceClaim instance
    const claim = new InsuranceClaim('C001', 'P001', 'D001', 500.00, 'Pending');
    
    // Spy on the console.log method
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act: Call submitClaim method
    claim.submitClaim();

    // Assert: Verify that the submit message is logged
    expect(logSpy).toHaveBeenCalledWith('Claim ID C001 has been submitted for patient ID P001.');

    // Clean up spy
    logSpy.mockRestore();
  });

  test('Should verify coverage and return true', () => {
    // Arrange: Create a new InsuranceClaim instance
    const claim = new InsuranceClaim('C001', 'P001', 'D001', 500.00, 'Pending');
    
    // Spy on the console.log method
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act: Call verifyCoverage method
    const coverageVerified = claim.verifyCoverage();

    // Assert: Verify that the coverage verification message is logged
    expect(logSpy).toHaveBeenCalledWith('Verifying coverage for claim ID C001');

    // Assert: Verify the return value of verifyCoverage
    expect(coverageVerified).toBe(true);

    // Clean up spy
    logSpy.mockRestore();
  });
});
