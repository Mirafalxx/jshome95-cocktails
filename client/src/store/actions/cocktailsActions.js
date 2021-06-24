import cocktailsSlice from '../slices/cocktailsSlice';
export const {
  fetchCocktailsRequest,
  fetchCocktailsSuccess,
  fetchCocktailsFailure,
  createCocktailRequest,
  createCocktailSuccess,
  createCocktailFailure,
} = cocktailsSlice.actions;
