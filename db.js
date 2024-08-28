const mongoose = require('mongoose');

// const MONGO_URL = 'mongodb://localhost:27017/hotels' // Offline Database
const MONGO_URL = 'mongodb+srv://joytarafder3:Own1234@cluster0.guejy.mongodb.net/';

//Connect to the database
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Enable SSL/TLS  
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});


module.exports = db;

// module.exports = db;