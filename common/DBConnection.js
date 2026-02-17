const mongo = require ('mongodb')

const getConnection=()=>{
  const mongoClient=mongo.MongoClient
  mongoClient.connect(process.env.DB_URL)
  const db=Server.db("School");
   return db;
}

module.exports=getConnection