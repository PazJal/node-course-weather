const request = require('postman-request');

const {geoCodingAPIKey} = require('./../localInfo')

const geocode = (address, callback) => {
  const url = `https://eu1.locationiq.com/v1/search?key=${geoCodingAPIKey}&q=${encodeURIComponent(address)}&format=json&limit=1`;
  request({url, json: true} , (err, response) => {
    if(err) {
      callback('Unable to connect to locaiton services');
    } else if( response.body.error) {
      callback("Unable to find location");
    } else {
      const {lat, lon, display_name} = response.body[0];
      callback(undefined, {
        latitude: lat,
        longitude: lon,
        location: display_name
      });
    }
  }) 
}

module.exports = geocode;