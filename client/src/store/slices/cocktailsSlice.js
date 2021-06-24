import { createSlice } from '@reduxjs/toolkit';

const name = 'cocktails';

const cocktailsSlice = createSlice({
  name,
  initialState: {
    cocktails: [],
    cocktailsLoading: false,
    createCocktailLoading: false,
    createCocktailError: false,
  },
  reducers: {
    fetchCocktailsRequest: (state) => {
      state.cocktailsLoading = true;
    },
    fetchCocktailsSuccess: (state, { payload: cocktails }) => {
      state.cocktailsLoading = false;
      state.cocktails = cocktails;
    },
    fetchCocktailsFailure: (state) => {
      state.cocktailsLoading = false;
    },
    createCocktailRequest: (state) => {
      state.createCocktailLoading = true;
    },
    createCocktailSuccess: (state) => {
      state.createCocktailLoading = false;
    },
    createCocktailFailure: (state, { payload: error }) => {
      state.createCocktailLoading = false;
      state.createCocktailError = error;
    },
  },
});

export default cocktailsSlice;
