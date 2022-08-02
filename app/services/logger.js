const bunyan = require('bunyan');

const streams = [];

const logger = bunyan.createLogger({
    name: 'sonow-api',
    streams,
});

module.exports = logger;