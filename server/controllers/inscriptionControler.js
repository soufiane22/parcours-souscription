const Inscription = require('../models/Inscription');

const saveInscription = (req, res) => {
  const inscription = new Inscription(req.body);

  Inscription.save(req.body, req.db, (err, savedInscription) => {
    if (err) {
      return res.status(500).json({ error: 'Error in saving inscription' });
    }
    res.status(201).json(savedInscription);
  });
};

module.exports = {
    saveInscription,
};