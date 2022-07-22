//TODO: Gestion des erreurs via un controller error.
//TODO: encyptage des mots de passes.
//TODO: Implémentation de JOI validation schema.

const userDataMapper = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {

    //Méthode qui permet à l'utilisateur de se connecter.
    async loginUser(req, res) {
        const reqEmail = req.body.email
        const reqPassword = req.body.password

        //Vérifier auprès de la base donnée si elle connait un utilisateur 
        const userDb = await userDataMapper.findByEmail(reqEmail);
        //Si la bdd ne connait pas l'utilisateur
        if(!userDb){
            //on renvoit une erreur
            // throw new ApiError('Login Error', {statusCode: 401});
            console.log("J'ai planté dans if !user");
        }
        //On compare le mdp donnée par l'ulisateur avec celui de la bdd
        const checkPassword = await bcrypt.compare(reqPassword, userDb.password);
        //Si le mot de passe ne correspond pas
        if (!checkPassword) {
            //alors je renvoie une erreur
            // throw new ApiError('Login Error', {statusCode: 401});
            console.log("J'ai planté dans le truc du machin chose password compare la j'sais plus quoi");
        }
        //On enregistre les données utilisateur en session req.session
        req.session.user = userDb
        //On supprime le mot de passse par soucis de sécurité
        delete req.session.user.password;
        //on revoit les données de l'utilisateur
        res.json(req.session.user); 
    },
    
    async getAllUsers(_, res) {
        
    },

    async getOneUser(req, res) {
        
    },

    //Méthode qui permet à l'utilisateur de se créer un compte sur l'application.
    async createUser(req, res) {
        const userDb = await userDataMapper.findByEmail(req.body.email);
        //On vérifie si l'email n'est pas déjà pris.
            //Si userDb n'existe pas
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
            }
            //On vérifie que le format de l'email soit valide avec Joi validation
                //Si le format de la regex n'est pas respecté
                    //on envoie un message d'erreur
                
                
            //On vérife que le format de mot de passe soit correct
                //Si le format de mot de passe n'est pas respecté
                    //On envoie un message d'erreur
    },

    async updateUser(req, res) {
        
    },

    async deleteUser(req, res) {
        
    },

};