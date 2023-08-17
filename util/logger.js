require('dotenv').config();

const bunyan = require('bunyan');

const logger = bunyan.createLogger({
    name: process.env.APP_NAME || 'MyAPP',  // Name of your application (used in log streams)
    level: 'info',  // Logging level: 'fatal', 'error', 'warn', 'info', 'debug', 'trace'
    serializers: bunyan.stdSerializers
});

module.exports = logger;
