/*
Il s'agit d'un générateur de Middleware pour la validation 
On cherche ici à valider le corps de la requête
en utilisatn des schemas passés en paramètres
Si il y a une erreur cela renvoit un statut 400.
*/

const { ApiError } = require("../services/errorHandler");

module.exports = (prop, schema) => async (request, _, next) => {
    try {
        await schema.validateAsync(request[prop]);
        next();
    } catch (error) {
        next(new ApiError(error.details[0].message, { statusCode: 400 }));
    }
};
