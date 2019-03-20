import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import styles from "../../styles/GrammerStyle";
import commonStyles from "../../styles/CommonStyle";
import { grammer } from "../../database/data.json";
const { height } = Dimensions.get("window");
let easyObj = [];
export default class EasyScreen extends Component {
  constructor(props) {
    super(props);
    // Easy Object here
    const easyData = grammer.easy;
    easyObj = Object.keys(easyData).map(function(k) {
      return easyData[k];
    });
    this.state = {
      easyObj: easyObj,
      screenHeight: 0
    };
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  render() {
    let _this = this;
    const navigate = this.props.navigation;
    // take Object value from state
    const easyObj = this.state.easyObj;

    var quizList = [];

    for (let i = 0; i < easyObj.length; i++) {
      let questionObj = easyObj[i];
      quizList.push(
        <TouchableHighlight
          key={i}
          style={styles.quizButton}
          onPress={() =>
            navigate.navigate("PlayQuiz", { questionObj: questionObj })
          }
        >
          <Text style={styles.fullWidthButtonText}>QUIZ {i + 1}</Text>
        </TouchableHighlight>
      );
    }
    return (
      <View style={commonStyles.container}>
        <ImageBackground
          source={require("../../assets/Images/Background.jpg")}
          style={commonStyles.backgroundImage}
        />
        <ScrollView
        >
        <View>{quizList}</View>
          
        </ScrollView>
        
      </View>
    );
  }
}
