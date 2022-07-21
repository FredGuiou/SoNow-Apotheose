const express = require('express');
const router = express.Router();


const { eventController: controller } = require('../controllers');

const controllerHandler = require('../services/controllerHandler');


router
    .route('/')
    .get(controllerHandler(controller.getAllEvents))
    .post(controllerHandler(controller.createEvent));

router
    .route('/:event_id(\\d+)')
    .get(controllerHandler(controller.getOneEvent))
    .patch(controllerHandler(controller.updateEvent))
    .delete(controllerHandler(controller.deleteEvent));

router
    .route('/tag/:tag_id(\\d+)')
    .get(controllerHandler(controller.getByTagId));


module.exports = router;