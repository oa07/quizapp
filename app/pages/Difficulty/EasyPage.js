import React, { Component } from "react";
import {
  Text,
  View, 
  TouchableHighlight, 
  ImageBackground,
} from "react-native";
import styles from "../../styles/GrammerStyle";
import commonStyles from "../../styles/CommonStyle";
 


let easyObj = [];
export default class EasyScreen extends Component {
  
  constructor(props){
    super(props);
    // Easy Object here
    const easyData = this.props.navigation.getParam('content', 'null');
    easyObj = Object.keys(easyData).map(function(k){
      return easyData[k];
    });
    this.state ={
      easyObj : easyObj,
    }
  }
  render() {
    let _this = this;
    const navigate = this.props.navigation;
    // take Object value from state
    const easyObj = this.state.easyObj;

    var quizList = [];

    for (let i = 1; i <= easyObj.length; i++) {
      let questionObj = easyObj[i];
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
