const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.send('API working from index route');
});

module.exports = router;
