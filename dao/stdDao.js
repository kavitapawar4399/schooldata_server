const ObjectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://admin:admin123@student.nnwfjsg.mongodb.net/School?retryWrites=true&w=majority";
;
const dbName = "School";


// SAVE
const saveStd = async (dataObj) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('School_data');

  const result = await collection.insertOne(dataObj);
  client.close();
  return result;
};


// GET
const getStd = async () => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection('School_data');

  const result = await collection.find({}).toArray();
  client.close();
  return result;
};


// UPDATE
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


// DELETE
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


// EXPORT ALL FUNCTIONS
module.exports = {
  saveStd,
  getStd,
  updateStd,
  deleteStd
};
