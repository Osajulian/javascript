var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://swapi.co/api/people/?format=json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType='json';
request.send();

request.onload = function() {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }

  function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    var myH2 = document.createElement('h2');
    myH1.textContent = jsonObj['results'][0]['films'];
    myH2.textContent = jsonObj['results']['name'];
    header.appendChild(myH1);
    header.appendChild(myH2);
  
  
  }

function showHeroes(jsonObj) {
    let fil = jsonObj['results'][0]['films']
    for (var i = 0; i < fil.length; i++) {
        console.log(fil)
    }
  
          
   
}
  