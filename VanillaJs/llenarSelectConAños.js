


const max = new Date().getFullYear()
const min = max- 20



function llenarSelect(){
    for (let i = max; i > min; i--) {
        const option = document.createElement("option");
        option.text = i;
        option.value = i;
        anno.add(option);
    }    
}


//anno es el nodo html que añadira los anos


/*<select class="form-select" aria-label="Default select example" id="year">
                <option selected>Open this select menu</option>
</select>*/
