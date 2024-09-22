package com.mediatechsoftware.magnamedic.controllers;

import com.mediatechsoftware.magnamedic.models.Patient;
import com.mediatechsoftware.magnamedic.service.PatientService;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class PatientController {

    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    /**
     * Obtiene todos los pacientes.
     * @return Lista de todos los pacientes.
     */
    @RequestMapping(value = "api/patients", method = RequestMethod.GET)
    public List<Patient> getAllPatients(){
        return patientService.getPatients();
    }

    /**
     * Obtiene un paciente por su ID.
     * @param id ID del paciente.
     * @return El paciente con el ID especificado, si existe.
     */
    @RequestMapping(value = "api/patients/{id}", method = RequestMethod.GET)
    public Optional<Patient> getByIdPatient(@PathVariable("id") Integer id){
        return patientService.getPatient(id);
    }

    /**
     * Crea un nuevo paciente.
     * @param patient El paciente a crear.
     */
    @RequestMapping(value = "api/patient", method = RequestMethod.POST)
    public void createPatient(@RequestBody Patient patient){
        patientService.create(patient);
    }

    /**
     * Actualiza un paciente existente.
     * @param patient El paciente actualizado.
     */
    @RequestMapping(value = "api/patient/{id}", method = RequestMethod.PUT)
    public void updatePatient(@RequestBody Patient patient){
        patientService.update(patient);
    }

    /**
     * Elimina un paciente por su ID.
     * @param id ID del paciente a eliminar.
     */
    @RequestMapping(value = "api/patients/{id}", method = RequestMethod.DELETE)
    public void deletePatient(@PathVariable("id") Integer id){
        patientService.delete(id);
    }
}
