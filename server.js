const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000; 


// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Your existing routes
app.get('/', (req, res) => {
  res.send('Welcome to my hotel.......');
});

// Import to router file
const routerPerson = require('./routes/personRoutes')
const routerMenuItem = require('./routes/menuItemRoutes');

// Use the router on the sub route
app.use('/person', routerPerson);
app.use('/menuitem', routerMenuItem);


// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (!res.headersSent) {
      res.status(500).send({ error: 'Internal server error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});