const express = require('express');

const router = express.Router();

let dryDustbinPercentage = 0;
let wetDustbinPercentage = 0;

router.get('/get', (req, res) => {
  res.status(200);
  res.send({
    message: 'success',
    dryDustbinPercentage,
    wetDustbinPercentage,
  });
});

router.get('/set', (req, res) => {
  console.log('webhook hit!!');
  // dryDustbinPercentage = req.query.dry;
  // wetDustbinPercentage = req.query.wet;
  try {
    res.status(200);
    res.json({
      message: 'success',
    });
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
});

module.exports = router;
