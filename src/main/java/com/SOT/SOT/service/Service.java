package com.mediatechsoftware.magnamedic.service;


import com.mediatechsoftware.magnamedic.models.Patient;
import com.mediatechsoftware.magnamedic.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    PatientRepository patientRepository;

    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    public Optional<Patient> getPatient(Integer id) {
        return patientRepository.findById(id);
    }

    public void delete(Integer id) {
        patientRepository.deleteById(id);
    }

    public void create(Patient patient) {
        patientRepository.save(patient);
    }

    public void update(Patient patient) {
        Optional<Patient> existingPatient = patientRepository.findById(patient.getId());
        if (existingPatient.isPresent()) {
            patientRepository.save(patient);
        } else {
            throw new IllegalArgumentException("El paciente con ID " + patient.getId() + " no existe en la base de datos.");
        }
    }
}
