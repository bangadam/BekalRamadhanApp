import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Container} from 'native-base';

import HeaderApp from './src/Components/HeaderApp';
import FooterApp from './src/Components/FooterApp';

export default class App extends Component {
  render() {
    return (
        <Container>
          <HeaderApp/>

          <FooterApp/>
        </Container>
    );
  }
}
