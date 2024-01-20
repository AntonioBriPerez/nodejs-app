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



// Define the MongoDB connection string
const uri = 'mongodb://user:pass123@18.101.118.156:27017/db';

// Create a MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
    console.log('Connection string:', uri);

    // Add your MongoDB-related code here

    // Example: You can close the connection when done
    // client.close();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
