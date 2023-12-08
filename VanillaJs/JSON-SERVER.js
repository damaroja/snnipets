

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
