


**********************CREACION DE LA BASE DE DATOS INDEXEDDB********************************

let DB;


function crearDB(){
    const crearDB = window.indexedDB.open('crm', 1)
    crearDB.onerror = function(){
        console.log('Hubo un error');
    }
    crearDB.onsuccess = function(){
        DB = crearDB.results;
    }
    crearDB.onupgradeneeded = function(e){
        const db = e.target.result;
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'id',
            autoIncrement: true
        })
        objectStore.createIndex('nombre', 'nombre', { unique: false})
        objectStore.createIndex('email', 'email', { unique: true})
        objectStore.createIndex('telefono', 'telefono', { unique: true})
        objectStore.createIndex('empresa', 'empresa', { unique: false})
        objectStore.createIndex('id', 'id', { unique: true})
        console.log('DB lista y creada');
    }
}


//Esta funcion crea una base de datos con indexDB con los campos nombre, email telefono, empresa y id
// Adapatala a tu gusto


//***************************ADICCION DE UN REGISTRO**************************************

let DB;


//Esta funcion conecta la base de datos a la aplicacion
function conectarDB(){
    const abrirConexion = window.indexedDB.open('crm', 1)
    abrirConexion.onerror = function(){
        console.log('Hubo un error');
    }
    abrirConexion.onsuccess = function(){
        DB = abrirConexion.result;
    }
}

//Esta funcion añade el cliente a la base de datos indexedDB
function crearNuevoCliente(cliente){
    const transaction = DB.transaction(['crm'], 'readwrite');
    const objectStore = transaction.objectStore('crm');
    objectStore.add(cliente);
    transaction.onerror = function(){
        mostrarAlerta('Hubo un error', 'error', alerta);
    }
    transaction.oncomplete = function(){
        mostrarAlerta('Cliente agregado', 'success', alerta);
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    } 
}

//*************************************LECTURA DE LOS REGISTROS*************************************
function obtenerClientes(){
    const abrirConexion = window.indexedDB.open('crm', 1)
    abrirConexion.onerror = function(){
        console.log('Hubo un error');
    }
    abrirConexion.onsuccess = function(e){
        DB = abrirConexion.result;
        const objectStore = DB.transaction('crm').objectStore('crm');       
        objectStore.openCursor().onsuccess = function(e){
            const cursor = e.target.result;
            if(cursor){
                const { nombre, empresa, email, telefono, id } = cursor.value;
                const tr = document.createElement('tr')
                const tdId = document.createElement('td')
                tdId.textContent = id;
                tr.appendChild(tdId)
                const td = document.createElement('td')
                td.textContent = nombre;
                tr.appendChild(td)
                const td2 = document.createElement('td')
                td2.textContent = empresa;
                tr.appendChild(td2)
                const td3 = document.createElement('td')
                td3.textContent = email;
                tr.appendChild(td3)
                const td4 = document.createElement('td')
                td4.textContent = telefono;
                tr.appendChild(td4)
                const td5 = document.createElement('td')
                const btnEliminar = document.createElement('button')
                btnEliminar.classList.add('btn', 'btn-danger')
                btnEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>'
                btnEliminar.onclick = eliminarCliente(id)
                td5.appendChild(btnEliminar)
                btnEliminar.textContent = 'Eliminar X'
                const td6 = document.createElement('td')
                const btnEditar = document.createElement('button')
                btnEditar.classList.add('btn', 'btn-warning')
                btnEditar.innerHTML = '<i class="fas fa-pen">X</i>'
                btnEditar.onclick = editarCliente(id)
                btnEditar.textContent = 'Editar E'
                td6.appendChild(btnEditar)
                const tdBtn = document.createElement('td')
                tdBtn.appendChild(td5)
                tdBtn.appendChild(td6)
                tr.appendChild(tdBtn)
                listadoClientes.appendChild(tr)
                cursor.continue()
            } else {
                console.log('No hay mas registros');
            }   
        }
    }  
}








































