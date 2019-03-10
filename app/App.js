"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { DrawerItems, DrawerNavigation, DrawerActions } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

// all pages
import HomeScreen from "./pages/HomePage";
// import GrammerScreen from "./pages/GrammerPage";
import QuizScreen from "./pages/QuizPage";
import AboutScreen from "./pages/AboutPage";
import SupportScreen from "./pages/SupportPage";
import PlayQuizScreen from "./pages/PlayQuizPage";
import EasyScreen from './pages/Difficulty/EasyPage';
import MediumScreen from './pages/Difficulty/MediumPage';
import DifficultScreen from './pages/Difficulty/DifficultPage';
// all stylesheet
import styles from './styles/HomePageStyle';

//all components
 

//
// import SearchResultScreen from '';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen, },
    Support: { screen: SupportScreen },
    About: { screen: AboutScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: "QuizApp",
      headerStyle: {
        backgroundColor: '#009688',
      },
      headerLeft: (
        <View>
          <TouchableHighlight
            underlayColor='transparent'
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Icon name={"ios-menu"} style={styles.hamburgerStyle} />
          </TouchableHighlight>
        </View>
      )
    })
  }
);

const RootStack = createStackNavigator(
  {
    Drawer: { screen: DrawerNavigator },
    PlayQuiz: {
      screen: PlayQuizScreen,
      navigationOptions: {
        headerTitle: "PlayQuiz",
        headerStyle: {
          backgroundColor: '#009688',
        },
      }
    },
    Quiz: {
      screen: QuizScreen,
      navigationOptions: {
        headerTitle: "Quiz",
        headerStyle: {
          backgroundColor: '#009688',
        },
      }
    },
    Easy: {
      screen: EasyScreen,
      navigationOptions: {
        headerTitle: "Easy",
        headerStyle: {
          backgroundColor: '#009688',
        },
      }
    },
    Medium: {
      screen: MediumScreen,
      navigationOptions: {
        headerTitle: "Medium",
        headerStyle: {
          backgroundColor: '#009688',
        },
      }
    },
    Difficult: {
      screen: DifficultScreen,
      navigationOptions: {
        headerTitle: "Difficult",
        headerStyle: {
          backgroundColor: '#009688',
        },
      }
    }
  },
  {
    initialRouteName: "Drawer"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
