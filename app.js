const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB server URL

// Database Name
const dbName = 'mydatabase'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB server');

  // Get a reference to the database
  const db = client.db(dbName);

  // Perform database operations here
  // For example, you can insert, update, or query data from the database

  // Close the connection when done
  client.close();
});
