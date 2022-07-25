//TODO: Gestion des erreurs via un controller error.
//TODO: Implémentation de JOI validation schema.

const userDataMapper = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {

    //Méthode qui permet à l'utilisateur de se connecter.
    async loginUser(req, res) {
        try {
            const reqEmail = req.body.email
            const reqPassword = req.body.password

            const userDb = await userDataMapper.findByEmail(reqEmail);
            if(!userDb){
                //on renvoit une erreur
                // throw new ApiError('Login Error', {statusCode: 401});
                console.log("J'ai planté dans if !user");
            };
            //On compare le mdp donnée par l'ulisateur avec celui de la bdd
            const checkPassword = await bcrypt.compare(reqPassword, userDb.password);
            if (!checkPassword) {
                //alors je renvoie une erreur
                // throw new ApiError('Login Error', {statusCode: 401});
                console.log("J'ai planté dans le truc du machin chose password compare la j'sais plus quoi");
            };
            req.session.user = userDb
            delete req.session.user.password;
            res.json(req.session.user);

        } catch (ApiError) {
            // throw new ApiError('Login Error', {statusCode: 401});
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

        } catch (ApiError) {
            // throw new ApiError('Login Error', {statusCode: 401});
        };
    },





    //Méthode qui permet de récupérer un utilisateur par son Id.
    async getOneUserById(req, res) {
        try {
            const userDb = await userDataMapper.findByPk(req.params.id);
            if(!userDb){
                // throw new ApiError('This category does not exists', { statusCode: 404 });
            };
            return res.json(userDb);

        } catch (ApiError) {
            // throw new ApiError('Login Error', {statusCode: 401});
        };
    },





    //Méthode qui permet de rechercher les utilisateurs par leur surnom, leur nom ou prénom.
    async getOneUserByNickname(req, res) {
        try {
            const userParams = {
                nickname: req.body.nickname
            };
    
            const userDb = await userDataMapper.findByNickname(userParams);
            if(!userDb){
                // throw new ApiError('This category does not exists', { statusCode: 404 });
            };
            return res.json(userDb);
        } catch (ApiError) {
            // throw new ApiError('Login Error', {statusCode: 401});
        };
        
    },





    //Méthode qui permet à l'utilisateur de se créer un compte sur l'application.
    async createUser(req, res) {
        try {
            const userDb = await userDataMapper.findByEmail(req.body.email);
            if (!userDb) {
                console.log(req.body);
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
            // throw new ApiError('Login Error', {statusCode: 401});
        };
    },




    //Méthode qui permet à l'utilisateur de mettre à jour son profil.
    async updateUser(req, res) {
        try {
            const userDb = await userDataMapper.findByPk(req.params.id);
            if (!userDb) {
                //throw new ApiError('This category does not exists', { statusCode: 404 });
            };
            const body = req.body;
            const savedUser = await userDataMapper.update(body, req.params.id);
            return res.json(savedUser);

        } catch (ApiError) {
            // throw new ApiError('Login Error', {statusCode: 401});
        };
    },




    //Méthode qui permet à l'utilisateur de supprimer son compte.
    async deleteUser(req, res) {
        try {
            const userDb = await userDataMapper.findByPk(req.params.id);
            if (!userDb) {
                // throw new ApiError('This category does not exists', { statusCode: 404 });
            };
            await userDataMapper.delete(req.params.id);
            return res.status(204).json();

        } catch (ApiError) {
            // throw new ApiError('Login Error', {statusCode: 401});
        };
    }
};