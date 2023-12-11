var randomBtn = document.querySelector('#js-color').addEventListener('click', getNumber);
var randomBtn = document.querySelector('#js-color1').addEventListener('click', getNumber);
var randomBtn = document.querySelector('#js-color2').addEventListener('click', getNumber);
var randomBtn = document.querySelector('#js-color3').addEventListener('click', getNumber);
var randomBtn = document.querySelector('#js-color4').addEventListener('click', getNumber);
var randomBtn = document.querySelector('#js-color5').addEventListener('click', getNumber);
var randomBtn = document.querySelector('#js-color6').addEventListener('click', getNumber);

const min = 0
const max = 10

function getNumber() {
    const rand_int = getRandomInt(min,max);
    displayNumber(rand_int);
}

function getRandomInt(min, max) {
    var rand_int = Math.floor(Math.random() * (max - min) + min);
    return rand_int;
}

function displayNumber(myNumber) {
    let currentNumber = document.getElementById('js-number').innerText;

    if (myNumber !== null && currentNumber.length < 10) {
        let newNumber = currentNumber + myNumber;
        document.getElementById('js-number').innerText = newNumber;
    }
}

/*CLEAR*/
function clear()
{   
   document.getElementById("#js-number").reset();
   console.clear();
}
