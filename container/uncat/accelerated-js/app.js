"use strict"

searchButton.addEventListener('click', searchWeather);
function searchWeather() {
  var cityName = searchCity.value;
  // console.log(searchCity.textContent);
  if (cityName.trim().length == 0) {
    return alert('Please enter a City Name');
  };
  var http = new XMLHttpRequest();
  var apiKey = 'a3b0228f4be3cf486156a68927633feb';
  var url = 'api.openweathermap.org/data/2.5/weather?q=' + cityName;
  var method = 'GET';
    
    http.open(method, url);
    http.onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200){
            var data = JSON.parse(http.responseText);
        }else if (http.readyState !== XMLHttpRequest.DONE){
            alert('Something went wrong');
        }
    }
};