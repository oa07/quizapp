'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from './pages/HomePage';
import GrammerScreen from './pages/GrammerPage';
import VocabularyScreen from './pages/VocabularyPage';
import QuizScreen from './pages/QuizPage';
import AboutScreen from './pages/AboutPage';
import SupportScreen from './pages/SupportPage';
import { DrawerItems, DrawerNavigation } from 'react-navigation'

// import PlayQuizScreen from './pages/PlayQuizPage';
// import PlayQuiz from './pages/PlayQuizPage';
//import SearchScreen from '';
// import SearchResultScreen from ''; 

const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#FF5722',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>
        Header
      </Text>
    </View>
    <DrawerItems {...props} />
  </View>
);


const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Support: { screen: SupportScreen },
    About: { screen: AboutScreen },

    // PlayQuiz : { screen : PlayQuizScreen},
  },
  {
       contentComponent :DrawerContent,

  }
);

const RootStack = createStackNavigator({
    Drawer: { screen: DrawerNavigator,  },
    Grammer: {
        screen: GrammerScreen,
        navigationOptions: {
            headerTitle: "Grammer"
        }
    },
    Vocabulary: {
        screen: VocabularyScreen,
        navigationOptions: {
            headerTitle: "Vocabulary"
        }
    },
   Quiz: {
        screen: QuizScreen,
        navigationOptions: {
            headerTitle: "Quiz"
        }
    },

}, {
  initialRouteName: 'Drawer',
  navigationOptions: {
        headerTitleStyle: {
          fontWeight: "bold",
          color: "blue",
        },
        headerTintColor: "red"
      }
});

const AppContainer = createAppContainer(RootStack);

export default class App extends Component{

  render() {
    return <AppContainer/>;
  }
}





