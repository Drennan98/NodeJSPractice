// var url = 'http://mylogger.io/log';

// function log(message) {
//     // Sent a HTTP request
//     console.log(message);
// }

// module.exports.log = log;
// module.exports.endPoint = url;

var logger = request('./logger.js');
logger.log('message');