import { combineReducers } from 'redux';
import usersSlice from './slices/usersSlice';
import cocktailsSlice from './slices/cocktailsSlice';
import notifierSlice from './slices/notifierSlice';

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  cocktails: cocktailsSlice.reducer,
  notifier: notifierSlice.reducer,
});

export default rootReducer;
