import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.component';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/actions/user.actions';
import { selectCurrentUser } from './redux/selectors/user.selectors';

import ShopPage from './pages/Shop/Shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/SignIn-SignUp/SignIn-SignUp.component';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        //if user user if authorized
        const userRef = await createUserProfileDocument(userAuth);
        //create a user document
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
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
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
