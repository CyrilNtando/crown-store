import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions/user.actions';
import ShopPage from './pages/Shop/Shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/SignIn-SignUp/SignIn-SignUp.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
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
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignUpPage} />
          <Route exact path='/signUp' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
