

//Esto salva un objeto en la api de JSON-Server

function saveItemJsonServer(objeto) {
    const url = 'http://localhost:3000/clientes';
    const options = {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then( response => response.json())
        .then( data => console.log(data))
        .catch( error => console.log(error));
}

Esto lista los objetos de la API de JSON SERVER

async function listarClientes() {
    const url = 'http://localhost:3000/clientes';
    await fetch(url)
        .then( response => response.json())
        .then( data => {
            clientesList.innerHTML = '';
            data.forEach( cliente => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${cliente.nombre}</td>
                    <td>${cliente.telefono}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.empresa}</td>
                    <td>
                        <button class="btn btn-danger" onclick="eliminarCliente(${cliente.id})">Eliminar</button>
                        <button class="btn btn-warning" onclick="editarCliente(${cliente.id})">Editar</button>
                    </td>
                `;
                clientesList.appendChild(tr);
            });
        })
}
