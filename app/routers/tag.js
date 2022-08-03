const express = require('express');
const router = express.Router();


const { tagController: controller } = require('../controllers');

const controllerHandler = require('../services/controllerHandler');


router
    .route('/')
    .get(controllerHandler(controller.getAllTags));

router
    .route('/withevents')
    .get(controllerHandler(controller.getAllTagWithEvents));
    
router
    .route('/:tag_id(\\d+)')
    .get(controllerHandler(controller.getOneTag));
    


module.exports = router;