require('dotenv').config();
const pkg = require('./package.json');
const express = require('express');
const app = express();
const logger = require('./app/middleware/logger');
const port = process.env.PORT || 3000;

// Init middleware
app.use(logger);

// default route
app.get('/', (req, res) => {
  res.json({
    success: true,
    data: null,
    message: `${pkg.name} running perfectly`
  });
});

const members = [
  {
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'active'
  },
  {
    name: 'Emely',
    email: 'emely@gmail.com',
    status: 'active'
  }
];
app.get('/api/members', (req, res) => {
  res.json(members);
});

// routes
const routes = require('./app/routes/food');
app.use('/food/v1', routes);

app.listen(port, () => {
  console.log(`${pkg.name} running and listening on port ${port}`);
});
