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


    //Méthode qui permet de récupérer un évènement par son slug.
    async getOneEventBySlug(req, res) {
        const eventDb = await eventDataMapper.findBySlug(req.params.event_slug);

        if(!eventDb){
            throw new ApiError('Event not found', {statusCode: 404 });
        };

        return res.json(eventDb);
},


    //Méthode qui permet de rechercher un évènement par son titre.
    async getEventsByTitle(req, res) {
            const eventDb = await eventDataMapper.findByTitle(req.body.title);

            if(!eventDb){
                throw new ApiError('Event not found', {statusCode: 404 });
            };

            return res.json(eventDb);
    },


    async getEventsByPinUser(req, res) {
            const result = await eventDataMapper.findByPin(req.body.user_id);

            if(!result) {
                throw new ApiError('No events in favorites', {statusCode: 404 });
            };

            return res.json(result);
    },

    async getEventsByAttendUser(req, res) {
        const result = await eventDataMapper.findByAttend(req.body.user_id);

        if(!result) {
            throw new ApiError('No events in favorites', {statusCode: 404 });
        };

        return res.json(result);
},

    //Méthode qui permet de rechercher un évènement en fonction de leur catégorie.
    async getByTagId(req, res) {
            const events = await eventDataMapper.findByTagId(req.params.tag_id);

            if(!events) {
                throw new ApiError('Event not found', {statusCode: 404 });
            }

            return res.json(events);
    },


    //Méthode qui permet d'ajouter un évènement aux favoris de l'utilisateur.
    async addToBookmarks(req, res) {

        const result = await eventDataMapper.pinEvent(req.body.user_id, req.body.event_id);

        if(!result) {
            throw new ApiError('Event already added', {statusCode: 400 });
        } else {

            return res.status(200).json({result, "message": "Event added to bookmarks succesfully"});
        }
    },

    //Méthode qui permet de supprimer un évènement aux favoris de l'utilisateur.
    async delToBookmarks(req, res) {

        const result = await eventDataMapper.unpinEvent(req.body.user_id, req.body.event_id);

        if(!result) {
            throw new ApiError('Event not found', {statusCode: 404 });
        } else{

            return res.status(200).json({result, "message": "Event deleted from bookmarks succesfully"});
        }
    },


//Méthode qui permet de s'identifier comme participant à un évènement.
async addAttendEvent(req, res) {

    const result = await eventDataMapper.pinAttendEvent(req.body.user_id, req.body.event_id);

    if(!result) {
        throw new ApiError('Event already added', {statusCode: 400 });
    } else {

        return res.status(200).json({result, "message": "User is attendind"});
    }
},

//Méthode qui permet de supprimer sa participation à un évènement.
async delAttendEvent(req, res) {

    const result = await eventDataMapper.unpinAttendEvent(req.body.user_id, req.body.event_id);

    if(!result) {
        throw new ApiError('Event not found', {statusCode: 404 });
    } else{

        return res.status(200).json({result, "message": "User is not attending"});
    }
},

    async followEvent () {

    },


    async unfollowEvent () {

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
            return res.status(200).json({code: 200, message: "Event has been deleted"});
    }
};