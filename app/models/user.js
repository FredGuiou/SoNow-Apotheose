const client = require("../config/db");

module.exports = {

  //Rechercher tous les utilisateurs de la BDD. 
  async findAll() {
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
        return null;
      };

      return result.rows;
  },

  //Recherche un utilisateur en fonction de sa clé primaire ID.
  async findByPk(userId) {
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
        return null;
      };

      return result.rows[0];
  },

  //Retrouver un user par son email pour l'authentification
  async findByEmail(reqEmail){
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
        return null;
      };

      return result.rows[0];
  },

  async findByEmailForLogin(reqEmail){
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
      return null;
    }

    return result.rows[0];
},

  //Rechercher un utilisateur par son surnom, son nom ou son prénom.
  async findByNickname(nickname){
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
        return null;
      };

      return result.rows[0];
  },

  //Insérer un nouvel utilisateur dans la BDD.
  async insert(newUser) {
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
  },

  //Mettre à jours les infos d'un utilisateur en BDD.
  async update(id, user) {
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

  },
  
  //Supprimer un utilisateur de la BDD.
  async delete(id) {
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
  }
};