import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.component';
function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/hats' component={Homepage} />
      <Route exact path='/jackets' component={Homepage} />
    </Switch>
  );
}

export default App;
