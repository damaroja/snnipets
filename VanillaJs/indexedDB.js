


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
function crearNuevoClient(cliente){
    const transaction = DB.transaction(['crm'], 'readwrite')
    const objectStore = transaction.objectStore('crm')
    objectStore.add(cliente)
    transaction.onerror = function(){
        //LO que se desea hacer en el caso de error
    }
    transaction.oncomplete = function(){
       //Lo que desea hacer en caso de exito en la accion
    }
}

//*************************************LECTURA DE LOS REGISTROS*************************************

function obtenerClientes(){
    const abrirConexion = window.indexedDB.open('crm', 1)
    abrirConexion.onerror = function(){
        console.log('Hubo un error');
    }
    abrirConexion.onsuccess = function(){
        DB = abrirConexion.result;
        const objectStore = DB.transaction('crm').objectStore('crm');       
        objectStore.openCursor = e.target.result;
        if(cursor){
            const { nombre, empresa, email, telefono, id } = cursor.value;
            listadoClientes.innerHTML += ``       
            cursor.continue()
        } else {
            console.log('No hay mas registros');
        }
    }  
} 








































