
const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const eventRouter = require('./event');
const tagRouter = require('./tag');
const bcrypt = require('bcrypt');



router.all('/', async function(_, res) {
  const mdp = "motdepassepardefaut";
  const mdpcrypt = await bcrypt.hash(mdp, 10)
  console.log(mdpcrypt);
  res.send("Coucou ça marche :D");
});

router.use('/user', userRouter);
router.use('/event', eventRouter);
router.use('/tag', tagRouter);


module.exports = router;