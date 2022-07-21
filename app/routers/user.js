const express = require('express');
const router = express.Router();

//Importation du controller des utilisateurs.
const { userController: controller } = require('../controllers');

const controllerHandler = require('../services/controllerHandler');

//Les différentes routes de l'API pour l'utilisateur.

//Route pour récupérer tous les utilisateurs.
router
    .route('/')
    .get(controllerHandler(controller.getAllUsers));

//Routes pour créer ou connecter l'utilisateur.
router
    .route('/login')
    .post(controllerHandler(controller.loginUser));

router
    .route('/signup')
    .post(controllerHandler(controller.createUser));

//Routes pour récupérer, modifier, supprimer un utilisateur .
router
    .route('/:user_id')
    .get(controllerHandler(controller.getOneUser))
    .patch(controllerHandler(controller.updateUser))
    .delete(controllerHandler(controller.deleteUser));

module.exports = router;