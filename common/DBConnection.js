const { MongoClient } = require('mongodb');

let db = null; // Cached DB connection

async function getConnection() {
  if (db) return db; // Return cached connection

  if (!process.env.DB_URL) {
    throw new Error("DB_URL environment variable not set");
  }

  try {
    const client = await MongoClient.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db = client.db('Schooldata'); // Replace with your actual DB name
    console.log('MongoDB connected successfully');
    return db;
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    throw err;
  }
}

module.exports = getConnection;