// Call the dataTables jQuery plugin
$(document).ready(function() {
    // on ready
});

async function createPatient() {
    let data = {
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value,
        identificationTypeId: document.getElementById('identificationTypeId').value,
        identification: document.getElementById('identification').value,
        genderId: document.getElementById('genderId').value,
        bloodTypeId: document.getElementById('bloodTypeId').value,
        city: document.getElementById('city').value,
        address: document.getElementById('address').value,
        telephone: document.getElementById('telephone').value,
        email: document.getElementById('email').value,
        dateOfBirth: document.getElementById('dateOfBirth').value
    };

    const request = await fetch('api/patient', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (request.ok) {
        console.log('Paciente creado exitosamente');

        window.location.href = '../patients.html';
    } else {
        console.error('Error al crear el paciente:', request.statusText);
    }
}
