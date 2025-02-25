const Joi = require("joi");

const addadmin = {
  body: Joi.object().keys({
    adminName: Joi.string().required().trim(),
    adminEmail: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    role: Joi.string().trim(),
  }),
};

module.exports = {
  addadmin,
};
