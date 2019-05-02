import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../../styles/HomePageStyle";
import EasyButtonComponent from "../Buttons/EasyButtonComponent";
import MediumButtonComponent from "../Buttons/MediumButtonComponent";
import DifficultButtonComponent from "../Buttons/DifficultButtonComponent";
export default class GrammarComponent extends Component {
  render() {
     
    return (
      <View style={styles.home_main_buttons_container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.mainPageBlockTitle}>Grammar Quizzes</Text>
        </View>

        <EasyButtonComponent  navigation={this.props.navigation} />
        <MediumButtonComponent navigation={this.props.navigation} />
        <DifficultButtonComponent  navigation={this.props.navigation} />
      </View>
    );
  }
}
