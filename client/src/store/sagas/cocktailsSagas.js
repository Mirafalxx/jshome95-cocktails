import { put, takeEvery } from 'redux-saga/effects';
import axiosApi from '../../axiosApi';

import {
  fetchCocktailsRequest,
  fetchCocktailsSuccess,
  fetchCocktailsFailure,
  createCocktailRequest,
  createCocktailSuccess,
  createCocktailFailure,
} from '../actions/cocktailsActions';
import { historyPush } from '../actions/historyActions';
import { addNotification } from '../actions/notifierActions';

export function* fetchCocktails() {
  try {
    const response = yield axiosApi.get('/cocktails');
    // console.log(response.data);
    yield put(fetchCocktailsSuccess(response.data));
  } catch (e) {
    yield put(fetchCocktailsFailure(e.response.data));
  }
}

export function* createCocktail({ payload: cocktailData }) {
  try {
    yield axiosApi.post('/cocktails', cocktailData);
    yield put(createCocktailSuccess());
    yield put(historyPush('/'));
    yield put(addNotification({ message: 'Cocktail created successfully', options: { variant: 'success' } }));
  } catch (e) {
    yield put(createCocktailFailure(e.response.data));
    yield put(addNotification({ message: 'Create cocktail  failed', options: { variant: 'error' } }));
  }
}

const cocktailsSagas = [
  takeEvery(fetchCocktailsRequest, fetchCocktails),
  takeEvery(createCocktailRequest, createCocktail),
];

export default cocktailsSagas;
