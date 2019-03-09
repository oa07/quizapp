import React, { Component } from "react";
import { 
  Text,
  View, 
  TouchableHighlight, 
  ImageBackground, 
} from "react-native";
import styles from "../../styles/GrammerStyle";
import commonStyles from "../../styles/CommonStyle"; 


let mediumObj = [];
export default class MediumPage extends Component {
  
  constructor(props){
    super(props);
    // Easy Object here
    const mediumData =   this.props.navigation.getParam('content', null);
    mediumObj = Object.keys(mediumData).map(function(k){
      return mediumData[k];
    });
    this.state ={
      mediumObj : mediumObj,
    }
  }
  render() {
    let _this = this;
    const navigate = this.props.navigation;
    // take Object value from state
    const mediumObj = this.state.mediumObj;

    var quizList = [];

    for (let i = 1; i <= mediumObj.length; i++) {
      let questionObj = mediumObj[i];
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
