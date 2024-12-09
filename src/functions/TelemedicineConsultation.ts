import { TelemedicineConsultation } from '../entities/TelemedicineConsultation';
import { Doctor } from '../entities/Doctor';
import { Patient } from '../entities/Patient';

export class TelemedicineConsultations {
    public initiateConsultation(consultation: TelemedicineConsultation, doctor: Doctor, patient: Patient): void {
        consultation.initiateConsultation();
        console.log(`Consultation initiated between Dr. ${doctor.getName()} and patient ${patient.getName()}`);
    }

    public recordConsultation(consultation: TelemedicineConsultation, notes: string): void {
        consultation.setNotes(notes);
        consultation.recordConsultation();
        console.log(`Consultation recorded with notes: ${notes}`);
    }
}

