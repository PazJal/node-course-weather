const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=6b247cf1ef29b034fcd58e714fb05b0b&query=37.8267,-122.4233';

request(url , (error , response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});