const Joi = require('joi');

module.exports = Joi.object({
    label: Joi.string().required(),
    route: Joi.string()
        .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        .required(),
},
{
    label: Joi.string().required(),
    route: Joi.string()
        .pattern(/^(?=.*[0-9])(?=.*[az])(?=.*[AZ])(?=.*[@#$%^&-+=() ])(?=\\S+$).{8, 20}$/)
        .required(),
}).required();