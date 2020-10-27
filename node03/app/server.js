

'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const HOSTNAME = os.hostname();
const HOSTNICS = JSON.stringify(os.networkInterfaces(),null,2);

//const ENV_SERVICENAME = process.env['SERVICENAME'];

// App
const app = express();
app.get('/', (req, res) => {
  //res.send(`Hello from server ${ENV_SERVICENAME}`);
  console.log(`${HOSTNAME} Serving new incoming request`);
  res.send(`Hello from server ${HOSTNAME}
            <pre>
            ${HOSTNICS}
	    </pre>
	  `);
});

app.listen(PORT, HOST, function() {
    console.log(`server ${HOSTNAME} Running on http://${HOST}:${PORT}`);
    console.log(`interfacce  ${HOSTNICS} `);
  }

);



