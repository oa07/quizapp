'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './pages/HomePage';
import GrammerScreen from './pages/GrammerPage';
import VocabularyScreen from './pages/VocabularyPage';
import QuizScreen from './pages/QuizPage';
import PlayQuizScreen from './pages/PlayQuizPage';
import PlayQuiz from './pages/PlayQuizPage';
//import SearchScreen from '';
// import SearchResultScreen from ''; 

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Grammer: { screen: GrammerScreen},
    Vocabulary: { screen : VocabularyScreen},
    Quiz : { screen : QuizScreen},
    PlayQuiz : { screen : PlayQuizScreen},
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component{

  render() {
    return <AppContainer/>;
  }
}





