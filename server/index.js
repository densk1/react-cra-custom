// IMPORTS
const express = require('express');
const dotenv = require('dotenv');

// TOOLS
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // => Request logging
const cors = require('./config/cors');
const path = require('path');

// SETUP
const app = express();
dotenv.config();


// APP SETUP
app.use(express.static(path.join(__dirname, '..', 'build')));
// app.use(cors);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());

// DATABASE


// ENV VARIABLES
const PORT = process.env.PORT || 5000;
// CORS


app.all('/api', (req, res) => res.status(404).send('Api not yet implemented!'));

app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  } else {
    res.send(`Currently in ${process.env.NODE_ENV} mode. Build only served in production.`);
  }
});

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
