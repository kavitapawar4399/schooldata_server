const { MongoClient } = require("mongodb");

const url = "mongodb+srv://u1:p1@schooldata.hm1qk9i.mongodb.net/?appName=Schooldata";

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
