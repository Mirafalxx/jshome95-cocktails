const express = require('express');
const Cocktail = require('../models/Cocktail');
const auth = require('../middleware/auth');
const upload = require('../multer').cocktail;

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    if (req.user.role === 'user') {
      const cocktailsUser = await Cocktail.find({ published: true }).populate('user', 'displayName');
      return res.send(cocktailsUser);
    } else if (req.user.role === 'admin') {
      const cocktails = await Cocktail.find().populate('user', 'displayName');
      return res.send(cocktails);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleCocktail = await Cocktail.findOne({ _id: req.params.id }).populate('user', 'displayName');
    return res.send(singleCocktail);
  } catch (error) {
    res.sendStatus(500);
  }
});
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const cocktail = new Cocktail({
      title: req.body.title,
      recipe: req.body.recipe,
      user: req.user,
      image: req.file ? req.file.filename : null,
      ingredients: JSON.parse(req.body.ingredients),
    });

    await cocktail.save();
    return res.send(cocktail);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
