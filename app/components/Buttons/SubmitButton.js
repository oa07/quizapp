import React, { Component } from "react";
import { Text, TouchableHighlight } from "react-native";
import quizPageStyles from "../../styles/QuizPageStyle";
export default class SubmitButton extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor="#DCEDC8"
        style={quizPageStyles.submitButton}
      >
        <Text style={quizPageStyles.buttonTextStyle}>Submit</Text>
      </TouchableHighlight>
    );
  }
}
