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

    return result.rows[0];

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
          const userObj = JSON.parse(user);
          const detailsObj = JSON.parse(details);
          let settingFieldsUser = '';
          let settingFieldsDetails = '';
          for (const [key, value] of Object.entries(userObj)) {
            settingFieldsUser += key + '=' + value + ','
          }
          const sliceSFU = settingFieldsUser.substring(0, settingFieldsUser.length - 1)
          console.log(sliceSFU);
          for (const [key, value] of Object.entries(detailsObj)) {
            settingFieldsDetails += key + '=' + value + ','
          }
          const sliceSFD = settingFieldsDetails.substring(0, settingFieldsDetails.length - 1)
          console.log(sliceSFD);

      //On récupère les champs et les valeurs de l'utilisateur
    //   const userObj = JSON.parse(user);
    //   const detailsObj = JSON.parse(details);
    //   const fieldsUser = Object.keys(userObj);
    //   const valuesUser = Object.values(userObj);
    //   const fieldsDetails = Object.keys(detailsObj);
    //   const valuesDetails = Object.values(detailsObj);
    //   // Je prépare une requête sql séparément pour éviter les injections.
    //   // J'utilise les jetons sql également par souci de sécurité.
    //   const preparedQuery = {
    //     text: `UPDATE public.user SET ${fieldsUser} WHERE id = ${id} RETURNING *`,
    //     values: [...valuesUser]
    //   };
    //   const preparedQuery2 = {
    //     text: `UPDATE public.detailsinfos SET ${fieldsDetails} WHERE id = ${id} RETURNING *`,
    //     values: [...valuesDetails]
    //   };
    //   console.log(preparedQuery);
    //   console.log(preparedQuery2);
    //   const result = await client.query(preparedQuery);  
    //   const result2 = await client.query(preparedQuery2);
    //   // return result.rows[0];

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