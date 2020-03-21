import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.component';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/selectors/user.selectors';
import { checkUserSession } from './redux/actions/user.actions';

import ShopPage from './pages/Shop/Shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/SignIn-SignUp/SignIn-SignUp.component';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUpPage {...this.props} />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
