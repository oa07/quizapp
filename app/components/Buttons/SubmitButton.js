import React, { Component } from "react";
import { Text, TouchableHighlight } from "react-native";
import quizPageStyles from "../../styles/QuizPageStyle";

export default class SubmitButton extends Component {
  constructor(props){
    super(props)
    
  }

  checkAns=()=>{
    console.log("ami hoici");
  }
  handleChange=()=>{
    console.log(props);
  }
  render() {

    return (
      <TouchableHighlight
        underlayColor="#DCEDC8"
        style={quizPageStyles.submitButton}
        onClick={this.changeColor}
        onPress={this.handleChange.bind(this)}
      >
        <Text style={quizPageStyles.buttonTextStyle}>Submit</Text>
      </TouchableHighlight>
    );
  }
}
