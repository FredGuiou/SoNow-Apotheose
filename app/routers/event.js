const express = require('express');


const { eventController: controller } = require('../controllers');

const controllerHandler = require('../services/controllerHandler');

const router = express.Router();


router
    .route('/events')
    .get(controllerHandler(controller.getAllEvents))
    .post(controllerHandler(controller.createEvent));

router
    .route('/events/:event_id(\\d+)')
    .get(controllerHandler(controller.getOneEvent))
    .patch(controllerHandler(controller.updateEvent))
    .delete(controllerHandler(controller.deleteEvent));

router
    .route('/events/tags/:tag_id(\\d+)')
    .get(controllerHandler(controller.getByTagId));


module.exports = router;