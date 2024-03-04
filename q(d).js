//Print the total population of countries using reduce function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function() {
   let countries = JSON.parse(xhr.responseText)


 let population = countries.filter(country => {
   return country.population
 })
// if(country.population && Object.values(country.population).includes("population")){
//     return true 
// }
// })

 let populations =(previousvalue,currentvalue) => {
   return previousvalue + currentvalue
   }
}
let totalpopulation = population.reduce(populations)
 console.log(totalpopulation)   

xhr.send();
