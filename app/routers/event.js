const express = require('express');
const router = express.Router();


const { eventController: controller } = require('../controllers');

const controllerHandler = require('../services/controllerHandler');


router
    .route('/')
    .get(controllerHandler(controller.getAllEvents))
    .post(controllerHandler(controller.createEvent));

router
    .route('/search')
    .post(controllerHandler(controller.getEventsByTitle));

router
    .route('/getbookmarks')
    .post(controllerHandler(controller.getEventsByPinUser));

router
    .route('/getattend')
    .post(controllerHandler(controller.getEventsByAttendUser));

router
    .route('/:event_id(\\d+)')
    .get(controllerHandler(controller.getOneEventById))
    .patch(controllerHandler(controller.updateEvent))
    .delete(controllerHandler(controller.deleteEvent));

router
    .route('/tag/:tag_id(\\d+)')
    .get(controllerHandler(controller.getByTagId));

router
    .route('/bookmarks')
    .post(controllerHandler(controller.addToBookmarks))
    .delete(controllerHandler(controller.delToBookmarks));
    

router
    .route('/attend')
    .post(controllerHandler(controller.addAttendEvent))
    .delete(controllerHandler(controller.delAttendEvent));

router
    .route('/:event_slug')
    .get(controllerHandler(controller.getOneEventBySlug));


module.exports = router;