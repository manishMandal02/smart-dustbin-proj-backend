const express = require('express');
const cors = require('cors');
const routes = require('./routes/webhooks.route');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.use('/webhooks', routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
