
const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const eventRouter = require('./event');
const tagRouter = require('./tag');



router.all('/', function(_, res) {
  res.send("Coucou ça marche :D");
  console.log("Coucou ça marche :D");
});

router.use('/users', userRouter);
router.use('/event', eventRouter);
router.use('/tag', tagRouter);


module.exports = router;