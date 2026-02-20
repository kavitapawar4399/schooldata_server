const { MongoClient } = require('mongodb');

let db = null; // cached DB connection

const getConnection = async () => {
  if (db) return db; // reuse existing connection

  try {
    const client = await MongoClient.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    db = client.db('School_data'); // select your DB
    console.log('MongoDB connected successfully');
    return db;
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    throw err;
  }
};

module.exports = getConnection;