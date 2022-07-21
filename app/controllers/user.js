const userDataMapper = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {

    //Méthode qui permet à l'utilisateur de se connecter.
    async loginUser(req, res) {
        const email = req.body.email
        const password = req.body.password

        //Vérifier auprès de la base donnée si elle connait un utilisateur 
        const user = await userDataMapper.findByEmail(email);
        console.log(user);
        //Si la bdd ne connait pas l'utilisateur
        if(!user){
            //on renvoit une erreur
            // throw new ApiError('Login Error', {statusCode: 401});
            console.log("J'ai planté dans if !user");
        }
        //On compare le mdp donnée par l'ulisateur avec celui de la bdd
        // const checkPassword = await bcrypt.compare(password, user.password);
        // console.log(checkPassword);
        //Si le mot de passe ne correspond pas
        if (password !== user.password) {
            //alors je renvoie une erreur
            // throw new ApiError('Login Error', {statusCode: 401});
            console.log("J'ai planté dans le truc du machin chose password compare la j'sais plus quoi");
        }
        //On enregistre les données utilisateur en session req.session
        req.session.user = user
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
        const email = req.body.email
        const password = req.body.password

        //On vérifie si l'email n'est pas déjà pris.
            //Si l'email existe déjà en BDD
                //On renvoie un mesage d'erreur
            
            //On vérifie que le format de l'email soit valide avec Joi validation
                //Si le format de la regex n'est pas respecté
                    //on envoie un message d'erreur
                
                
                
            //On vérife que le format de mot de passe soit correct
                //Si le format de mot de passe n'est pas respecté
                    //On envoie un message d'erreur

                    //On crypte le mot de passe.





        
    },

    async updateUser(req, res) {
        
    },

    async deleteUser(req, res) {
        
    },

};