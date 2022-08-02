const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string().required().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    password: Joi.string().required().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    nickname: Joi.string().required(),
}).required();