const Joi = require('joi');

const inscriptionSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    birthdayDate: Joi.string().required(),
    birthdayPlace: Joi.string(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string(),
    postalCode: Joi.string().required(),
    city: Joi.string().required(),
    profession: Joi.string().required(),
    familyStatus: Joi.string().required(),
    circulationDate:  Joi.string().required(),
    model: Joi.string().required(),
    marque: Joi.string().required(),
    registration: Joi.string().required(),
  });

  const  validateInscription = (req, res, next) => {
    const { error } = inscriptionSchema.validate(req.body);
    if (error) {
        console.log("error validating registration ",error);
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  }


module.exports = { validateInscription }