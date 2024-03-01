
const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();
xhr.onload = function() {
   console.log(xhr.responseText)
}

//Get all the countries from Asia continent /region using Filter function

let country = (continents) => {
    if (continents == "Asia continent") {
        return "continent";
    }

}
let countries = country.filter(country)
console.log(countries)

