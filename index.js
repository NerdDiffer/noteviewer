const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

// Middleware
const pathToStaticDir = path.resolve(__dirname, 'public');
app.use(express.static(pathToStaticDir));

// Routes
app.get('*', (req, res) => {
  const pathToIndex = path.join(pathToStaticDir, 'index.html');
  res.status(200).sendFile(pathToIndex);
});

// Set up server
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => console.log('Server is listening on port', PORT));
