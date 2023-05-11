const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');

const nextISSTimesForMyLocation =

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIp("216.232.221.120", (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned coordinates:', data);
});

fetchISSFlyOverTimes({ latitude: 49.1665898, longitude: -123.133569 }, (error, data) => {
  if (error) {
    console.log("It didn't work!,", error);
    return;
  }

  console.log('It worked! Returned flyover times: ', data);
});