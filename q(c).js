//Print the following details name, capital, flag, using forEach function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();
xhr.onload = function() {
   console.log(xhr.responseText)
}


//Print the following details name, capital, flag, using forEach function


 details.forEach((name,capital,flag) => {
    details.push(details)
})

