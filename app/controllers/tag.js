//TODO: Gestion des erreurs via un controller error.


const tagDataMapper = require('../models/tag');

module.exports = {

    //Méthode qui permet de récupérer tous les tags.
    async getAllTags(_, res) {
        try {
            const tagDb = await tagDataMapper.findAll();
            return res.json(tagDb);

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    },

    //Méthode qui permet de récupérer un tag par son ID.
    async getOneTag(req, res) {
        try {
            const tagDb = await tagDataMapper.findByPk(req.params.tag_id);
            if(!tagDb){
                // throw new ApiError('', { statusCode:  });
            };
            return res.json(tagDb);

        } catch (ApiError) {
            // throw new ApiError('', {statusCode: });
        };
    },

};