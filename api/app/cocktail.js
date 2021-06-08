const express = require('express');
const Cocktail = require('../models/Cocktail');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const router = express.Router();

router.post('/', auth, permit('admin'), async (req, res) => {
  try {
    const cocktaillData = {
      title: req.body.title,
      published: req.body.published,
      recipe: req.recipe,
      user: req.user,
      ingredients: req.body.ingredients,
    };
    const cocktail = new Cocktail(cocktaillData);
    await cocktail.save();
    res.send(cocktail);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
