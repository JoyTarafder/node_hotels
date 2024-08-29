const mongoose = require('mongoose');
require('dotenv').config();

// const MONGO_URL = 'mongodb://localhost:27017/hotels' // LOCAL Database
const mongo_URL = process.env.MONGO_URL;

//Connect to the database
mongoose.connect(mongo_URL, {
  // useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Enable SSL/TLS  
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});


module.exports = db;
