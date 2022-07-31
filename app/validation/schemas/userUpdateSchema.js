const Joi = require('joi');

module.exports = Joi.object({
    label: Joi.string(),
    route: Joi.string()
        .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
},
{
    label: Joi.string(),
    route: Joi.string()
        .pattern(/^(?=.*[0-9])(?=.*[az])(?=.*[AZ])(?=.*[@#$%^&-+=() ])(?=\\S+$).{8, 20}$/),
}).min(1).required();