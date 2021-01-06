import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';

function App() {
  /* const theme = {
    mainColors: {
      blue: '#2400ff',
      gray: '#c6c6c6',
      dark: '#353535',
    },
  }; */

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route exact path="/show/:id">
        <Show />
      </Route>

      <Route>Not Found</Route>
    </Switch>
  );
}

export default App;
