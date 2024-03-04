//Print the following details name, capital, flag, using forEach function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function() {
  let countries = JSON.parse(xhr.responseText)
 
 let Details = countries.forEach(country => {
  if(country.flag && Object.values(country.flag).includes("flag")){
    return true
  }
   
  })
   console.log(Details.map(country => country.name.common).join('\n'));

}
xhr.send();

