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
)

const HomeStack = createStackNavigator({
  HomeScreen: { screen: HomeScreen },  
});

HomeStack.navigationOptions = ({ navigation }) => {
  return {
     title: 'Home',
     headerTitle: 'Home'
  };
};

const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Grammer: { screen: GrammerScreen},
    Vocabulary: { screen : VocabularyScreen},
    Quiz : { screen : QuizScreen},
    // PlayQuiz : { screen : PlayQuizScreen},
  },
  {
    initialRouteName: 'Home',
    drawerType :'slide',
    drawerPosition :'left',
    contentComponent :DrawerContent,
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#FF5722',
      },
      headerTintColor: '#FF5722',
      
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = createStackNavigator({
  drawer: {
    screen: DrawerNavigator,
  }
}, {
  headerMode: 'float', // set this header mode to float so you can share the header
  initialRouteName: 'drawer',
});

const AppContainer = createAppContainer(RootStack);

export default class App extends Component{

  render() {
    return <AppContainer/>;
  }
}





