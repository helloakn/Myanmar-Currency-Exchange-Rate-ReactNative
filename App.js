/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Dimensions,Text, StyleSheet,  View} from 'react-native';
import styled from 'styled-components/native';
import Layout from './Layout/Layout'
const Container = styled.View`
  display:flex;
  flexDirection: column;
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  backgroundColor:#3370CA;
`


const App: () => React$Node = () => {
  return (
   <Container>
      <Layout  />
   </Container>
  );
};

export default App;
