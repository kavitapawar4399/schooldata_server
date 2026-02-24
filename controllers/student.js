const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");   // ✅ Import once
const getConnection = require("../common/DBConnection");


// ==========================
// GET ALL STUDENTS
// ==========================
router.get("/get-std", async (req, res) => {
  try {
    const db = await getConnection();

    const students = await db
      .collection("Schooldata")
      .find({})
      .toArray();

    res.json(students);
  } catch (err) {
    console.error("GET ERROR:", err);
    res.status(500).json({ error: "Server error while fetching data" });
  }
});


// ==========================
// SAVE NEW STUDENT
// ==========================
router.post("/save-std", async (req, res) => {
  try {
    const db = await getConnection();

    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ error: "Empty data received" });
    }

    const result = await db
      .collection("Schooldata")
      .insertOne(data);

    res.json(result);
  } catch (err) {
    console.error("POST ERROR:", err);
    res.status(500).json({ error: "Server error while saving data" });
  }
});


// ==========================
// UPDATE STUDENT
// ==========================
router.put("/update-std/:id", async (req, res) => {
  try {
    const db = await getConnection();

    const id = req.params.id;
    const data = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const result = await db
      .collection("Schooldata")
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
      );

    res.json(result);
  } catch (err) {
    console.error("PUT ERROR:", err);
    res.status(500).json({ error: "Server error while updating data" });
  }
});


// ==========================
// DELETE STUDENT
// ==========================
router.delete("/delete-std/:id", async (req, res) => {
  try {
    const db = await getConnection();

    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const result = await db
      .collection("Schooldata")
      .deleteOne({ _id: new ObjectId(id) });

    res.json(result);
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ error: "Server error while deleting data" });
  }
});

module.exports = router;