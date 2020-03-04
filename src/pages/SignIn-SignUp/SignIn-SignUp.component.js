import React from 'react';
import './SignIn-SignUp.styles.scss';
import SignIn from '../../components/sign-In/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
const SignInSignUpPage = () => (
  <div className='signIn-signUp'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
