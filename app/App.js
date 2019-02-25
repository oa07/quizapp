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

import PlayQuizScreen from "./pages/PlayQuizPage";
//import SearchScreen from '';
// import SearchResultScreen from '';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Support: { screen: SupportScreen },
    About: { screen: AboutScreen }

    // PlayQuiz : { screen : PlayQuizScreen},
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: "QuizApp",
      headerLeft: (
        <View>
          <TouchableHighlight
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Text>Menu</Text>
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
    PlayQuiz: { screen: PlayQuizScreen },
    Quiz: {
      screen: QuizScreen
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
