//List attributes
document.querySelector('.nameA').textContent = name1;
document.querySelector('.nameB').textContent = name2;
document.querySelector('.nameC').textContent = name3;
document.querySelector('.nameD').textContent = name4;
document.querySelector('.nameE').textContent = name5;
document.querySelector('.nameF').textContent = name6;
document.querySelector('.imageA').src = `src/images/head-${image1}.png`;
document.querySelector('.imageB').src = `src/images/head-${image2}.png`;
document.querySelector('.imageC').src = `src/images/head-${image3}.png`;
document.querySelector('.imageD').src = `src/images/head-${image4}.png`;
document.querySelector('.imageE').src = `src/images/head-${image5}.png`;
document.querySelector('.imageF').src = `src/images/head-${image6}.png`;

//Default
document.querySelector('.name').textContent = name1;
document.querySelector('.number').textContent = number1;
document.querySelector('.type').textContent = type1;
document.querySelector('.hp').textContent = hp1;
document.querySelector('.atk').textContent = atk1;
document.querySelector('.def').textContent = def1;
document.querySelector('.spd').textContent = spd1;
document.querySelector('.tot').textContent = tot1;
document.querySelector('.habA').textContent = hab101;
document.querySelector('.habB').textContent = hab102;
document.querySelector('.image').src = `src/images/${image1}.png`;

const listSelect = document.querySelectorAll('.pokemon')

listSelect.forEach((pokemon) => {
    pokemon.addEventListener('mouseenter', () => {
        const idSelected = pokemon.attributes.id.value
        const activeOnList = document.querySelector('.active')
        const listSelected = document.getElementById(idSelected)
        activeOnList.classList.remove('active')
        listSelected.classList.add('active')
        switch (idSelected){
            case "pkmn1":
                document.querySelector('.name').textContent = name1;
                document.querySelector('.number').textContent = number1;
                document.querySelector('.type').textContent = type1;
                document.querySelector('.hp').textContent = hp1;
                document.querySelector('.atk').textContent = atk1;
                document.querySelector('.def').textContent = def1;
                document.querySelector('.spd').textContent = spd1;
                document.querySelector('.tot').textContent = tot1;
                document.querySelector('.habA').textContent = hab101;
                document.querySelector('.habB').textContent = hab102;
                document.querySelector('.image').src = `src/images/${image1}.png`;
                document.getElementById('card').classList.remove('type-' + type2);
                document.getElementById('card').classList.remove('type-' + type3);
                document.getElementById('card').classList.remove('type-' + type4);
                document.getElementById('card').classList.remove('type-' + type5);
                document.getElementById('card').classList.remove('type-' + type6);
                document.getElementById('card').classList.add('type-' + type1);
            break;
            case "pkmn2":
                document.querySelector('.name').textContent = name2;
                document.querySelector('.number').textContent = number2;
                document.querySelector('.type').textContent = type2;
                document.querySelector('.hp').textContent = hp2;
                document.querySelector('.atk').textContent = atk2;
                document.querySelector('.def').textContent = def2;
                document.querySelector('.spd').textContent = spd2;
                document.querySelector('.tot').textContent = tot2;
                document.querySelector('.habA').textContent = hab201;
                document.querySelector('.habB').textContent = hab202;
                document.querySelector('.image').src = `src/images/${image2}.png`;
                document.getElementById('card').classList.remove('type-' + type1);
                document.getElementById('card').classList.remove('type-' + type3);
                document.getElementById('card').classList.remove('type-' + type4);
                document.getElementById('card').classList.remove('type-' + type5);
                document.getElementById('card').classList.remove('type-' + type6);
                document.getElementById('card').classList.add('type-' + type2);
            break;
            case "pkmn3":
                document.querySelector('.name').textContent = name3;
                document.querySelector('.number').textContent = number3;
                document.querySelector('.type').textContent = type3;
                document.querySelector('.hp').textContent = hp3;
                document.querySelector('.atk').textContent = atk3;
                document.querySelector('.def').textContent = def3;
                document.querySelector('.spd').textContent = spd3;
                document.querySelector('.tot').textContent = tot3;
                document.querySelector('.habA').textContent = hab301;
                document.querySelector('.habB').textContent = hab302;
                document.querySelector('.image').src = `src/images/${image3}.png`;
                document.getElementById('card').classList.remove('type-' + type1);
                document.getElementById('card').classList.remove('type-' + type2);
                document.getElementById('card').classList.remove('type-' + type4);
                document.getElementById('card').classList.remove('type-' + type5);
                document.getElementById('card').classList.remove('type-' + type6);
                document.getElementById('card').classList.add('type-' + type3);
            break;
            case "pkmn4":
                document.querySelector('.name').textContent = name4;
                document.querySelector('.number').textContent = number4;
                document.querySelector('.type').textContent = type4;
                document.querySelector('.hp').textContent = hp4;
                document.querySelector('.atk').textContent = atk4;
                document.querySelector('.def').textContent = def4;
                document.querySelector('.spd').textContent = spd4;
                document.querySelector('.tot').textContent = tot4;
                document.querySelector('.habA').textContent = hab401;
                document.querySelector('.habB').textContent = hab402;
                document.querySelector('.image').src = `src/images/${image4}.png`;
                document.getElementById('card').classList.remove('type-' + type1);
                document.getElementById('card').classList.remove('type-' + type2);
                document.getElementById('card').classList.remove('type-' + type3);
                document.getElementById('card').classList.remove('type-' + type5);
                document.getElementById('card').classList.remove('type-' + type6);
                document.getElementById('card').classList.add('type-' + type4);
            break;
            case "pkmn5":
                document.querySelector('.name').textContent = name5;
                document.querySelector('.number').textContent = number5;
                document.querySelector('.type').textContent = type5;
                document.querySelector('.hp').textContent = hp5;
                document.querySelector('.atk').textContent = atk5;
                document.querySelector('.def').textContent = def5;
                document.querySelector('.spd').textContent = spd5;
                document.querySelector('.tot').textContent = tot5;
                document.querySelector('.habA').textContent = hab501;
                document.querySelector('.habB').textContent = hab502;
                document.querySelector('.image').src = `src/images/${image5}.png`;
                document.getElementById('card').classList.remove('type-' + type1);
                document.getElementById('card').classList.remove('type-' + type2);
                document.getElementById('card').classList.remove('type-' + type3);
                document.getElementById('card').classList.remove('type-' + type4);
                document.getElementById('card').classList.remove('type-' + type6);
                document.getElementById('card').classList.add('type-' + type5);
            break;
            case "pkmn6":
                document.querySelector('.name').textContent = name6;
                document.querySelector('.number').textContent = number6;
                document.querySelector('.type').textContent = type6;
                document.querySelector('.hp').textContent = hp6;
                document.querySelector('.atk').textContent = atk6;
                document.querySelector('.def').textContent = def6;
                document.querySelector('.spd').textContent = spd6;
                document.querySelector('.tot').textContent = tot6;
                document.querySelector('.habA').textContent = hab601;
                document.querySelector('.habB').textContent = hab602;
                document.querySelector('.image').src = `src/images/${image6}.png`;
                document.getElementById('card').classList.remove('type-' + type1);
                document.getElementById('card').classList.remove('type-' + type2);
                document.getElementById('card').classList.remove('type-' + type3);
                document.getElementById('card').classList.remove('type-' + type4);
                document.getElementById('card').classList.remove('type-' + type5);
                document.getElementById('card').classList.add('type-' + type6);
        }
    })
})