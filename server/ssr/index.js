// SSR

import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import {
  StaticRouter,
} from 'react-router-dom';
import path from 'path';
import App from '../../app/App';

const handleSSR = (req, res) => {
  fs.readFile(path.join(__dirname, '../../index.html'), 'utf8', (error, data) => {
    if (error) throw error;
    const reactString = renderToString(
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    );
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
}

module.exports = handleSSR;

/*
  TODO
  Not yet imported into the server
  Add in Render to String.
*/
// https://github.com/babel/example-node-server

