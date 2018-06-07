

// IMPORTS
const express = require('express');
const dotenv = require('dotenv');
const cors = require('./config/cors');
const chalk = require('chalk');

let handleSSR;
// SERVER SIDE RENDERING
try {
  handleSSR = require('./ssr/index.js');
} catch (e) {
  console.log(chalk.cyan(`PRODUCTION ONLY: ${chalk.inverse(e.message)}`));
}

const app = express();
dotenv.config();

// TOOLS
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // => Request logging

const path = require('path');


// APP SETUP
if (process.env.NODE_ENV === 'production') {
  // js file
  app.use('/static', express.static(path.join(__dirname, '../static')));
  app.use('/img', express.static(path.join(__dirname, '../img')));
} else {
  app.use(cors);
}

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());

// DATABASE


// ENV VARIABLES
const PORT = process.env.PORT || 5000;

// API ROUTES
app.all('/api', (req, res) => res.status(404).send('Api not yet implemented!'));

// PAGE REQUESTS
/**
*   TODO
*   1) Add middleware for login handler
*/
app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return handleSSR(req, res);
  }
  return res.send(`Currently in ${process.env.NODE_ENV} mode. Build only served in production.`);
});

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
