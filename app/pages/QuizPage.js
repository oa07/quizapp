import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import Animbutton from "./animbutton";
import commonStyles from "../styles/CommonStyle";
import quizPageStyles from "../styles/QuizPageStyle";
import SubmitButton from "../components/Buttons/SubmitButton";
import BottomNavigation from "../components/Buttons/BottomNavigation";

const { width, height } = Dimensions.get("window");

let questionsObj = [];
export default class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.questionNo = 0;
    this.score = 0;

    const questionList = this.props.questionObj;
    questionsObj = Object.keys(questionList).map(function(k) {
      return questionList[k];
    });

    this.state = {
      questionsObj: questionsObj[this.questionNo].questions,
      optionsObj: questionsObj[this.questionNo].options,
      correctoption: questionsObj[this.questionNo].correctAnswer,
      optionSelect: "",
      onColor: "#105851",
      countCheck: 0,
      disabled: false
    };
  }

  _answer(ans) {
    if (ans == this.state.correctoption) {
      console.log("hoicilam to");
      const count = this.state.countCheck + 1;
      this.setState({ countCheck: count, onColor: "#7CFC00" });
      this.score += 1;
    } else {
      const count = this.state.countCheck - 1;
      this.setState({ countCheck: count, onColor: "#FF0000" });
      this.score -= 1;
    }
  }

  prev() {
    if(this.questionNo == 0){
      console.log(this.props);
    }
    if (this.questionNo > 0) {
      this.questionNo--;
      this.setState({
        questionsObj: questionsObj[this.questionNo].questions,
        options: questionsObj[this.questionNo].options,
        correctoption: questionsObj[this.questionNo].correctoption,
        
      });
    }
  }
  next() {
    if (this.questionNo < questionsObj.length - 1) {
      this.questionNo++;
      this.setState({
        countCheck: 0,
        questionsObj: questionsObj[this.questionNo].questions,
        options: questionsObj[this.questionNo].options,
        correctoption: questionsObj[this.questionNo].correctoption
      });
    } else {
      this.props.quizFinish(this.score);
    }
  }

  handleChange(k) {
    this.setState({
      optionSelect: k
    });
  }

  render() {
    let _this = this;
    const questionObj = this.state.questionsObj;
    const optionsObj = this.state.optionsObj;
    const optionSelect = this.state.optionSelect;
    //const questions= [];

    const options = Object.keys(optionsObj).map(function(k) {
      return (
        <View key={k}>
          <Animbutton
            countCheck={_this.state.countCheck}
            onColor={_this.state.onColor}
            text={optionsObj[k]}
            _onPress={() => _this.handleChange(k)}
            disabled={_this.state.disabled}
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
          <Text style={quizPageStyles.questionText}>
            {this.state.questionsObj}
          </Text>
        </View>
        <View>{options}</View>

        <View>
          <TouchableHighlight
            underlayColor="#DCEDC8"
            style={quizPageStyles.submitButton}
            onPress={() => this._answer(optionSelect)}
          >
            <Text style={quizPageStyles.buttonTextStyle}>Submit</Text>
          </TouchableHighlight>
        </View>

        {/* bottomNavigation for next and prev button starts from here */}

        <BottomNavigation
          next={this.next.bind(this)}
          prev={this.prev.bind(this)}
        />
      </View>
    );
  }
}
