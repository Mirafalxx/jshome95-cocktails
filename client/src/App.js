import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppToolBar from './components/UI/AppToolbar/AppToolbar';
import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import Cocktails from './containers/Cocktails/Cocktails';
import NewCocktail from './containers/NewCocktail/NewCocktail';
import Register from './containers/Register/Register';
import MyCocktails from './containers/MyCocktails/MyCocktails';
import Login from './containers/Login/Login';
import SingleCocktail from './containers/SingleCocktail/SingleCocktail';
const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <AppToolBar />
      </header>
      <main>
        <Container maxWidth="xl">
          <Switch>
            <Route path="/" exact component={Cocktails} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/new-cocktail" component={NewCocktail} />
            <Route path="/my-cocktails" component={MyCocktails} />
            <Route path="/cocktail/:id" component={SingleCocktail} />
          </Switch>
        </Container>
      </main>
    </>
  );
};

export default App;
