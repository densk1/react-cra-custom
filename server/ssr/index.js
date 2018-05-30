/*import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import fs from 'fs';

function handleSSR(req, res) {
  // TODO 
  // Render <App /> to string
  // include initialState 

  return fs.readFile('../build/index.html', 'utf8', (error, data) => {
    if (error) throw error;
    const reactString = renderToString(<App />);
    const htmlDocument = data.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${reactString}</div>`
    );
    console.log("HANDLE SSR !!!!!!!!!!!!!!!!!!!")
    return res.status(200).send(htmlDocument);

  });
}

export default handleSSR;

/*
  TODO
  Not yet imported into the server
  Add in Render to String.
*/
// https://github.com/babel/example-node-server*/