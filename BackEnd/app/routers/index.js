
const express = require('express');
const router = express.Router();


router.get('/', function(_, res) {
  res.send("Coucou ça marche :D");
  console.log("Coucou ça marche :D");
});

module.exports = router;