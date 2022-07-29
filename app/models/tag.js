const client = require("../config/db");
const { ApiError } = require("../services/errorHandler");

module.exports = {


  async findAll() {
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
        throw new ApiError('No tag in database', { statusCode: 404 });
      };

      return result.rows;
  },




//Rechercher un évènement par son ID.
  async findByPk(tagId) {
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
        throw new ApiError('Tag not found', { statusCode: 404 });
      };

      return result.rows[0];
  },

};