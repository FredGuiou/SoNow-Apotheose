//TODO: Gestion des erreurs via un controller error.


const tagDataMapper = require('../models/tag');
const { ApiError } = require("../services/errorHandler");

module.exports = {

    //Méthode qui permet de récupérer tous les tags.
    async getAllTags(_, res) {
            const tagDb = await tagDataMapper.findAll();

            if(!tagDb) {
                throw new ApiError('Not any tag in database', {statusCode: 404 });
            }

            return res.json(tagDb);
    },

    //Méthode qui permet de récupérer un tag par son ID.
    async getOneTag(req, res) {
            const tagDb = await tagDataMapper.findByPk(req.params.tag_id);

            if(!tagDb){
                throw new ApiError('Tag not found', {statusCode: 404 });
            };
            
            return res.json(tagDb);
    },
};