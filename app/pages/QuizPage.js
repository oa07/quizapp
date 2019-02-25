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
import Icon from "react-native-vector-icons/Ionicons";
import Animbutton from "./animbutton";
import { grammer } from "./data.json";
import commonStyles from '../styles/CommonStyle' ;
import quizPageStyles from '../styles/QuizPageStyle' ;

const { width, height } = Dimensions.get("window");
let arrnew = [];

export default class QuizScreen extends Component {

static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title', 'Quiz'),
    /* ... */
});

 updateNavigationTitle = (tab) => {
    /* title dynamically changes here */
    this.props.navigation.setParams({
            title:  'Quiz ' + (this.questionNo+1)
        });
};

  constructor(props) {
    super(props);
    this.questionNo = 0;
    this.score = 0;
    this.updateNavigationTitle( this.questionNo);

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
      this.updateNavigationTitle( this.questionNo);
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
    this.updateNavigationTitle( this.questionNo);
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
  _answer(status, ans) {
    if (status == true) {
      const count = this.state.countCheck + 1;
      this.setState({ countCheck: count });
      if (ans == this.state.correctoption) {
        this.score += 1;
      }
    } else {
      const count = this.state.countCheck - 1;
      this.setState({ countCheck: count });
      if (this.state.countCheck < 1 || ans == this.state.correctoption) {
        this.score -= 1;
      }
    }
  }
  render() {
    let _this = this;
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(function(k) {
      return (

              <TouchableHighlight
                  key={k}
                  underlayColor='#757575'
                  _onPress={status => _this._answer(status, k)}
                  style={quizPageStyles.answerButton}
              >
                  <Text style={quizPageStyles.fullWidthButtonText}>{currentOptions[k]}</Text>
              </TouchableHighlight>

      );
    });

    return (
        <ImageBackground source={require('../assets/Images/Background.jpg')} style={commonStyles.backgroundImage}>

            <View style={commonStyles.container}>
                <View style={quizPageStyles.questionBlock}>
                    <Text style={quizPageStyles.questionText}>{this.state.question}</Text>
                </View>
                {options}
            </View>

            <View style={quizPageStyles.bottomNavigation}>
                <TouchableHighlight
                 underlayColor='#DCEDC8'
                 onPress={() => this.prev()} style={quizPageStyles.prevButton}>
                    <Text style={quizPageStyles.buttonTextStyle}>Prev</Text>
                </TouchableHighlight>
                <TouchableHighlight
                 underlayColor='#689F38'
                 onPress={() => this.next()} style={quizPageStyles.nextButton}>
                    <Text style={quizPageStyles.buttonTextStyle}>Next</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>


    );
  }
}

