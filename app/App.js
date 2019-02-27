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
import HomeScreen from "./pages/HomePage";
import GrammerScreen from "./pages/GrammerPage";
import VocabularyScreen from "./pages/VocabularyPage";
import QuizScreen from "./pages/QuizPage";
import AboutScreen from "./pages/AboutPage";
import SupportScreen from "./pages/SupportPage";
import { DrawerItems, DrawerNavigation, DrawerActions } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles/HomePageStyle';

import PlayQuizScreen from "./pages/PlayQuizPage";
//import SearchScreen from '';
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
    PlayQuiz: {
      screen: PlayQuizScreen,
      navigationOptions: {
        headerTitle: "PlayQuiz"
      }
    },
    Quiz: {
      screen: QuizScreen,
      navigationOptions: {
        headerTitle: "Quiz"
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
