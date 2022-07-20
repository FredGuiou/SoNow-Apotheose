const express = require('express');
const router = express.Router();


const { tagController: controller } = require('../controllers');

const controllerHandler = require('../services/controllerHandler');


router
    .route('/tags')
    .get(controllerHandler(controller.getAllTags));

router
    .route('/tags/:tag_id')
    .get(controllerHandler(controller.getOneTag));

module.exports = router;