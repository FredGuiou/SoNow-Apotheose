//TODO: Implémentation de JOI validation schema.

require('dotenv').config();
const eventDataMapper = require('../models/event');
const { ApiError } = require("../services/errorHandler");

module.exports = {

    //Méthode qui permet de récupérer tous les évènements en bdd.
    async getAllEvents(_, res) {
        
            const eventDb = await eventDataMapper.findAll();

            if (!eventDb) {
                throw new ApiError('No any event in database', {statusCode: 404 });
            }

            return res.json(eventDb);
    },





    //Méthode qui permet de récupérer un évènement par son ID.
    async getOneEventById(req, res) {
            const eventDb = await eventDataMapper.findByPk(req.params.event_id);

            if(!eventDb){
                throw new ApiError('Event not found', {statusCode: 404 });
            };

            return res.json(eventDb);
    },





    //Méthode qui permet de rechercher un évènement par son titre.
    async getOneEventByTitle(req, res) {
            const eventDb = await eventDataMapper.findByTitle(req.body.title);

            if(!eventDb){
                throw new ApiError('Event not found', {statusCode: 404 });
            };

            return res.json(eventDb);
    },



// TODO: A TESTER QUAND LES DONNEES DE LA TABLE DE LIAISON SERONT INSCRITES EN BDD
    //Méthode qui permet de rechercher un évènement en fonction de leur catégorie.
    async getByTagId(req, res) {
            const events = await eventDataMapper.findByTagId(req.params.event_id);

            if(!events) {
                throw new ApiError('Event not found', {statusCode: 404 });
            }

            return res.json(events);
    },





    //Méthode qui permet de créer un nouvel évènement.
    async createEvent(req, res) {
            const eventDb = await eventDataMapper.findByTitle(req.body.title);

            if (eventDb) {
                throw new ApiError('Event already exists', {statusCode: 400 });
            } else {
                const insertEvent = await eventDataMapper.insert(req.body);
                res.json(insertEvent);
            };
    },






    //Méthode qui permet de mettre à jour un évènement par son créateur.
    async updateEvent(req, res) {
            const eventDb = await eventDataMapper.findByPk(req.params.event_id);

            if (!eventDb) {
                throw new ApiError('Event not found', {statusCode: 404 });
            };

            const savedEvent = await eventDataMapper.update(req.params.event_id, req.body);
            return res.json(savedEvent);
    },





    //Méthode qui permet de supprimer un évènement par son créateur.
    async deleteEvent(req, res) {
            const eventDb = await eventDataMapper.findByPk(req.params.event_id);

            if (!eventDb) {
                throw new ApiError('Event not found', {statusCode: 404 });
            };
            
            await eventDataMapper.delete(req.params.event_id);
            return res.status(204).json();
    }
};