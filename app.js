const http = require('http');
// Import the MongoDB client
const { MongoClient } = require('mongodb');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Node.js server is running on port ${port}`);
});



const mongoose = require('mongoose');

// Replace 'your-database-url' with your actual MongoDB connection URL.
const dbURL = 'mongodb://your-database-url';

// Connect to MongoDB
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
