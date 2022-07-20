const express = require('express');

const { tagController: controller } = require('../controllers');

const controllerHandler = require('../services/controllerHandler');

const router = express.Router();

router
    .route('/tags')
    .get(controllerHandler(controller.getAllTags));

router
    .route('/tags/:tag_id')
    .get(controllerHandler(controller.getOneTag));

module.exports = router;