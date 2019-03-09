import React, { Component } from "react";
import { Text, View, Dimensions, ImageBackground } from "react-native";
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
    
    // console.log("i am inside quiz page" +JSON.stringify(questionList));
    questionsObj = Object.keys(questionList).map(function(k) {
      return questionList[k];
    });
    this.state = {
      questionsObj: questionsObj[this.questionNo].questions,
    };
  }
  navigateNextPrev() {}
  prev() {
    if (this.questionNo > 0) {
      this.questionNo--;
      this.setState({
        questionObj: questionsObj[this.questionNo].question,
        //options: questionObj[this.questionNo].options,
        //correctoption: questionObj[this.questionNo].correctoption
      });
    }
  }
  next() {
    if (this.questionNo < questionObj.length - 1) {
      this.questionNo++;
      this.setState({
        //countCheck: 0,
        questionsObj: questionObj[this.questionNo].question,
        //options: questionObj[this.questionNo].options,
        //correctoption: questionObj[this.questionNo].correctoption
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
    const questionObj = this.state.questionsObj;
    //const questions= [];
    // console.log(questionObj.length);

    //const optio ns = Object.keys(questionList).map(function(k) {
    //  return (
    //    <View key={k}>
    //  <Animbutton
    //    countCheck={_this.state.countCheck}
    //    onColor={"#105851"}
    //    _onPress={() => _this._answer(k)}
    //    text={questionList[k]}
    //    />
    //    </View>
    //  );
    //});

    return (
      <View style={commonStyles.container}>
        <ImageBackground
          source={require("../assets/Images/Background.jpg")}
          style={commonStyles.backgroundImage}
        />
        <View style={quizPageStyles.questionBlock}>
        <Text style={quizPageStyles.questionText}>{this.state.questionsObj}</Text>
        
        </View>
        
        <View>
          <SubmitButton />
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
