import { Prescription } from '../entities/Prescription';
import { Doctor } from '../entities/Doctor';
import { Patient } from '../entities/Patient';

export class PrescriptionManagement {
    public issuePrescription(prescription: Prescription, doctor: Doctor, patient: Patient): void {
        prescription.verifyPrescription();
        console.log(`Prescription issued by Dr. ${doctor.getName()} for patient ${patient.getName()}`);
    }

    public trackMedication(prescription: Prescription): void {
        prescription.trackMedication();
        console.log(`Tracking medication for prescription ID ${prescription.getPrescriptionId()}`);
    }
}

