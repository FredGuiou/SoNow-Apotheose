const Joi = require('joi');

module.exports = Joi.object({
    firstname: Joi.string(),
    lastname: Joi.string(),
    nickname: Joi.string(),
    gender: Joi.string(),
    email: Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    password: Joi.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/),
    biography: Joi.string(),
    birthday: Joi.date().iso(),
    profile_pricture: Joi.string(),
    language: Joi.string(),
    darkmode: Joi.boolean(),
    address: Joi.string(),
    zipcode: Joi.string(),
    city: Joi.string(),
    phone_number: Joi.string(),
    latitude: Joi.number(),
    longitude: Joi.number(),
}).required();