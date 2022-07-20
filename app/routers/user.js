const express = require('express');

const { userController: controller } = require('../controllers');

const controllerHandler = require('../services/controllerHandler');

const router = express.Router();

router
    .route('/users')
    .get(controllerHandler(controller.getAllUsers));

router
    .route('/users/:user_id')
    .get(controllerHandler(controller.getOneUser))
    .post(controllerHandler(controller.createUser))
    .patch(controllerHandler(controller.updateUser))
    .delete(controllerHandler(controller.deleteUser));

module.exports = router;