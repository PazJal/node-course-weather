const request = require('postman-request');
const {weatherAPIKey , geoCodingAPIKey} = require('./localInfo');

// const url = `http://api.weatherstack.com/current?access_key=${weatherAPIKey}&query=&37.8267,-122.4233units=s`;

// request({url: url, json: true} , (error , response) => {
//   if(error) {
//     console.log("Unable to connet to weather service.");
//   } else if(response.body.error) {
//     console.log("Unable to find location.");
//   } else {
//     const {temperature , feelslike , weather_descriptions} = response.body.current;
//     console.log(`${weather_descriptions[0]}. It is currently ${temperature}, it feels like ${feelslike}.`);
//   }
// });

const url = `https://eu1.locationiq.com/v1/search?key=${geoCodingAPIKey}&q=Los%20Angeles%20&format=json&limit=1`;

request({url, json: true} , (error , response) => {
  if(error){
    console.log("Unable to connect to Geolocation service.");
  } else if (response.body.error) {
    console.log("Geocoding failed.");
  } else{
    const {lat, lon} = response.body[0];
    console.log(`lat: ${lat} lon: ${lon}`);
  }
});
