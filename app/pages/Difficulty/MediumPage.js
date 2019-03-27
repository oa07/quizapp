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
let mediumObj = [];
export default class mediumScreen extends Component {
  constructor(props) {
    super(props);
    // medium Object here
    const mediumData = grammer.medium;
    mediumObj = Object.keys(mediumData).map(function(k) {
      return mediumData[k];
    });
    this.state = {
      mediumObj: mediumObj,
      screenHeight: 0
    };
  }

  onContentSizeChange = contentHeight => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  render() {
    let _this = this;
    const navigate = this.props.navigation;
    // take Object value from state
    const mediumObj = this.state.mediumObj;

    var quizList = [];

    for (let i = 0; i < mediumObj.length; i++) {
      let questionObj = mediumObj[i];
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
        <ScrollView>
          <View>{quizList}</View>
        </ScrollView>
      </View>
    );
  }
}
