const { MongoClient } = require("mongodb");

const url = "mongodb+srv://admin:admin123@student.nnwfjsg.mongodb.net/School?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully");
  } catch (e) {
    console.log(e);
  }
}
run();
