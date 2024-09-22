// Script para manejar la edición de pacientes

// Obtener el ID del paciente de la URL
const urlParams = new URLSearchParams(window.location.search);
const patientId = urlParams.get('id');

// Hacer una solicitud para obtener los detalles del paciente
fetch(`api/patients/${patientId}`)
    .then(response => response.json())
    .then(patient => {
        console.log('Datos del paciente recuperado:', patient);

        // Establecer los valores de los campos del formulario con los datos del paciente
        document.getElementById('name').value = patient.name;
        document.getElementById('lastName').value = patient.lastName;
        document.getElementById('identificationTypeId').value = patient.identificationTypeId;
        document.getElementById('identification').value = patient.identification;
        document.getElementById('genderId').value = patient.genderId;
        document.getElementById('bloodTypeId').value = patient.bloodTypeId;
        document.getElementById('city').value = patient.city;
        document.getElementById('address').value = patient.address;
        document.getElementById('telephone').value = patient.telephone;
        document.getElementById('email').value = patient.email;
        document.getElementById('dateOfBirth').value = patient.dateOfBirth;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ocurrió un error al cargar los detalles del paciente.');
    });

// Esta función se ejecuta al hacer clic en el botón "Guardar"
function updatePatient() {
    // Obtener los valores actualizados de los campos del formulario
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const identificationTypeId = document.getElementById('identificationTypeId').value;
    const identification = document.getElementById('identification').value;
    const genderId = document.getElementById('genderId').value;
    const bloodTypeId = document.getElementById('bloodTypeId').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;

    // Construir el objeto del paciente con los valores actualizados
    const updatedPatient = {
        id: patientId,
        name,
        lastName,
        identificationTypeId,
        identification,
        genderId,
        bloodTypeId,
        city,
        address,
        telephone,
        email,
        dateOfBirth
    };

    // Realizar la solicitud PUT al endpoint de actualización del paciente
    fetch(`api/patient/${patientId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPatient)
    })
        .then(response => {
            if (response.ok) {
                console.log('¡Paciente actualizado exitosamente!');
                // Redireccionar a la página de pacientes después de actualizar
                setTimeout(() => {
                    window.location.href = 'patients.html';
                }, 1000); // Redirigir después de 1 segundo
            } else {
                throw new Error('Error al actualizar el paciente.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al actualizar el paciente. Por favor, inténtelo de nuevo más tarde.');
        });
}
