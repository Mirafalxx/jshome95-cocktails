const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  title: String,
  amount: String,
});

const CocktailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: String,
  published: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ingredients: [IngredientSchema],
});

const Cocktail = mongoose.model('Cocktail', CocktailSchema);
module.exports = Cocktail;
