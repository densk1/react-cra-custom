// SSR

import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import {
  StaticRouter,
} from 'react-router-dom';
import App from '../client/App';

// IMPORTS
const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// TOOLS
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // => Request logging
// const cors = require('./config/cors');
const path = require('path');


// APP SETUP
app.use('/static', express.static(path.join(__dirname, '../build/static')));
app.use('/img', express.static(path.join(__dirname, '../build/img')));
// app.use(cors);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());

// SERVER SIDE RENDERING
// const handleSSR = require('./ssr/index.js');

// DATABASE


// ENV VARIABLES
const PORT = process.env.PORT || 5000;
// console.log("process.env", process.env);

// CORS

app.all('/api', (req, res) => res.status(404).send('Api not yet implemented!'));

app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    fs.readFile(path.join(__dirname, '..', 'build', 'index.html'), 'utf8', (error, data) => {
      if (error) throw error;
      const reactString = renderToString(<StaticRouter location={req.url} context={{}}><App /></StaticRouter>);
      const htmlDocument = data.replace(
        /<div id="root"><\/div>/,
        `<div id="root">${reactString}</div>`,
      );
      const htmlDoc2 = htmlDocument.replace(
        /<title>React App<\/title>/,
        `<title>${process.env.TITLE || 'Set Title'}</title>`,
      );
      res.status(200).send(htmlDoc2);
    });
    /* res.sendFile(path.join(__dirname, '..', 'build', 'index.html')); */
  } else {
    res.send(`Currently in ${process.env.NODE_ENV} mode. Build only served in production.`);
  }
});

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
