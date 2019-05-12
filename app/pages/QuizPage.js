import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";
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
      ischecked: false,
      checked: [],
      selectedCheckbox: {}
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

  Check(k) {
    this.setState({
      isChecked: !this.state.isChecked,
      optionSelect: k
    });
  }

  isItemChecked(k){
    console.log("hoice")
    return this.state.checked.indexOf(k) > -1
  }

  toggleChange = (option)=>{
    if (this.isItemChecked(option)){
      this.setState({
        checked: this.state.checked.filter(i=>i!= k)
      })
    }
    else{
      this.setState({
        checked: [...this.state.checked, option]
      })
    }
  }

  CheckMe = (selectedCheckbox) =>{
    this.setState({ selectedCheckbox});

  }

  render() {
    let _this = this;
    const questionObj = this.state.questionsObj;
    const optionsObj = this.state.optionsObj;
    const optionSelect = this.state.optionSelect;
    const correctOption = this.state.correctOption;
    const { checkboxValue, selectedCheckbox} = this.state;

    //const questions= [];

    const options = Object.keys(optionsObj).map(function(option, indexInArray) {
      //console.log(pos)
      return (
        <View key={option}>
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
              key={option}
              checked={option === selectedCheckbox}
              label={optionsObj[option]}
              onToggle={(value, index) => _this.CheckMe(option)}
              labelPosition={LABEL_POSITION.RIGHT}
              onColor={_this.state.onColor}
              filterColor={"#0000"}
              outerColor= {"#FFF"}
              innerColor={"#60ECAE"}
              styleLabel={{
                color: "white",
                fontWeight: "bold",
                fontSize: 25,
                paddingLeft: 5
              }}
              //onPress={ k => _this.toggleChange(k)}
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
