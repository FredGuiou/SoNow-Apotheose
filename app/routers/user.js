const express = require('express');
const router = express.Router();


const { userController: controller } = require('../controllers');

const controllerHandler = require('../services/controllerHandler');

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