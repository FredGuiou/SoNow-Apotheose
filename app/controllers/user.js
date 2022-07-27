//TODO: Gestion des erreurs via un controller error.
//TODO: Implémentation de JOI validation schema.

require('dotenv').config();
const userDataMapper = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.ACCES_SECRET_KEY;
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
                        delete req.session.password;

                        const expireIn = 24 * 60 * 60;
                        const accesToken = jwt.sign({ user },SECRET_KEY,{ expiresIn: expireIn });

                        const refreshToken = jwt.sign({ user },REFRESH_SECRET_KEY,{ expiresIn: expireIn });
                        res.header('Authorization', 'Bearer ' + accesToken);
                        res.header('RefreshToken', 'Bearer ' + refreshToken);
                        delete req.session.user.password;
                        return res.status(200).json(req.session.user);
                    }

                    return res.status(403).json('wrong_credentials');
                });
            } else {
                return res.status(404).json('user_not_found');
            }
        } catch (error) {
            return res.status(501).json(error);
        }
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

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    },





    //Méthode qui permet de récupérer un utilisateur par son Id.
    async getOneUserById(req, res) {
        try {
            const userDb = await userDataMapper.findByPk(req.params.user_id);
            if(!userDb){
                // throw new ApiError('', { statusCode: });
            };
            return res.json(userDb);

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    },





    //Méthode qui permet de rechercher les utilisateurs par leur surnom, leur nom ou prénom.
    async getOneUserByNickname(req, res) {
        try {
            const userDb = await userDataMapper.findByNickname(req.body.nickname);
            if(!userDb){
                // throw new ApiError('', { statusCode:  });
            };
            return res.json(userDb);
        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
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
                console.log("Ça bug ! :D");
            };
            //On vérifie que le format de l'email soit valide avec Joi validation
                //Si le format de la regex n'est pas respecté
                    //on envoie un message d'erreur
                
                
            //On vérife que le format de mot de passe soit correct
                //Si le format de mot de passe n'est pas respecté
                    //On envoie un message d'erreur

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    },




    //Méthode qui permet à l'utilisateur de mettre à jour son profil.
    async updateUser(req, res) {
        try {
            const userDb = await userDataMapper.findByPk(req.params.user_id);
            if (!userDb) {
                //throw new ApiError('', { statusCode: });
            };
            const savedUser = await userDataMapper.update(req.params.user_id, req.body);
            return res.json(savedUser);
        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    },




    //Méthode qui permet à l'utilisateur de supprimer son compte.
    async deleteUser(req, res) {
        try {
            const userDb = await userDataMapper.findByPk(req.params.user_id);
            if (!userDb) {
                // throw new ApiError('', { statusCode: });
            };
            await userDataMapper.delete(req.params.user_id);
            return res.status(204).json({code: 204, message: "Cet utilisateur a bien été supprimer"});

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    }
};