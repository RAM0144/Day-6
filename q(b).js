//Get all the countries with a population of less than 2 lakhs using Filter function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function() {
   let countries = JSON.parse(xhr.responseText)

   
  let countrypopulation = countries.filter (country => {
    if (country.population < 200000 && Object.keys(country.population)){
      return true
    }
     })
     
   console.log(countrypopulation.map(country => country.name.common).join('\n'))

}

xhr.send();
