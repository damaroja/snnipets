




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
