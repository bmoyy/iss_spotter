const request = require('request');

const fetchMyIP = function(callback) {

  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body).ip;
    return callback(null, data);
  });
};

const fetchCoordsByIp = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (!JSON.parse(body).success) {
      let msg = JSON.parse(body).message;
      return callback(Error(msg),null);
    }

    const coords = {};
    coords.latitude = (JSON.parse(body).latitude);
    coords.longitude = (JSON.parse(body).longitude);
    return callback(null, coords);
  }
  );
};

const fetchISSFlyOverTimes = function(coords, callback) {

  request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      return callback(error,null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching flyover times: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const flyOver = JSON.parse(body).response;
    callback(null, flyOver);
  });
};


module.exports = { fetchMyIP, fetchCoordsByIp,fetchISSFlyOverTimes };