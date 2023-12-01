

/*
Esta funcion guarda en un objeto la informacion a guardar en el localStorage, obtiene un array de lo que
contiene el localStorage, verifica que ya no este en dicho array. Si existe, salimos de la funcion. Si está, 
lo añade al array y lo guarda en el localStorage
*/
function saveFavoriteInLocalStorage(id) {
    const receta = {
        id
    }
    listIds = getFavoritesFromLocalStorage();
    const existe = listIds.some(receta => receta.id === id);
    if (existe) {
        return;
    }
    listIds.push(receta);
    localStorage.setItem('favorites', JSON.stringify(listIds));
}

*/ Esta funcion obtiene la informacion de localStorage y la formatea en un array de objetos/*

function getFavoritesFromLocalStorage() {
    let favorites;
    if (localStorage.getItem('favorites') === null) {
        favorites = [];
    } else {
        favorites = JSON.parse(localStorage.getItem('favorites'));
    }
    return favorites;
}


/*
Esta funcion obtiene el array de los objetos almacenados en el localStorage, busca el objeto cuyo id coincida
con el pasado por parametro y mediante filter lo eliminamos del array. El resto del array lo almacenamos
*/
function deleteFavorite(id) {
    const listIds = getFavoritesFromLocalStorage();
    const newListIds = listIds.filter(receta => receta.id !== id);
    localStorage.setItem('favorites', JSON.stringify(newListIds));
}
