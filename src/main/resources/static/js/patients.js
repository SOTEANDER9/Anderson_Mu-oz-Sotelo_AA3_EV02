// Call the dataTables jQuery plugin
$(document).ready(function() {
    chargePatients()
    $('#patientsTable').DataTable();
});


async function chargePatients() {
    const request = await fetch('api/patients', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const patients = await request.json();

    console.log("pacientes recuperados: ", patients);

    //Listado vacio que va a ir almacenando cada paciente recorrido
    let listHtml = '';

    for (let patient of patients) {
        let deleteButton =
            '<a href="#" onclick="patientDelete('+ patient.id +', \'' + patient.name + '\', \'' + patient.lastName + '\')" ' +
            'class="btn btn-danger btn-sm me-1" title="Eliminar">' +
            '<i class="fas fa-trash fa-lg"></i>' +
            '</a>';

        let updateButton =
            '<a href="#" onclick="patientUpdate(\''+ patient.id + '\')" ' +
            'class="btn btn-warning btn-sm me-1" title="Editar">' +
            '<i class="fas fa-edit fa-lg"></i>' +
            '</a>';

        let patientHtml = '<tr>' +
            '<td>' + patient.id + '</td>' +
            '<td>' + patient.identification + '</td>' +
            '<td>' + patient.name + ' ' + patient.lastName + '</td>' +
            '<td>' + patient.email + '</td>' +
            '<td>' + patient.address + '</td>' +
            '<td>' + patient.telephone + '</td>' +
            '<td>' + patient.createdAt + '</td>' +
            '<td>' +
            '<div class="d-flex justify-content-center">' +
            updateButton +
            deleteButton +
            '</div>' +
            '</td>' +
            '</tr>';
        listHtml += patientHtml;
    }

    document.querySelector('#patientsTable tbody').outerHTML = listHtml;
}

async function patientDelete(id, name, lastName) {
    {
        if (!confirm('¿Desea eliminar el paciente ' + name + '' + lastName + '?')) {
            return;
        }

        try {
            const response = await fetch('api/patients/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el paciente.');
            }
            location.reload();
            console.log('Paciente eliminado satisfactoriamente.');
        } catch (error) {
            console.error('Error:', error.message);
            alert('Ocurrió un error al eliminar el paciente. Por favor, inténtelo de nuevo más tarde.');
        }
    }
}


async function patientUpdate(id) {
    // Redireccionar a la página de actualización con el ID del paciente en la URL
    window.location.href = `../patientUpdate.html`;
}

