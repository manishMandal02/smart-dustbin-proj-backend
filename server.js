const express = require('express');

const http = require('http');

const cors = require('cors');
const routes = require('./routes/webhooks.route');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Server is running');
});

app.use('/webhooks', routes);

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

server.listen(PORT, console.log(`Server is running on port ${PORT}`));
