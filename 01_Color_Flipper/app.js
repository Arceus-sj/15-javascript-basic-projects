const colours = ["#a5ffd6", "rgb(252, 186, 3)", "#ffafcc", "rgb(212, 125, 169)" ,"#1d3557", "#84a98c", "rgb(181, 125, 212)"];

const btn = document.querySelector('#btn');

const color = document.querySelector('.colour');

const mainBody = document.querySelector('body');

const header = document.querySelector('h4');


btn.addEventListener('click', function () {
    
    let randomColorPicker = colours[Math.floor(Math.random()*colours.length)];

    color.innerHTML = randomColorPicker;
    color.style.color = randomColorPicker;
    header.style.color = randomColorPicker;
    btn.style.backgroundColor = randomColorPicker;
    mainBody.style.backgroundColor = randomColorPicker;

});