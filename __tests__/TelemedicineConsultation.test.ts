import { TelemedicineConsultation } from '../src/entities/TelemedicineConsultation';

describe('TelemedicineConsultation Entity', () => {
  test('Should create a new telemedicine consultation with all attributes', () => {
    // Arrange: Create a new TelemedicineConsultation instance
    const consultationId = 'C001';
    const patientId = 'P001';
    const doctorId = 'D001';
    const dateTime = new Date('2024-11-01T10:00:00Z');
    const notes = 'Initial consultation for cold symptoms';
    const consultation = new TelemedicineConsultation(consultationId, patientId, doctorId, dateTime, notes);

    // Act: Retrieve consultation data using getter methods
    const consultationConsultationId = consultation.getConsultationId();
    const consultationPatientId = consultation.getPatientId();
    const consultationDoctorId = consultation.getDoctorId();
    const consultationDateTime = consultation.getDateTime();
    const consultationNotes = consultation.getNotes();

    // Assert: Verify the consultation data is correct
    expect(consultationConsultationId).toBe(consultationId);
    expect(consultationPatientId).toBe(patientId);
    expect(consultationDoctorId).toBe(doctorId);
    expect(consultationDateTime).toEqual(dateTime);
    expect(consultationNotes).toBe(notes);
  });

  test('Should update consultation date and time', () => {
    // Arrange: Create a new TelemedicineConsultation instance
    const consultation = new TelemedicineConsultation('C001', 'P001', 'D001', new Date('2024-11-01T10:00:00Z'), 'Initial consultation for cold symptoms');

    // Act: Update the date and time
    const newDateTime = new Date('2024-11-02T14:00:00Z');
    consultation.setDateTime(newDateTime);

    // Assert: Verify that the date and time were updated
    expect(consultation.getDateTime()).toEqual(newDateTime);
  });

  test('Should update consultation notes', () => {
    // Arrange: Create a new TelemedicineConsultation instance
    const consultation = new TelemedicineConsultation('C001', 'P001', 'D001', new Date('2024-11-01T10:00:00Z'), 'Initial consultation for cold symptoms');

    // Act: Update the consultation notes
    const newNotes = 'Follow-up consultation for persistent cough';
    consultation.setNotes(newNotes);

    // Assert: Verify that the notes were updated
    expect(consultation.getNotes()).toBe(newNotes);
  });

  test('Should print message when initiating consultation', () => {
    // Arrange: Create a new TelemedicineConsultation instance
    const consultation = new TelemedicineConsultation('C001', 'P001', 'D001', new Date('2024-11-01T10:00:00Z'), 'Initial consultation for cold symptoms');

    // Spy on the console.log method
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act: Call initiateConsultation method
    consultation.initiateConsultation();

    // Assert: Verify that the consultation initiation message is logged
    expect(logSpy).toHaveBeenCalledWith('Consultation ID C001 has been initiated.');

    // Clean up spy
    logSpy.mockRestore();
  });

  test('Should print message when recording consultation', () => {
    // Arrange: Create a new TelemedicineConsultation instance
    const consultation = new TelemedicineConsultation('C001', 'P001', 'D001', new Date('2024-11-01T10:00:00Z'), 'Initial consultation for cold symptoms');

    // Spy on the console.log method
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act: Call recordConsultation method
    consultation.recordConsultation();

    // Assert: Verify that the consultation recording message is logged
    expect(logSpy).toHaveBeenCalledWith('Recording notes for consultation ID C001');

    // Clean up spy
    logSpy.mockRestore();
  });
});
