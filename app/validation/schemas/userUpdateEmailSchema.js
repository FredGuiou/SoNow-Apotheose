const Joi = require('joi');

module.exports = Joi.object({
    label: Joi.string().required(),
    route: Joi.string()
    .pattern()  //TODO: Insérer la regex dans les ()
    .required(),
}).required();