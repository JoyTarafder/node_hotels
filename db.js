const mongoose = require('mongoose');


// Connect to the database
mongoose.connect('mongodb://localhost:27017/hotels', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('Connected to the database');
});

module.exports = db;