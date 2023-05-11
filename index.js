// const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// const nextISSTimesForMyLocation =

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIp("216.232.221.120", (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:', data);
// });

// fetchISSFlyOverTimes({ latitude: 49.1665898, longitude: -123.133569 }, (error, data) => {
//   if (error) {
//     console.log("It didn't work!,", error);
//     return;
//   }

//   console.log('It worked! Returned flyover times: ', data);
// });

const { nextISSTimesForMyLocation } = require('./iss');



nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
});