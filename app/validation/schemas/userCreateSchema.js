const Joi = require('joi');

module.exports = Joi.object({
    label: Joi.string().required(),
    route: Joi.string()
        .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)  // On place une regex validant le format d'un email (caractère alphanumérique & .-_  @  caractères alpha . 2 à 4 caractères alpha)
        .required(),
},
{
    label: Joi.string().required(),
    route: Joi.string()
        .pattern(/^(?=.*[0-9])(?=.*[az])(?=.*[AZ])(?=.*[@#$%^&-+=() ])(?=\\S+$).{8, 20}$/)  // On place une regex gérants les contraintes suivantes 8 caract min 20 max, avec au moins 1 chiffre une minuscule une majuscule, et un carctère spéciale incluant  !@#$%&*()-+=^ on exclut les "espace"
        .required(),
}).required();