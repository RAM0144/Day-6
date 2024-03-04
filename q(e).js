//Print the country that uses US dollars as currency.

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function() {
   let Countries=JSON.parse(xhr.responseText)
 
   let usdCountries = Countries.filter(country =>{
    if(country.currencies && Object.keys(country.currencies).includes('USD')){
        return true;
    }
   })
  console.log(usdCountries.map(country => country.name.common).join('\n'));
  
}    



xhr.send();

