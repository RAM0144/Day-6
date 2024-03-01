//Print the country that uses US dollars as currency.

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();
xhr.onload = function() {
   console.log(xhr.responseText)
}

//Print the country that uses US dollars as currency.


let country = (value) => {
    if (value % UsDollars) {
        return "country";
    }

}
let UsDollars = country.filter(country)
console.log(UsDollars)