




let DB;

document.addEventListener('DOMContentLoaded', () => {
    crearDB()
})


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





//*******************************************************************************************


document.addEventListener('DOMContentLoaded', () => {
    conectarDB()
    agregarBtn.addEventListener('click', validarCliente)
})

 
let DB;


//ESta funcion conecta la base de datos a la aplicacion
function conectarDB(){
    const abrirConexion = window.indexedDB.open('crm', 1)
    abrirConexion.onerror = function(){
        console.log('Hubo un error');
    }
    abrirConexion.onsuccess = function(){
        DB = abrirConexion.result;
    }
}

//Esta funcion valida al cliente y lo añade a la base de datos
function validarCliente(){
    const nombre = nombreInput.value
    const email = emailInput.value
    const telefono = telefonoInput.value
    const empresa = empresaInput.value
    const isValid = [nombre, email, telefono, empresa].some(item => item.trim() ==='')
    if(isValid){
        mostrarAlerta('Algun campo esta vacio', 'error', alerta)
        return;
    }
    const cliente = { 
        nombre, 
        email, 
        telefono, 
        empresa,
        id: Math.floor(Math.random() * 100000000000) + Date.now()
    }
    crearNuevoClient(cliente)
}

//Esta funcion añade el cliente a la base de datos indexedDB
function crearNuevoClient(cliente){
    const transaction = DB.transaction(['crm'], 'readwrite')
    const objectStore = transaction.objectStore('crm')
    objectStore.add(cliente)
    transaction.onerror = function(){
        console.log('Hubo un error');
        mostrarAlerta('Hubo un problema intentando agregar un cliente', 'error', alerta)
        return
    }
    transaction.oncomplete = function(){
        console.log('Agregado correctamente');
        mostrarAlerta('El cliente se agrego correctamente', 'success', alerta)
        limpiarForm()
        return;
    }
}

//El reto son functiones auxiliares
function mostrarAlerta(msg, type, nodo) {
    limpiarNodo(nodo);
    const p = document.createElement("p");
    if (type === "error") {
      p.classList.add("alert", "alert-danger", 'mt-4', 'w-75', 'm-auto');
    } else {
      p.classList.add("alert", "alert-success", 'mt-4', 'w-75', 'm-auto');
    }
    p.textContent = msg;
    nodo.appendChild(p);
    setTimeout(() => {
      p.remove();
    }, 3000);
  }
  
  function limpiarNodo(nodo) {
    while (nodo.hasChildNodes()) {
      nodo.removeChild(nodo.firstChild);
    }
  }


  function limpiarForm(){
    nombreInput.value = ''
    emailInput.value = ''
    telefonoInput.value = ''
    empresaInput.value = ''
  }

//***************************************************************************************************







































