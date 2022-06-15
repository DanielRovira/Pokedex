const listSelect = document.querySelectorAll('.pokemon')

//List names and image
listSelect.forEach((pokemon) => {
    let idSelected = pokemon.attributes.id.value
    pokemon.querySelector('.listName').textContent = listNames[idSelected];
    pokemon.querySelector('.listImage').src = `src/images/head-${listNames[idSelected]}.png`;
})

//Default
function pokemon (pkmn) {
document.querySelector('.name').textContent = pkmn.name;
document.querySelector('.number').textContent = pkmn.number;
document.querySelector('.type').textContent = pkmn.type;
document.querySelector('.hp').textContent = pkmn.hp;
document.querySelector('.atk').textContent = pkmn.atk;
document.querySelector('.def').textContent = pkmn.def;
document.querySelector('.spd').textContent = pkmn.spd;
document.querySelector('.habA').textContent = pkmn.hab1;
document.querySelector('.habB').textContent = pkmn.hab2;
document.querySelector('.image').src = `src/images/${pkmn.name}.png`;
document.getElementById('card').removeAttribute('class')
document.getElementById('card').classList.add('card-pokemon' , pkmn.type);  };
pokemon(pkmn1)



listSelect.forEach((selected) => {
    selected.addEventListener('mouseenter', () => {
        const idSelected = selected.attributes.id.value
        const activeOnList = document.querySelector('.active')
        const listSelected = document.getElementById(idSelected)
        activeOnList.classList.remove('active')
        listSelected.classList.add('active')
        switch (idSelected){
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
        }
    })
 })
