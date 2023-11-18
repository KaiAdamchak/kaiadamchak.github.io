const randomBtn = document.querySelector('#js-random-pokemon').addEventListener('click', GetPokemon);
const randomTxt = document.querySelector('#js-random-text');

const min = 1
const max = 500

function getRandomInt(min,max) { 
    var rand_int= Math.floor(Math.random() * (max - min) + min);
    console.log(rand_int);
    return rand_int;
}

function MakeUrl() {
    const rand_int = getRandomInt(min,max);
    const api_url = 'https://pokeapi.co/api/v2/pokemon/';
    const daUrl = api_url+rand_int;
    console.log(daUrl);
    return daUrl;
}

//
async function GetPokemon() {
    const fullUrl = MakeUrl();
   // try -> tries something; if it returns an error, it puts us into the catch block
        try {
            const response = await fetch(fullUrl);
            // if !response.ok is "if the response ISN'T okay (status code 200)"
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            
            // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
            displayPokemon(json['name']);
        }
        catch(err) {
            console.log(err);
            alert('Failed to fetch new quote');
        }
}

// this function shows the question
function displayPokemon(pokemon) {
    randomTxt.textContent = pokemon;
}
// we run getQuote once when the script first loads to populate a question
// when the page is loading
GetPokemon();