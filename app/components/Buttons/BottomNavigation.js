import React, { Component } from "react";
import { Text, TouchableHighlight,View } from "react-native";
import quizPageStyles from "../../styles/QuizPageStyle";
export default class BottomNavigation extends Component {
  render() {
    return (
      <View style={quizPageStyles.bottomNavigation}>
        <TouchableHighlight
          underlayColor="#60ECAE"
          onPress={this.props.prev}
          style={quizPageStyles.prevButton}
        >
          <Text style={quizPageStyles.buttonTextStyle}>Prev</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#20B573"
          onPress={this.props.next}
          style={quizPageStyles.nextButton}
        >
          <Text style={quizPageStyles.buttonTextStyle}>Next</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
