import { Patient } from '../src/entities/Patient';

describe('Patient Entity', () => {
  test('Should create a new patient with all attributes', () => {
    // Arrange: Create a new patient instance with all necessary attributes
    const dateOfBirth = new Date('1990-01-01');
    const patient = new Patient('1', 'John Doe', dateOfBirth, 'johndoe@example.com', '123-456-7890');

    // Act: Retrieve patient data using getter methods
    const patientId = patient.getPatientId();
    const patientName = patient.getName();
    const patientDOB = patient.getDateOfBirth();
    const patientEmail = patient.getEmail();
    const patientPhone = patient.getPhone();

    // Assert: Verify the patient data is correct
    expect(patientId).toBe('1');  // Check if the patient ID is correct
    expect(patientName).toBe('John Doe');  // Check if the patient name is correct
    expect(patientDOB).toEqual(dateOfBirth);  // Check if the date of birth matches
    expect(patientEmail).toBe('johndoe@example.com');  // Check if the email is correct
    expect(patientPhone).toBe('123-456-7890');  // Check if the phone number is correct
  });
});
