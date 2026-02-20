const express = require("express");
const router = express.Router();
const getConnection = require("../common/DBConnection");

router.get("/std/get-std", async (req, res) => {
  try {
    const db = await getConnection();
    const students = await db.collection("Schooldata").find({}).toArray();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/std/save-std", async (req, res) => {
  try {
    const db = await getConnection();
    const data = req.body; // JSON data from frontend
    const result = await db.collection("Schooldata").insertOne(data);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.put("/std/update-std/:id", async (req, res) => {
  try {
    const db = await getConnection();   
    const id = req.params.id;
    const data = req.body;  
    const result = await db.collection("Schooldata").updateOne(
      { _id: new require('mongodb').ObjectId(id) },
      { $set: data }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  } 
});

router.delete("/std/delete-std/:id", async (req, res) => {
  try {
    const db = await getConnection(); 

    const id = req.params.id;
    const result = await db.collection("Schooldata").deleteOne(
      { _id: new require('mongodb').ObjectId(id) }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  } 
});

module.exports = router;