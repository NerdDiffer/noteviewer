const express = require('express');
const proxy = require('http-proxy');
const http = require('http');
const path = require('path');

const app = express();
const proxyServer = proxy.createServer();
const isProduction = process.env.NODE_ENV === 'production';

const pathToStaticDir = path.resolve(__dirname, 'public');
app.use(express.static(pathToStaticDir));

if (!isProduction) {
  const bundler = require('./scripts/bundler');
  const devPort = 8080;
  bundler(devPort);

  app.all('/build/*', (req, res) => {
    const target = `localhost:${devPort}`;
    proxyServer.web(req, res, { target });
  });
}

const PORT = process.env.PORT || 3000;
proxyServer.on('error', err => {
  console.log('Could not connect to proxy: ', err);
});

app.listen(PORT, () => console.log('App is listening on port', PORT));
