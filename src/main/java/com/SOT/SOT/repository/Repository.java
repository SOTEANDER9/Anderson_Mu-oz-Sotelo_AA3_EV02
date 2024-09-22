package com.mediatechsoftware.magnamedic.repository;

import com.mediatechsoftware.magnamedic.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {

}
