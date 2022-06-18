const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=6b247cf1ef29b034fcd58e714fb05b0b&query=37.8267,-122.4233&units=s';

request({url: url, json: true} , (error , response) => {
  const {temperature , feelslike , weather_descriptions} = response.body.current;
  console.log(`${weather_descriptions[0]}. It is currently ${temperature}, it feels like ${feelslike}.`);
});