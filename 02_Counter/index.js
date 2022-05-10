let number = document.querySelector('.number');

let reset = document.querySelector('.reset-btn');

let increment = document.querySelector('.increase-btn');

let decrement = document.querySelector('.decrease-btn')

let numCounter = 0; 

reset.addEventListener('click', function () {
    // console.log("Reset clicked!");
    numCounter = 0;
    number.innerHTML = numCounter;
    number.style.color = "#284b63";
});

increment.addEventListener('click', function () {
    numCounter++;
    number.innerHTML = numCounter;
    if (numCounter < 0) {
        number.style.color = "#ef233c";
    }
    else {
        number.style.color = "#284b63";
    }
});

decrement.addEventListener('click', function () {

    numCounter--;
    number.innerHTML = numCounter;
    if (numCounter < 0) {
        number.style.color = "#ef233c";
    }
    else {
        number.style.color = "#284b63";
    }

    
});