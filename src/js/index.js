const listSelect = document.querySelectorAll('.pokemon')
const pkmnAtt = document.querySelectorAll('.pkmnAtt')

//List names and image
listSelect.forEach((pokemon) => {
    let idSelected = pokemon.attributes.id.value
    pokemon.querySelector('.listName').textContent = listNames[idSelected].name;
    pokemon.querySelector('.listImage').src = `src/images/head-${listNames[idSelected].name}.png`;
})

//Default
function pokemon (pkmn) {
    
    pkmnAtt.forEach((poke) => {
        let idSelected = poke.attributes.id.value
        poke.textContent = pkmn[idSelected]

    })
        document.getElementById('image').src = `./src/images/${listNames[idSelected].name}.png`
        document.getElementById('card').removeAttribute('class')
        document.getElementById('card').classList.add('card-pokemon' , listNames[idSelected].type);
}



listSelect.forEach((selected) => {
    selected.addEventListener('mouseenter', () => {
        const idSelected = selected.attributes.id.value
        const activeOnList = document.querySelector('.active')
        const listSelected = document.getElementById(idSelected)
        activeOnList.classList.remove('active')
        listSelected.classList.add('active')
        
        return pokemon(listNames[idSelected])
        console.log();
 /*       switch (idSelected){
            case "pkmn1":;
                pokemon(pkmn1); 
            break;
            case "pkmn2":
                pokemon(pkmn2);
            break;
            case "pkmn3":
                pokemon(pkmn3);
            break;
            case "pkmn4":
                pokemon(pkmn4);
            break;
            case "pkmn5":
                pokemon(pkmn5);
            break;
            case "pkmn6":
                pokemon(pkmn6);
        }  */
    })
 })
