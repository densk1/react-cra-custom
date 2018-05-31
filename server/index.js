

// IMPORTS
const express = require('express');
const dotenv = require('dotenv');

// SERVER SIDE RENDERING
const handleSSR = require('./ssr/index.js');
const app = express();
dotenv.config();

// TOOLS
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // => Request logging
// const cors = require('./config/cors');
const path = require('path');


// APP SETUP
if (process.env.NODE_ENV === 'production') {
  app.use('/static', express.static(path.join(__dirname, '../build/static')));
  app.use('/img', express.static(path.join(__dirname, '../build/img')));
}
// app.use(cors);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());



// DATABASE


// ENV VARIABLES
const PORT = process.env.PORT || 5000;
// console.log("process.env", process.env);

// CORS

app.all('/api', (req, res) => res.status(404).send('Api not yet implemented!'));

app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return handleSSR(req, res);
  } else {
    res.send(`Currently in ${process.env.NODE_ENV} mode. Build only served in production.`);
  }
});

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
