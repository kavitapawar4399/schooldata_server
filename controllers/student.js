var express = require('express');
var router = express.Router();
var stdservice = require('../services/stdService');

// SAVE
router.post('/save-std', async function(req,res,next){
  try{
    const dataObj = req.body;
    const result = await stdservice.saveStd(dataObj);
    res.send(result);
  }catch(e){
    console.log(e);
    res.status(500).send(e);
  }
});

// UPDATE
router.put('/update-std', async function(req,res,next){
  try{
    const id = req.query.id;
    const data = req.body;

    const result = await stdservice.updateStd(id, data);
    res.send(result);

  }catch(e){
    console.log(e);
    res.status(500).send(e);
  }
});

// GET
router.get('/get-std', async function(req,res,next){
  try{
    const result = await stdservice.getStd();
    res.send(result);
  }catch(e){
    res.status(500).send(e);
  }
});

// DELETE
router.delete('/del-std', async function(req,res,next){
  try{
    const id = req.query.id;
    const result = await stdservice.deleteStd(id);
    res.send(result);
  }catch(e){
    res.status(500).send(e);
  }
});

module.exports = router;
