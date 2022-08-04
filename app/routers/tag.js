const express = require('express');
const router = express.Router();


const { tagController: controller } = require('../controllers');

const controllerHandler = require('../services/controllerHandler');

//Les différentes routes de l'API pour les tags.

//Route pour récupérer tous les tags
router
    .route('/')
    .get(controllerHandler(controller.getAllTags));

//Route pour récupérer tous les tags avec les évènements associés
router
    .route('/withevents')
    .get(controllerHandler(controller.getAllTagWithEvents));
    

//Route pour récupérer un tag par son ID.
    router
    .route('/:tag_id(\\d+)')
    .get(controllerHandler(controller.getOneTag));
    


module.exports = router;