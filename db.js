const mongoose = require('mongoose');

// const mongodbURL = 'mongodb://localhost:27017/hotels'
const MONGO_URL = 'mongodb+srv://joytarafder3:Own1234@cluster0.guejy.mongodb.net/';

//Connect to the database
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Enable SSL/TLS  
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the database');
});

//
// const db = async () => {
//   try {
//     await mongoose.connect(MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       ssl: true, // Enable SSL/TLS
//       sslValidate: true, // Validate the server certificate
//       sslCA: process.env.SSL_CA_FILE, // Path to the CA certificate file
//     });
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };

module.exports = db;

// module.exports = db;