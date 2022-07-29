//TODO: Implémentation de JOI validation schema.

require('dotenv').config();
const userDataMapper = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.ACCESS_SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;


module.exports = {

    //Méthode qui permet à l'utilisateur de se connecter.
    async loginUser(req, res) {
        const { email, password } = req.body;

        try {
            let user = await userDataMapper.findByEmail(email);

            if (user) {
                bcrypt.compare(password, user.password, function(err, response) {
                    if (err) {
                        throw new Error(err);
                    }
                    if (response) {
                        req.session.user = user

                        const expireIn = 24 * 60 * 60;
                        const accessToken = jwt.sign({ user },SECRET_KEY,{ expiresIn: expireIn });
                        const refreshToken = jwt.sign({ user },REFRESH_SECRET_KEY,{ expiresIn: expireIn });
                        res.header('Authorization', 'Bearer ' + accessToken);
                        res.header('RefreshToken', 'Bearer ' + refreshToken);

                        delete req.session.user.password;
                        return res.status(200).json({accessToken, refreshToken ,user: req.session.user});
                    }

                    return res.status(403).json({ codeStatus: 403, message: 'Mauvais identifiant ou mot de passe' });
                });
            } else {
                return res.status(404).json('user_not_found');
            }
        } catch (error) {
            return res.status(501).json(error);
        }
    },





    //Méthode qui permet à l'utilisateur de se déconnecter de sa session.
    async logoutUser (req, res) {
        //On détruit la session utilisateur.
        try {
        req.session.destroy();

        return res.status(204).json('Utilisateur déconnecté');

    } catch (error) {
        res.json({status: "Service Unvailable", code: 503, message: "User logoutUser throw an error"});
        throw new ApiError('Service Unvailable', {statusCode: 503 });
    };
        
    },




    async followUser () {

    },




    async unfollowUser () {

    },




    async followEvent () {

    },


    async unfollowEvent () {

    },





    //Méthode qui permet de récupérer tous les utilisateurs.
    async getAllUsers(_, res) {
        try {
            const userDb = await userDataMapper.findAll();
            return res.json(userDb);

        } catch (error) {
            res.json({status: "Not found", code: 404, message: "User getAllUsers throw an error"});
            throw new ApiError('Users not found', {statusCode: 404 });
        };
    },





    //Méthode qui permet de récupérer un utilisateur par son Id.
    async getOneUserById(req, res) {
        try {
            const userDb = await userDataMapper.findByPk(req.params.user_id);
            if(!userDb){
                throw new ApiError('User not found', {statusCode: 404 });
            };
            return res.json(userDb);

        } catch (error) {
            res.json({status: "Not found", code: 404, message: "User getOneUserById throw an error"});
            throw new ApiError('User not found', {statusCode: 404 });
        };
    },





    //Méthode qui permet de rechercher les utilisateurs par leur surnom, leur nom ou prénom.
    async getOneUserByNickname(req, res) {
        try {
            const userDb = await userDataMapper.findByNickname(req.body.nickname);
            if(!userDb){
                throw new ApiError('User not found', {statusCode: 404 });
            };
            return res.json(userDb);
        } catch (error) {
            res.json({status: "Not found", code: 404, message: "User getOneUserByNickname throw an error"});
            throw new ApiError('User not found', {statusCode: 404 });
        };
        
    },





    //Méthode qui permet à l'utilisateur de se créer un compte sur l'application.
    async createUser(req, res) {
        try {
            const userDb = await userDataMapper.findByEmail(req.body.email);
            if (!userDb) {
                //On crypte le mot de passe.
                const encryptedPwd = await bcrypt.hash(req.body.password, 10);
                const newUser = {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    nickname: req.body.nickname,
                    email: req.body.email,
                    password: encryptedPwd
                };
                const insertUser = await userDataMapper.insert(newUser);
                res.json(insertUser);
            } else {
                throw new ApiError('User not created', {statusCode: 503 });
            };
            //On vérifie que le format de l'email soit valide avec Joi validation
                //Si le format de la regex n'est pas respecté
                    //on envoie un message d'erreur
                
                
            //On vérife que le format de mot de passe soit correct
                //Si le format de mot de passe n'est pas respecté
                    //On envoie un message d'erreur

        } catch (error) {
            res.json({status: "Service Unvailable", code: 503, message: "User createUser throw an error"});
            throw new ApiError('Service Unvailable', {statusCode: 503 });
        };
    },




    //Méthode qui permet à l'utilisateur de mettre à jour son profil.
    async updateUser(req, res) {
        try {
            const userDb = await userDataMapper.findByPk(req.params.user_id);
            if (!userDb) {
                throw new ApiError('User not updated', {statusCode: 503 });
            };
            const savedUser = await userDataMapper.update(req.params.user_id, req.body);
            return res.json(savedUser);
        } catch (error) {
            res.json({status: "Service Unvailable", code: 503, message: "User updateUser throw an error"});
            throw new ApiError('Service Unvailable', {statusCode: 503 });
        };
    },




    //Méthode qui permet à l'utilisateur de supprimer son compte.
    async deleteUser(req, res) {
        try {
            const userDb = await userDataMapper.findByPk(req.params.user_id);
            if (!userDb) {
                throw new ApiError('User not updated', {statusCode: 503 });
            };
            await userDataMapper.delete(req.params.user_id);
            return res.status(204).json({code: 204, message: "Cet utilisateur a bien été supprimer"});

        } catch (error) {
            res.json({status: "Service Unvailable", code: 503, message: "User deleteUser throw an error"});
            throw new ApiError('Service Unvailable', {statusCode: 503 });
        };
    }
};