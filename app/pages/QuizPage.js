import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Animbutton from "./animbutton";
import { grammer } from "../assets/data.json";
import commonStyles from "../styles/CommonStyle";
import quizPageStyles from "../styles/QuizPageStyle";
import SubmitButton from "../components/Buttons/SubmitButton";
import BottomNavigation from "../components/Buttons/BottomNavigation";
const { width, height } = Dimensions.get("window");
let arrnew = [];

export default class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.questionNo = 0;
    this.score = 0;

    const jsondata = grammer.quiz1;
    arrnew = Object.keys(jsondata).map(function(k) {
      return jsondata[k];
    });
    this.state = {
      question: arrnew[this.questionNo].question,
      options: arrnew[this.questionNo].options,
      correctoption: arrnew[this.questionNo].correctoption,
      countCheck: 0
    };
  }
  prev() {
    if (this.questionNo > 0) {
      this.questionNo--;
      this.setState({
        question: arrnew[this.questionNo].question,
        options: arrnew[this.questionNo].options,
        correctoption: arrnew[this.questionNo].correctoption
      });
    }
  }
  next() {
    if (this.questionNo < arrnew.length - 1) {
      this.questionNo++;
      this.setState({
        countCheck: 0,
        question: arrnew[this.questionNo].question,
        options: arrnew[this.questionNo].options,
        correctoption: arrnew[this.questionNo].correctoption
      });
    } else {
      this.props.quizFinish(this.score);
    }
  }
  _answer(ans) {
    if (ans == this.state.correctoption) {
      const count = this.state.countCheck + 1;
      this.setState({ countCheck: count });
      this.score += 1;
    } else {
      const count = this.state.countCheck - 1;
      this.setState({ countCheck: count });
      this.score -= 1;
    }
  }
  render() {
    let _this = this;
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(function(k) {
      return (
        <View key={k}>
          <Animbutton
            countCheck={_this.state.countCheck}
            onColor={"#105851"}
            _onPress={() => _this._answer(k)}
            text={currentOptions[k]}
          />
        </View>
      );
    });

    return (
      <View style={commonStyles.container}>
        <ImageBackground
          source={require("../assets/Images/Background.jpg")}
          style={commonStyles.backgroundImage}
        />
        <View style={quizPageStyles.questionBlock}>
          <Text style={quizPageStyles.questionText}>{this.state.question}</Text>
        </View>
        <View>{options}</View>

        <View>
          <SubmitButton />
        </View>

        {/* bottomNavigation for next and prev button starts from here */}

        <BottomNavigation />
      </View>
    );
  }
}
