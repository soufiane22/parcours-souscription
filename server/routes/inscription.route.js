const express = require('express');
const { saveInscription } = require('../controllers/inscriptionControler');

const router = express.Router();

router.post('/', saveInscription);

module.exports = router;