import React, { Component } from "react";
import { 
  Text,
  View, 
  TouchableHighlight, 
  ImageBackground, 
} from "react-native";
import styles from "../../styles/GrammerStyle";
import commonStyles from "../../styles/CommonStyle";
import {grammer} from "../../assets/grammer.json";


let hardObj = [];
export default class DifficultPage extends Component {
  
  constructor(props){
    super(props);
    // Easy Object here
    const hardData = grammer.hard; 
    hardObj = Object.keys(hardData).map(function(k){
      return hardData[k];
    });
    this.state ={
      hardObj : hardObj,
    }
  }
  render() {
    let _this = this;
    const navigate = this.props.navigation;
    // take Object value from state
    const hardObj = this.state.hardObj;

    var quizList = [];
  
    for (let i = 1; i <= hardObj.length; i++) {
      let questionObj = hardObj[i];
      quizList.push(
        <TouchableHighlight
          key={i}
          underlayColor="#20B573"
          style={styles.quizButton}
          onPress={() => navigate.navigate("PlayQuiz", {questionObj : questionObj})
        }
        >
          <Text style={styles.fullWidthButtonText}>QUIZ {i}</Text>
        </TouchableHighlight>
      );
    }
    return (
      <View style={commonStyles.container}>
        <ImageBackground
          source={require("../../assets/Images/Background.jpg")}
          style={commonStyles.backgroundImage}
        />
        {quizList}
      </View>
    );
  }
}
