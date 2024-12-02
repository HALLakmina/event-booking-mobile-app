const Joi = require('joi')

const eventsReqPathValidatorConfig = {
    id: Joi.string().min(24).max(24).required()
}

const eventsReqBodyValidatorCreateConfig = {
    title: Joi.string().required(),
    sub_title: Joi.string().required(),
    date_and_time: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
}

const eventsReqBodyValidatorUpdateConfig = {
    title: Joi.string().required(),
    sub_title: Joi.string().required(),
    date_and_time: Joi.string().required(),
    description: Joi.string().required(),
}

const userSigninReqBodyValidatorConfig = {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
}

const userSignupReqBodyValidatorConfig = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    bookingTickets: Joi.array(),
}


module.exports = {
    eventsReqPathValidatorConfig,
    eventsReqBodyValidatorCreateConfig,
    eventsReqBodyValidatorUpdateConfig,

    userSignupReqBodyValidatorConfig,
    userSigninReqBodyValidatorConfig,
}