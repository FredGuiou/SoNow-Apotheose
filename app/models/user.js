const client = require("../config/db");
const { ApiError } = require('../services/errorHandler');

module.exports = {

  //Rechercher tous les utilisateurs de la BDD. 
  async findAll() {
    try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.user
        `
      };

      const result = await client.query(preparedQuery);

      if (result.rowCount === 0) {
        return undefined;
    };

    return result.rows;

    } catch (error) {
      res.json({status: "Not Found", code: 404, message: "User findAll throw an error"});
      throw new ApiError('Users not found', {statusCode: 404 });
    };
  },

  //Recherche un utilisateur en fonction de sa clé primaire ID.
  async findByPk(userId) {
    try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.user
          WHERE id = $1
        `,
        values: [userId],
      };
      const result = await client.query(preparedQuery);
      if (result.rowCount === 0) {
        return undefined;
    };

    return result.rows[0];
    } catch (error) {
      res.json({status: "Not Found", code: 404, message: "User findByPk throw an error"});
      throw new ApiError('User not found', {statusCode: 404 });
    };
  },

  //Retrouver un user par son email pour l'authentification
  async findByEmail(reqEmail){
    try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.user
          WHERE email = $1
        `,
        values: [reqEmail],
      };

      const result = await client.query(preparedQuery);

      if (result.rowCount === 0) {
        return undefined;
    };

    return result.rows[0];

    } catch (error) {
      res.json({status: "Not Found", code: 404, message: "User findByEmail throw an error"});
      throw new ApiError('Users not found', {statusCode: 404 });
    };
  },

  //Rechercher un utilisateur par son surnom, son nom ou son prénom.
  async findByNickname(nickname){
    try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.user
          WHERE nickname ILIKE $1
        `,
        values: [`%${nickname}%`],
      };

      const result = await client.query(preparedQuery);

      if (result.rowCount === 0) {
        return undefined;
    };

    return result.rows[0];

    } catch (error) {
      res.json({status: "Not Found", code: 404, message: "User findByNickname throw an error"});
      throw new ApiError('Users not found', {statusCode: 404 });
      
    };
  },

  //Insérer un nouvel utilisateur dans la BDD.
  async insert(newUser) {
    try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
        INSERT INTO public.user
        (firstname, lastname, nickname, email, password) VALUES
        ($1, $2, $3, $4, $5) RETURNING *
        `,
        values: [newUser.firstname, newUser.lastname, newUser.nickname, newUser.email, newUser.password],
      };
  
      const result = await client.query(preparedQuery);
  
    return result.rows[0];

    } catch (error) {
      res.json({status: "Service Unvailable", code: 503, message: "User insert throw an error"});
      throw new ApiError('User non inserted', {statusCode: 503 });
    };
  },

  //Mettre à jours les infos d'un utilisateur en BDD.
  async update(id, user) {
    try {
      const fields = Object.keys(user).map((prop, index) => `"${prop}" = $${index + 1}`);
      const values = Object.values(user);
      const savedUser = await client.query(
          `
              UPDATE public.user SET
                  ${fields}
              WHERE id = $${fields.length + 1}
              RETURNING *
          `,
          [...values, id],
        );
      return savedUser.rows[0];

    } catch (error) {
      res.json({status: "Service Unvailable", code: 503, message: "User update throw an error"});
      throw new ApiError('User not updated', {statusCode: 503 });
    };
  },
  
  //Supprimer un utilisateur de la BDD.
  async delete(id) {
    try {
      const preparedQuery = {
        text: `
          DELETE
          FROM public.user
          WHERE id = $1
        `,
        values: [id],
      };

      const result = await client.query(preparedQuery);

      return !!result.rowCount;
      
    } catch (error) {
      res.json({status: "Service Unvailable", code: 503, message: "User delete throw an error"});
      throw new ApiError('User not deleted', {statusCode: 503 });
    };
  }
};