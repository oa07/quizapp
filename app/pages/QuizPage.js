import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";
import Animbutton from "./animbutton";
import commonStyles from "../styles/CommonStyle";
import quizPageStyles from "../styles/QuizPageStyle";
import SubmitButton from "../components/Buttons/SubmitButton";

import { Button } from "react-native-elements";

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
      questionsObj: questionsObj[this.questionNo].question,
      optionsObj: questionsObj[this.questionNo].options,
      correctoption: questionsObj[this.questionNo].correctAnswer,
      optionSelect: "",
      onColor: "#105851",
      countCheck: 0,
      disabled: false,
      ischecked: false
    };
  }

  _answer(ans) {
    if (ans == this.state.correctoption) {
      const count = this.state.countCheck + 1;
      this.setState({ countCheck: count, onColor: "#7CFC00", disabled: true });
      this.score += 1;
    } else {
      const count = this.state.countCheck - 1;
      this.setState({ countCheck: count, onColor: "red", disabled: true });
      this.score -= 1;
    }
  }

  prev() {
    if (this.questionNo == 0) {
      const navigate = this.props.navigation;
      navigate.goBack();
    }
    if (this.questionNo > 0) {
      this.questionNo--;
      this.setState({
        questionsObj: questionsObj[this.questionNo].question,
        optionsObj: questionsObj[this.questionNo].options,
        correctoption: questionsObj[this.questionNo].correctAnswer,
        optionSelect: "",
        onColor: "#105851"
      });
    }
  }
  next() {
    if (this.questionNo < questionsObj.length - 1) {
      this.questionNo++;
      this.setState({
        questionsObj: questionsObj[this.questionNo].question,
        optionsObj: questionsObj[this.questionNo].options,
        correctoption: questionsObj[this.questionNo].correctoption
      });
    } else {
      this.props.quizFinish(this.score);
    }
  }

  handleChange(k) {
    
  }

  Check(k) {
    this.setState({
      isChecked: !this.state.isChecked,
      optionSelect: k
    });
  }

  render() {
    let _this = this;
    const questionObj = this.state.questionsObj;
    const optionsObj = this.state.optionsObj;
    const optionSelect = this.state.optionSelect;
    const correctOption = this.state.correctOption;

    //const questions= [];

    const options = Object.keys(optionsObj).map(function(k, pos) {
      return (
        <View key={k}>
          <View
            style={{
              margin: 5,
              paddingTop: 10,
              paddingBottom: 10,
              paddingRight: 20,
              paddingLeft: 20,
              backgroundColor: "#20B573",
              borderRadius: 5
            }}
          >
            <CircleCheckBox
              key={k}
              countCheck={_this.state.countCheck}
              checked={k}
              label={optionsObj[k]}
              onToggle={(key) => _this.Check(key)}
              labelPosition={LABEL_POSITION.RIGHT}
              onColor={_this.state.onColor}
              filterColor={"#0000"}
              //outerColor= {"#FFF"}
              innerColor={"#FFF"}
              styleLabel={{
                color: "white",
                fontWeight: "bold",
                fontSize: 25,
                paddingLeft: 5
              }}
              onClick={(key)=> _this.handleChange(key)}
            />
          </View>
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
            <Text style={quizPageStyles.buttonTextStyle}>Check</Text>
          </TouchableHighlight>
        </View>

        {/* bottomNavigation for next and prev button starts from here */}

        <View style={quizPageStyles.bottomNavigation}>
          <TouchableHighlight
            underlayColor="#60ECAE"
            onPress={() => this.prev()}
            style={quizPageStyles.prevButton}
          >
            <Text style={quizPageStyles.buttonTextStyle}>Prev</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#20B573"
            onPress={() => this.next()}
            style={quizPageStyles.nextButton}
          >
            <Text style={quizPageStyles.buttonTextStyle}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
