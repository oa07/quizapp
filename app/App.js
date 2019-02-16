'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './pages/HomePage';
import GrammerScreen from './pages/GrammerPage';
import VocabularyScreen from './pages/VocabularyPage';
import QuizScreen from './pages/QuizPage';

//import SearchScreen from '';
// import SearchResultScreen from ''; 

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Grammer: { screen: GrammerScreen},
    Vocabulary: { screen : VocabularyScreen},
    Quiz : { screen : QuizScreen},
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component{

  render() {
    return <AppContainer/>;
  }
}





