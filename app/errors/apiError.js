// On implémente un constructeur qui gèrera nos propres types d'erreurs.

module.exports = class ApiError extends Error {
    constructor(message, infos) {
        //On envoie le message à la classe mère Error
        super(message);
        //On définit le nom de l'erreur (ici il s'agit au départ de 'error')
        this.name = 'ApiError';
        //On définit les informatiosn complémentaires pour les distribuer le moment venu
        this.infos = infos;
    }
};