//TODO: Implémentation de JOI validation schema.

require('dotenv').config();
const userDataMapper = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.ACCESS_SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;

const { ApiError } = require("../services/errorHandler");


module.exports = {

    //Méthode qui permet à l'utilisateur de se connecter.
    async loginUser(req, res) {
        const { email, password } = req.body;

        let user = await userDataMapper.findByEmailForLogin(email);

        if (user) {
            bcrypt.compare(password, user.password, function (err, result){
                if (result) {
                req.session.user = user

                const expireIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ user },SECRET_KEY,{ expiresIn: expireIn });
                const refreshToken = jwt.sign({ user },REFRESH_SECRET_KEY,{ expiresIn: expireIn });
                res.header('Authorization', 'Bearer ' + accessToken);
                res.header('RefreshToken', 'Bearer ' + refreshToken);

                delete req.session.user.password;
                return res.status(200).json({accessToken, refreshToken ,user: req.session.user});
                } else {
                    return res.status(403).json({status :'error', statusCode :403, message:'Wrong email or password'});
                }
            });
        }
    },





    //Méthode qui permet à l'utilisateur de se déconnecter de sa session.
    async logoutUser (req, res) {
        //On détruit la session utilisateur.
        req.session.destroy();

        return res.status(204).json('Successful disconnected');
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
            const userDb = await userDataMapper.findAll();
            
            if(!userDb) {
                throw new ApiError('No any user in database', { statusCode: 404 });
            };
            
            return res.json(userDb);
    },





    //Méthode qui permet de récupérer un utilisateur par son Id.
    async getOneUserById(req, res) {

            const userDb = await userDataMapper.findByPk(req.params.user_id);

            if(!userDb) {
                throw new ApiError('User not found', { statusCode: 404 });
            }
            
            return res.json(userDb);    
    },





    //Méthode qui permet de rechercher les utilisateurs par leur surnom, leur nom ou prénom.
    async getOneUserByNickname(req, res) {
            const userDb = await userDataMapper.findByNickname(req.body.nickname);

            if(!userDb) {
                throw new ApiError('User not found', { statusCode: 404 });
            };

            return res.json(userDb);        
    },





    //Méthode qui permet à l'utilisateur de se créer un compte sur l'application.
    async createUser(req, res) {
            const userDb = await userDataMapper.findByEmail(req.body.email);
            
            if (userDb) {
                throw new ApiError('User already exists', { statusCode: 400 });
            } else {
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
            };
            //On vérifie que le format de l'email soit valide avec Joi validation
                //Si le format de la regex n'est pas respecté
                    //on envoie un message d'erreur
                
                
            //On vérife que le format de mot de passe soit correct
                //Si le format de mot de passe n'est pas respecté
                    //On envoie un message d'erreur
    },




    //Méthode qui permet à l'utilisateur de mettre à jour son profil.
    async updateUser(req, res) {

            const userDb = await userDataMapper.findByPk(req.params.user_id);

            if (!userDb) {
                throw new ApiError('User not found', { statusCode: 404 });
            };

            const savedUser = await userDataMapper.update(req.params.user_id, req.body);

            return res.json(savedUser);
    },




    //Méthode qui permet à l'utilisateur de supprimer son compte.
    async deleteUser(req, res) {
            const userDb = await userDataMapper.findByPk(req.params.user_id);

            if (!userDb) {
                throw new ApiError('User not found', { statusCode: 404 });
            };

            await userDataMapper.delete(req.params.user_id);

            return res.status(200).json({code: 200, message: "User has been deleted"});

        }
};

