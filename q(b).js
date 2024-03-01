//Get all the countries with a population of less than 2 lakhs using Filter function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();
xhr.onload = function() {
   console.log(xhr.responseText)
}

//Get all the countries with a population of less than 2 lakhs using Filter function

let countries = (value)=> {
    if (value < "200000" ) {
        return "population";
    }

}
let population = countries.filter(country)
console.log(population)