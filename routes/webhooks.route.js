const express = require('express');

const router = express.Router();

let dryDustbinPercentage = 1;
let wetDustbinPercentage = 1;

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
  dryDustbinPercentage = req.query.dry;
  wetDustbinPercentage = req.query.wet;
  try {
    console.log(dryDustbinPercentage, wetDustbinPercentage);
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
