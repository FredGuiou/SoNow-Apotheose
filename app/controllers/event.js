//TODO: Implémentation de JOI validation schema.

require('dotenv').config();
const eventDataMapper = require('../models/event');
const { ApiError } = require("../services/errorHandler");
console.log(ApiError);
module.exports = {

    //Méthode qui permet de récupérer tous les évènements en bdd.
    async getAllEvents(_, res) {
        
        try {
            const eventDb = await eventDataMapper.findAll();
            if (!eventDb) {
                throw new ApiError('No events in database', {statusCode: 404 });
            }
            return res.json(eventDb);
        } catch (error) {
            throw new ApiError('Service Unvailable', {statusCode: 503 });
        };
    },





    //Méthode qui permet de récupérer un évènement par son ID.
    async getOneEventById(req, res) {
        try {
            const eventDb = await eventDataMapper.findByPk(req.params.event_id);
            if(!eventDb){
                throw new ApiError('Event not found', {statusCode: 404 });
            };
            return res.json(eventDb);

        } catch (error) {
            throw new ApiError('Service Unvailable', {statusCode: 503 });
        };
    },





    //Méthode qui permet de rechercher un évènement par son titre.
    async getOneEventByTitle(req, res) {
        try {
            const eventDb = await eventDataMapper.findByTitle(req.body.title);
            if(!eventDb){
                throw new ApiError('Event not found', {statusCode: 404 });
            };
            return res.json(eventDb);
        } catch (error) {
            throw new ApiError('Service Unvailable', {statusCode: 503 });
        };
        
    },



// TODO: A TESTER QUAND LES DONNEES DE LA TABLE DE LIAISON SERONT INSCRITES EN BDD
    //Méthode qui permet de rechercher un évènement en fonction de leur catégorie.
    async getByTagId(req, res) {
        try {
            const events = await eventDataMapper.findByTagId(req.params.event_id);
            if(!events) {
                throw new ApiError('Event not found', {statusCode: 404 });
            }
            return res.json(events);

        } catch (error) {
            throw new ApiError('Service Unvailable', {statusCode: 503 });
        };     

    },





    //Méthode qui permet de créer un nouvel évènement.
    async createEvent(req, res) {
        try {
            const eventDb = await eventDataMapper.findByTitle(req.body.title);
            if (!eventDb) {
                const insertEvent = await eventDataMapper.insert(req.body);
                res.json(insertEvent);
            } else {
                throw new ApiError('Event not created', {statusCode: 503 });
            };

        } catch (error) {
            throw new ApiError('Service Unvailable', {statusCode: 503 });
        };
    },






    //Méthode qui permet de mettre à jour un évènement par son créateur.
    async updateEvent(req, res) {
        try {
            const eventDb = await eventDataMapper.findByPk(req.params.event_id);
            if (!eventDb) {
                throw new ApiError('Event not found', {statusCode: 404 });
            };
            const savedEvent = await eventDataMapper.update(req.params.event_id, req.body);
            return res.json(savedEvent);

        } catch (error) {
            throw new ApiError('Service Unvailable', {statusCode: 503 });
        };
    },





    //Méthode qui permet de supprimer un évènement par son créateur.
    async deleteEvent(req, res) {
        try {
            const eventDb = await eventDataMapper.findByPk(req.params.event_id);
            if (!eventDb) {
                throw new ApiError('Event not found', {statusCode: 404 });
            };
            await eventDataMapper.delete(req.params.event_id);
            return res.status(204).json();

        } catch (error) {
            throw new ApiError('Service Unvailable', {statusCode: 503 });
        };
    }
};