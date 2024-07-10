const Inscription = require('../models/Inscription');

const saveInscription = (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'firstName and lastName are required' });
  }

  const inscription = new Inscription(...req.body);

  Inscription.save(inscription, req.db, (err, savedInscription) => {
    if (err) {
      return res.status(500).json({ error: 'Error in saving inscription' });
    }
    res.status(201).json(savedInscription);
  });
};

module.exports = {
    saveInscription,
};