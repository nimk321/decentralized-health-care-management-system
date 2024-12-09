import { EHR } from '../src/entities/EHR';

describe('EHR Entity', () => {
  test('Should create a new EHR with all attributes', () => {
    // Arrange: Create a new EHR instance
    const recordId = '1';
    const patientId = '1';
    const medicalHistory = 'Previous surgery';
    const allergies = ['Penicillin', 'Dust'];
    const medications = ['Aspirin', 'Ibuprofen'];
    const ehr = new EHR(recordId, patientId, medicalHistory, allergies, medications);

    // Act: Retrieve EHR data using getter methods
    const ehrRecordId = ehr.getRecordId();
    const ehrPatientId = ehr.getPatientId();
    const ehrMedicalHistory = ehr.getMedicalHistory();
    const ehrAllergies = ehr.getAllergies();
    const ehrMedications = ehr.getMedications();

    // Assert: Verify the EHR data is correct
    expect(ehrRecordId).toBe(recordId);
    expect(ehrPatientId).toBe(patientId);
    expect(ehrMedicalHistory).toBe(medicalHistory);
    expect(ehrAllergies).toEqual(allergies);
    expect(ehrMedications).toEqual(medications);
  });

  test('Should update the medical history of the EHR', () => {
    // Arrange: Create a new EHR instance
    const ehr = new EHR('1', '1', 'Previous surgery', ['Penicillin'], ['Aspirin']);

    // Act: Update medical history
    const newMedicalHistory = 'Heart condition';
    ehr.setMedicalHistory(newMedicalHistory);

    // Assert: Verify that the medical history was updated
    expect(ehr.getMedicalHistory()).toBe(newMedicalHistory);
  });

  test('Should update the allergies of the EHR', () => {
    // Arrange: Create a new EHR instance
    const ehr = new EHR('1', '1', 'Previous surgery', ['Penicillin'], ['Aspirin']);

    // Act: Update allergies
    const newAllergies = ['Dust', 'Pollen'];
    ehr.setAllergies(newAllergies);

    // Assert: Verify that the allergies were updated
    expect(ehr.getAllergies()).toEqual(newAllergies);
  });

  test('Should update the medications of the EHR', () => {
    // Arrange: Create a new EHR instance
    const ehr = new EHR('1', '1', 'Previous surgery', ['Penicillin'], ['Aspirin']);

    // Act: Update medications
    const newMedications = ['Paracetamol', 'Ibuprofen'];
    ehr.setMedications(newMedications);

    // Assert: Verify that the medications were updated
    expect(ehr.getMedications()).toEqual(newMedications);
  });

  test('Should print message when updating the record', () => {
    // Arrange: Create a new EHR instance
    const ehr = new EHR('1', '1', 'Previous surgery', ['Penicillin'], ['Aspirin']);
    
    // Spy on the console.log method
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act: Call updateRecord method
    ehr.updateRecord();

    // Assert: Verify that the update message is logged
    expect(logSpy).toHaveBeenCalledWith('Updating record ID 1');

    // Clean up spy
    logSpy.mockRestore();
  });

  test('Should print message when granting access to the record', () => {
    // Arrange: Create a new EHR instance
    const ehr = new EHR('1', '1', 'Previous surgery', ['Penicillin'], ['Aspirin']);
    
    // Spy on the console.log method
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act: Call grantAccess method
    ehr.grantAccess();

    // Assert: Verify that the access message is logged
    expect(logSpy).toHaveBeenCalledWith('Granting access to record ID 1');

    // Clean up spy
    logSpy.mockRestore();
  });
});
