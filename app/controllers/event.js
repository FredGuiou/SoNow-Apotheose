//TODO: Gestion des erreurs via un controller error.
//TODO: Implémentation de JOI validation schema.

require('dotenv').config();
const eventDataMapper = require('../models/event');

module.exports = {

    //Méthode qui permet de récupérer tous les évènements en bdd.
    async getAllEvents(_, res) {
        
        try {
            const eventDb = await eventDataMapper.findAll();
            return res.json(eventDb);

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    },





    //Méthode qui permet de récupérer un évènement par son ID.
    async getOneEventById(req, res) {
        try {
            const eventDb = await eventDataMapper.findByPk(req.params.id);
            if(!eventDb){
                // throw new ApiError('', { statusCode:  });
            };
            return res.json(eventDb);

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    },





    //Méthode qui permet de rechercher un évènement par son titre.
    async getOneEventByTitle(req, res) {
        try {
            const eventParams = {
                title: req.body.title
            };
    
            const eventDb = await eventDataMapper.findByTitle(eventParams);
            if(!eventDb){
                // throw new ApiError('', { statusCode:  });
            };
            return res.json(eventDb);
        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
        
    },




    //Méthode qui permet de rechercher un évènement en fonction de leur catégorie.
    async getByTagId(req, res) {
        try {
            const events = await eventDataMapper.findByTagId(req.params.id);
            res.json(events);

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        }
        

    },





    //Méthode qui permet de créer un nouvel évènement.
    async createEvent(req, res) {
        try {
            const eventDb = await eventDataMapper.findByTitle(req.body.title);
            if (!eventDb) {
                console.log(req.body);
                const newEvent = {
                    
                    //TODO:Implémenter les propriétés du newEvent

                };
                const insertEvent = await eventDataMapper.insert(newEvent);
                res.json(insertEvent);
            } else {
                // throw new ApiError('', {statusCode: });
            };

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    },






    //Méthode qui permet de mettre à jour un évènement par son créateur.
    async updateEvent(req, res) {
        try {
            const eventDb = await eventDataMapper.findByPk(req.params.id);
            if (!eventDb) {
                //throw new ApiError('', { statusCode: });
            };
            const body = req.body;
            const savedEvent = await eventDataMapper.update(body, req.params.id);
            return res.json(savedEvent);

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    },





    //Méthode qui permet de supprimer un évènement par son créateur.
    async deleteEvent(req, res) {
        try {
            const eventDb = await eventDataMapper.findByPk(req.params.id);
            if (!eventDb) {
                // throw new ApiError('This category does not exists', { statusCode: 404 });
            };
            await eventDataMapper.delete(req.params.id);
            return res.status(204).json();

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    }
};