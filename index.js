require("dotenv").config();
const express = require("express");
const router = require("./app/routers");
const app = express();


// Decode body
app.use(express.urlencoded({ extended: true })); // On parse les body de type `x-www-form-url-encoded` et on les ajoute au req.body
app.use(express.json()); // Pour parser les body de type JSON (optionnel car pas demandé par la spécification)

// Service /api routes
app.use("/", router);

// Start app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at port : ${port}`);
});