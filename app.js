require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('./util/logger');




const app = express();
const PORT = process.env.PORT || 3000;  // 3000 is the default port if PORT isn't set

app.use(cors());
app.use(bodyParser.json());

/*
app.get('/async-route', async (req, res) => {
    // This will be caught by your error-handling middleware
    throw new Error('Something went wrong');
});
*/

app.get('/', (req, res) => {
  res.send('Hello Express App from Docker!');
});
// Error handling middleware (should be defined after all other app.use() and routes)
app.use((err, req, res, next) => {
  logger.error(err);  // Log the error with Bunyan
    res.status(500).send('An error occurred: ' + err.message);
});
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
