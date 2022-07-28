const client = require("../config/db");
const { ApiError } = require('../services/errorHandler');

module.exports = {





  async findAll() {
    try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.tag
        `
      };

      const result = await client.query(preparedQuery);

      if (result.rowCount === 0) {
        return undefined;
    };

    return result.rows;

    } catch (error) {
      res.json({status: "Not Found", code: 404, message: "Tag findAll throw an error"});
      throw new ApiError('Tags not found', {statusCode: 404 });
    };
  },




//Rechercher un évènement par son ID.
  async findByPk(tagId) {
try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.tag
          WHERE id = $1
        `,
        values: [tagId],
      };
      const result = await client.query(preparedQuery);
      if (result.rowCount === 0) {
        return undefined;
    };

    return result.rows[0];

    } catch (error) {
      res.json({status: "Not Found", code: 404, message: "Event findAll throw an error"});
      throw new ApiError('Tag not found', {statusCode: 404 });
    };
  },

};