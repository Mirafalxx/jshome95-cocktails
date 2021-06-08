import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppToolBar from './components/UI/AppToolbar/AppToolbar';
import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router';
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
            <Route path="/" />
          </Switch>
        </Container>
      </main>
    </>
  );
};

export default App;
