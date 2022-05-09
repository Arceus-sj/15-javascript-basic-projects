// const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.querySelector('#btn');

const color = document.querySelector('.colour');

const mainBody = document.querySelector('body');

const header = document.querySelector('h4');




btn.addEventListener('click', function () {
    
    let hexColor = "#";

    // for(let i = 0; i < 6; i++) {
    //     let randomIndex = Math.floor(Math.random()*hex.length)
    //     hexColor += hex[randomIndex];
    // }

    let randomHexNUmber = Math.floor(Math.random()*16777215).toString(16).padStart(6, 0).toUpperCase();

    hexColor += randomHexNUmber;

    color.innerHTML = hexColor;
    color.style.color = hexColor;
    header.style.color = hexColor;
    btn.style.backgroundColor = hexColor;
    mainBody.style.backgroundColor = hexColor;

});
