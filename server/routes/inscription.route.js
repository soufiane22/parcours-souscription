const express = require('express');

const { validateInscription } = require("../middleware/inscription.validator");
const { saveInscription } = require('../controllers/inscriptionControler');

const router = express.Router();

router.post('/', validateInscription ,saveInscription);

module.exports = router;