import { Patient } from './entities/Patient';
import { Doctor } from './entities/Doctor';
import { EHR } from './entities/EHR';
import { TelemedicineConsultation } from './entities/TelemedicineConsultation';
import { Prescription } from './entities/Prescription';
import { InsuranceClaim } from './entities/InsuranceClaim';

import { PatientRegistration } from './functions/PatientRegistration';
import { TelemedicineConsultations as TelemedicineProcess } from './functions/TelemedicineConsultation';
import { PrescriptionManagement } from './functions/PrescriptionManagement';
import { InsuranceClaimProcessing } from './functions/InsuranceClaimProcessing';
import { ResearchDataSharing } from './functions/ResearchDataSharing';

// 1. Register a new patient
const patient = new Patient("pat001", "John Doe", new Date("1990-01-01"), "johndoe@example.com", "555-1234");
const patientRegistration = new PatientRegistration();
patientRegistration.registerPatient(patient);
patientRegistration.verifyRegistration(patient);

// 2. Set up a telemedicine consultation
const doctor = new Doctor("doc001", "Dr. Smith", "Cardiology", "drsmith@example.com", "555-5678");
const teleConsultation = new TelemedicineConsultation("con001", patient.getPatientId(), doctor.getDoctorId(), new Date(), "Initial consultation notes");
const telemedicineProcess = new TelemedicineProcess();
telemedicineProcess.initiateConsultation(teleConsultation, doctor, patient);
telemedicineProcess.recordConsultation(teleConsultation, "Follow-up notes");

// 3. Issue a prescription for the patient
const prescription = new Prescription("pres001", doctor.getDoctorId(), patient.getPatientId(), "Medication details", new Date());
const prescriptionManagement = new PrescriptionManagement();
prescriptionManagement.issuePrescription(prescription, doctor, patient);
prescriptionManagement.trackMedication(prescription);

// 4. Submit an insurance claim
const insuranceClaim = new InsuranceClaim("claim001", patient.getPatientId(), doctor.getDoctorId(), 500, "Pending");
const insuranceClaimProcessing = new InsuranceClaimProcessing();
insuranceClaimProcessing.submitClaim(insuranceClaim, patient);
insuranceClaimProcessing.verifyClaim(insuranceClaim);

// 5. Request patient consent for data sharing and share anonymized data for research
const researchDataSharing = new ResearchDataSharing();
researchDataSharing.requestDataSharingConsent(patient);
researchDataSharing.shareAnonymizedData();
