import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/Shop.component';
function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/jackets' component={Homepage} />
    </Switch>
  );
}

export default App;
