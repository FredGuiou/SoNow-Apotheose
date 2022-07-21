const client = require("../config/db");

module.exports = {
  async findAll() {

  },
  async findByPk(userId) {

  },

  //Retrouver un user par son email pour l'authentification
  async findByEmail(email){
    try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons $1, et l'agument [email] également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.user
          WHERE email = $1
        `,
        values: [email],
      };
      //J'envoie ma requête auprès de la DB.
      const result = await client.query(preparedQuery);
      if (result.rowCount === 0) {
        return undefined;
    }

    return result.rows[0];
    } catch (sqlError) {
      console.log(sqlError);
      return null;
    }
  },

  async insert(user) {

  },
  async update(id, user) {

  },
  async delete(id) {

  }
};