const { ObjectId, MongoClient } = require('mongodb');

const url = process.env.DB_URL;
const dbName = "School";

const saveStd = async (dataObj) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('School_data');
  const result = await collection.insertOne(dataObj);
  client.close();
  return result;
};

const getStd = async () => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('School_data');
  const result = await collection.find({}).toArray();
  client.close();
  return result;
};

const updateStd = async (id, data) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('School_data');
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
  client.close();
  return result;
};

const deleteStd = async (id) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('School_data');
  const result = await collection.deleteOne(
    { _id: new ObjectId(id) }
  );
  client.close();
  return result;
};

module.exports = { saveStd, getStd, updateStd, deleteStd };