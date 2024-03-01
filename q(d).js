//Print the total population of countries using reduce function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();
xhr.onload = function() {
   console.log(xhr.responseText)
}

//Print the total population of countries using reduce function

let country = (value) => {
    if (value == "population") {
        return totalPopulation
    }

}
let totalPopulation = country.filter(country)
console.log(totalPopulation)