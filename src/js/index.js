//List attributes
document.querySelector('.nameA').textContent = pkmn1.name;
document.querySelector('.nameB').textContent = pkmn2.name;
document.querySelector('.nameC').textContent = pkmn3.name;
document.querySelector('.nameD').textContent = pkmn4.name;
document.querySelector('.nameE').textContent = pkmn5.name;
document.querySelector('.nameF').textContent = pkmn6.name;
document.querySelector('.imageA').src = `src/images/head-${pkmn1.name}.png`;
document.querySelector('.imageB').src = `src/images/head-${pkmn2.name}.png`;
document.querySelector('.imageC').src = `src/images/head-${pkmn3.name}.png`;
document.querySelector('.imageD').src = `src/images/head-${pkmn4.name}.png`;
document.querySelector('.imageE').src = `src/images/head-${pkmn5.name}.png`;
document.querySelector('.imageF').src = `src/images/head-${pkmn6.name}.png`;

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

const listSelect = document.querySelectorAll('.pokemon')

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
