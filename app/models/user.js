//TODO: Gestion des erreurs via un controller error.

const client = require("../config/db");

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
      console.log(error);
      return null;
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
      console.log(error);
      return null;
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
      console.log(error);
      return null;
    };
  },

  //Rechercher un utilisateur par son surnom, son nom ou son prénom.
  async findByNickname(nickName){
    try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.user
          WHERE nickname = $1
        `,
        values: [nickName],
      };

      const result = await client.query(preparedQuery);

      if (result.rowCount === 0) {
        return undefined;
    };

    return result.rows[0];

    } catch (error) {
      console.log(error);
      return null;
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
      console.log(error);
      return null;
    }
  },

  //Mettre à jours les infos d'un utilisateur en BDD.
  async update(id, user, details) {
    try {
      myObj = JSON.parse(user);
      console.log(Object.entries(myObj));
      if(user) {
        console.log(user);
        // Je prépare une requête sql séparément pour éviter les injections.
        // J'utilise les jetons sql également par souci de sécurité.
        console.log("2. je passe par le user models");
        const savedUser = await client.query(
          `
              UPDATE post SET
                  ${fieldsUser}
              WHERE id = $${fieldsUser.length + 1}
              RETURNING *
          `,
          [...valuesUser, id],
        );
      }     
      if(details) {

      }
      console.log("3. Je termine mon user models");
      return savedUser.rows[0];

    } catch (error) {
      console.log(error);
      return null;
    }
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
      console.log(error);
      return null;
    }
  }
};