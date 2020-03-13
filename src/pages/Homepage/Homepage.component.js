import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './Homepage.styles';
const Homepage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default Homepage;
