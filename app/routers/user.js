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

//Routes pour créer ou (dé)connecter l'utilisateur.
router
    .route('/login')
    .post(controllerHandler(controller.loginUser));

router
    .route('/signup')
    .post(controllerHandler(controller.createUser));

router
    .route('/logout')
    .get(controllerHandler(controller.logoutUser));

//Routes pour récupérer, modifier, supprimer un utilisateur.
router
    .route('/:user_id')
    .get(controllerHandler(controller.getOneUserById))
    .patch(controllerHandler(controller.updateUser))
    .delete(controllerHandler(controller.deleteUser));

router
    .route('/:user_id/followers')
    .get(controllerHandler(controller.getFollowers));

router
    .route('/:user_id/followed')
    .get(controllerHandler(controller.getFollowed));

//Routes pour qu'un utilisateur recherche un autre utilisateur par son surnom.
router
    .route('/search')
    .post(controllerHandler(controller.getOneUserByNickname));


module.exports = router;