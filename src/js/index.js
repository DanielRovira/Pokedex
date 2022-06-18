const listSelect = document.querySelectorAll('.pokemon')
const pkmnAtt = document.querySelectorAll('.pkmnAtt')

//List names and image
listSelect.forEach((pokemon) => {
    let idSelected = pokemon.attributes.id.value
    pokemon.querySelector('.listName').textContent = listNames[idSelected].name;
    document.getElementById('image').src = `./src/images/${listNames[idSelected].name}.png`;
    pokemon.querySelector('.listImage').src = `./src/images/head-${listNames[idSelected].name}.png`;
})

//Default
document.getElementById('image').src = `./src/images/${listNames.pkmn1.name}.png`
function pokemon (pkmn) {
    pkmnAtt.forEach((poke) => {
        let idSelected = poke.attributes.id.value
        poke.textContent = pkmn[idSelected]
    })
}

listSelect.forEach((selected) => {
    selected.addEventListener('mouseenter', () => {
        const idSelected = selected.attributes.id.value
        const activeOnList = document.querySelector('.active')
        const listSelected = document.getElementById(idSelected)
        activeOnList.classList.remove('active')
        listSelected.classList.add('active')
        document.getElementById('image').src = `./src/images/${listNames[idSelected].name}.png`
        document.getElementById('card').removeAttribute('class')
        document.getElementById('card').classList.add('card-pokemon' , listNames[idSelected].type)
        pokemon(listNames[idSelected])
 })
})
pokemon(listNames.pkmn1)
