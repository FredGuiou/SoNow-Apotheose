//TODO: Implémentation de JOI validation schema (longueur des titre des events par exemple)

const client = require("../config/db");
const { ApiError } = require("../services/errorHandler");

module.exports = {
  //Rechercher tous les évènements dans la BDD. 
  async findAll() {
      //Je prépare une requête sql séparément pour éviter les injections.
      //J'utilise les jetons sql également par souci de sécurité.
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.event
        `
      };

      const result = await client.query(preparedQuery);
      if(!result)
      
      if (result.rowCount === 0) {
        return null;
      };

      return result.rows;

  },





//Rechercher un évènement par son ID.
  async findByPk(eventId) {
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
        return null;
      };

      return result.rows[0];
  },






  //Rechercher un évènement par son nom.
  async findByTitle(eventParams){
      const preparedQuery = {
        text: `
          SELECT *
          FROM public.event
          WHERE title ILIKE $1
        `,
        values: [`%${eventParams}%`],
      };

      const result = await client.query(preparedQuery);

      if (result.rowCount === 0) {
        return null;
      };

     return result.rows;

  },



// TODO: A TESTER QUAND LES DONNEES DE LA TABLE DE LIAISON SERONT INSCRITES EN BDD
  //Rechercher un évènement en fonction de son tag.
  async findByTagId(tagId) {
        // On veut d'abord vérifié que la category demandé existe
    const tag = await tagDataMapper.findByPk(tagId);
    if (!tag) {
      throw new ApiError('Tag not found', { statusCode: 404 });
    }
    //TODO: requête sql à finlaiser.
    const result = await client.query('SELECT * FROM public.event JOIN public.tag ON event.tag_id = tag.id WHERE code_tag = $1', [tagId]);
    if (result.rowCount === 0) {
      return null;
    }

    return result.rows;

  },





//Créer un nouvel évènement.
  async insert(event) {
      const fields = Object.keys(event).map((props) => `${props}`);
      const fieldsToken = Object.keys(event).map((_, index) => `$${index + 1}`);
      const values = Object.values(event);

      const savedEvent = await client.query(
        `
            INSERT INTO public.event (${fields}) VALUES (${fieldsToken})
            RETURNING *
        `,
        [...values],
      );
      return savedEvent.rows[0];
  },







//mettre à jour un évènement.
  async update(id, event) {
      const fields = Object.keys(event).map((prop, index) => `"${prop}" = $${index + 1}`);
      const values = Object.values(event);
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
  },





//supprimer un évènement.
  async delete(id) {
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
  }
};