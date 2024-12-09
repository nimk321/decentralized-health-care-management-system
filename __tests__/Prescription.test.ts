import { Prescription } from '../src/entities/Prescription';

describe('Prescription Entity', () => {
  test('Should create a new prescription with all attributes', () => {
    // Arrange: Create a new Prescription instance
    const prescriptionId = 'P001';
    const doctorId = 'D001';
    const patientId = 'P001';
    const medicationDetails = 'Amoxicillin 500mg';
    const issueDate = new Date('2024-11-01');
    const prescription = new Prescription(prescriptionId, doctorId, patientId, medicationDetails, issueDate);

    // Act: Retrieve prescription data using getter methods
    const prescriptionPrescriptionId = prescription.getPrescriptionId();
    const prescriptionDoctorId = prescription.getDoctorId();
    const prescriptionPatientId = prescription.getPatientId();
    const prescriptionMedicationDetails = prescription.getMedicationDetails();
    const prescriptionIssueDate = prescription.getIssueDate();

    // Assert: Verify the prescription data is correct
    expect(prescriptionPrescriptionId).toBe(prescriptionId);
    expect(prescriptionDoctorId).toBe(doctorId);
    expect(prescriptionPatientId).toBe(patientId);
    expect(prescriptionMedicationDetails).toBe(medicationDetails);
    expect(prescriptionIssueDate).toEqual(issueDate);
  });

  test('Should update medication details', () => {
    // Arrange: Create a new Prescription instance
    const prescription = new Prescription('P001', 'D001', 'P001', 'Amoxicillin 500mg', new Date('2024-11-01'));

    // Act: Update the medication details
    const newMedicationDetails = 'Ibuprofen 200mg';
    prescription.setMedicationDetails(newMedicationDetails);

    // Assert: Verify that the medication details were updated
    expect(prescription.getMedicationDetails()).toBe(newMedicationDetails);
  });

  test('Should update issue date', () => {
    // Arrange: Create a new Prescription instance
    const prescription = new Prescription('P001', 'D001', 'P001', 'Amoxicillin 500mg', new Date('2024-11-01'));

    // Act: Update the issue date
    const newIssueDate = new Date('2024-12-01');
    prescription.setIssueDate(newIssueDate);

    // Assert: Verify that the issue date was updated
    expect(prescription.getIssueDate()).toEqual(newIssueDate);
  });

  test('Should print message when verifying prescription', () => {
    // Arrange: Create a new Prescription instance
    const prescription = new Prescription('P001', 'D001', 'P001', 'Amoxicillin 500mg', new Date('2024-11-01'));

    // Spy on the console.log method
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act: Call verifyPrescription method
    const result = prescription.verifyPrescription();

    // Assert: Verify that the verification message is logged
    expect(logSpy).toHaveBeenCalledWith('Verifying prescription ID P001 for patient ID P001');
    expect(result).toBe(true);

    // Clean up spy
    logSpy.mockRestore();
  });

  test('Should print message when tracking medication', () => {
    // Arrange: Create a new Prescription instance
    const prescription = new Prescription('P001', 'D001', 'P001', 'Amoxicillin 500mg', new Date('2024-11-01'));

    // Spy on the console.log method
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act: Call trackMedication method
    prescription.trackMedication();

    // Assert: Verify that the tracking message is logged
    expect(logSpy).toHaveBeenCalledWith('Tracking medication for prescription ID P001');

    // Clean up spy
    logSpy.mockRestore();
  });
});
