//Get all the countries from Asia continent /region using Filter function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function() {
let countries = JSON.parse(xhr.responseText)


  let AsiaContinent = countries.filter(country =>{
    if(country.continents && Object.values(country.continents).includes("Asia")){
        return true
    }


 })
 console.log(AsiaContinent.map(country => country.name.common).join('\n'))
}


 xhr.send();




