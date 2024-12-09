import { Doctor } from '../src/entities/Doctor';

describe('Doctor Entity', () => {
  test('Should create a new doctor with all attributes', () => {
    // Arrange: Create a new doctor instance
    const doctor = new Doctor('1', 'Dr. Alice Smith', 'Cardiology', 'alice.smith@example.com', '987-654-3210');

    // Act: Retrieve doctor data using getter methods
    const doctorId = doctor.getDoctorId();
    const doctorName = doctor.getName();
    const doctorSpecialization = doctor.getSpecialization();
    const doctorEmail = doctor.getEmail();
    const doctorPhone = doctor.getPhone();

    // Assert: Verify the doctor data is correct
    expect(doctorId).toBe('1');
    expect(doctorName).toBe('Dr. Alice Smith');
    expect(doctorSpecialization).toBe('Cardiology');
    expect(doctorEmail).toBe('alice.smith@example.com');
    expect(doctorPhone).toBe('987-654-3210');
  });
});
