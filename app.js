const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=6b247cf1ef29b034fcd58e714fb05b0b&query=37.8267,-122.4233';

request({url: url, json: true} , (error , response) => {
  const {temperature , feelslike} = response.body.current;
  console.log(`It is currently ${temperature}, it feels like ${feelslike}.`);
});