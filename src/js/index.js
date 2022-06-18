const listSelect = document.querySelectorAll('.pokemon')
const pkmnAtt = document.querySelectorAll('.pkmnAtt')

function pokemon (pkmn) {
    pkmnAtt.forEach((poke) => {
        let idSelected = poke.attributes.id.value
        poke.textContent = pkmn[idSelected]
    })
}

listSelect.forEach((selected) => {
    let idSelected = selected.attributes.id.value
    selected.querySelector('.listName').textContent = listNames[idSelected].name;
    document.getElementById('image').src = `./src/images/${listNames[idSelected].name}.png`;
    pokemon(listNames[idSelected])
    selected.querySelector('.listImage').src = `./src/images/head-${listNames[idSelected].name}.png`;

    
    selected.addEventListener('mouseenter', () => {
    //    const idSelected = selected.attributes.id.value
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
document.getElementById('image').src = `./src/images/${listNames.pkmn1.name}.png`
pokemon(listNames.pkmn1)
