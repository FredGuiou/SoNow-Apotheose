//TODO: Gestion des erreurs via un controller error.
//TODO: Implémentation de JOI validation schema (longueur des titre des events par exemple)

const client = require("../config/db");

module.exports = {
  //Rechercher tous les évènements dans la BDD. 
  async findAll() {
    try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.event
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





//Rechercher un évènement par son ID.
  async findByPk(eventId) {
    try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.event
          WHERE id = $1
        `,
        values: [eventId],
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






  //Rechercher un évènement par son nom.
  async findByTitle(reqTitle){
    try {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.event
          WHERE title = $1
        `,
        values: [reqTitle],
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




  //Rechercher un évènement en fonction de son tag.
  async findByTagId(tagId) {
    // On veut d'abord vérifié que la category demandé existe
    const tag = await tagDataMapper.findByPk(tagId);
    if (!tag) {
        //throw new ApiError('', { statusCode:  });
    }

    const result = await client.query('SELECT * FROM event WHERE tag_id = $1', [tagId]);
    return result.rows;
},




//TODO: Voir avec Seb la création de l'évent. table detail info, user ? Requête sql.
//Créer un nouvel évènement.
  async insert(event) {
    try {
      //On s'occupe en premier de la table event
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
        INSERT INTO public.event
        () VALUES
        () RETURNING *
        `,
        values: [],
      };
  
      const result = await client.query(preparedQuery);
  
    return result.rows[0];


    } catch (error) {
      console.log(error);
      return null;
    };
  },




//TODO: Transposition possible à partir du model user ?
//mettre à jour un évènement.
  async update(id, event) {
    try {
      //On récupère les champs et les valeurs de l'utilisateur
      const fields = Object.keys(event).map((prop, index) => `"${prop}" = $${index + 1}`);
      const values = Object.values(event);
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
        UPDATE public.event SET
        ${fields}
        WHERE id = $${fields.length + 1}
        RETURNING *        
        `,
        values: [...values, id],
      };
  
      const result = await client.query(preparedQuery);
  
    return result.rows[0];

    } catch (error) {
      console.log(error);
      return null;
    }
  },





//supprimer un évènement.
  async delete(id) {
    try {
      const preparedQuery = {
        text: `
          DELETE
          FROM public.event
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