import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Animbutton from "./animbutton";
import { grammer } from "./data.json";
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
        <View key={k} style={{ margin: 10 }}>
          <Animbutton
            countCheck={_this.state.countCheck}
            onColor={"green"}
            effect={"tada"}
            _onPress={status => _this._answer(status, k)}
            text={currentOptions[k]}
          />
        </View>
      );
    });

    return (
      <ScrollView style={{ backgroundColor: "#F5FCFF", paddingTop: 10 }}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View style={styles.oval}>
              <Text style={styles.welcome}>{this.state.question}</Text>
            </View>
            <View>{options}</View>
            <View style={{ flexDirection: "row" }}>
                <Button
            onPress={() => this.prev()}
            title="Prev"
            color="#841584"
          />
          <View style={{margin:15}} />

              <TouchableOpacity onPress={() => this.next()}>
                <View
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 20,
                    paddingLeft: 20,
                    borderRadius: 10,
                    backgroundColor: "green"
                  }}
                >
                  <Icon name="md-arrow-round-forward" size={30} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  oval: {
    width: (width * 90) / 100,
    borderRadius: 20,
    backgroundColor: "green"
  },
  container: {
    flex: 1,
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "white"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
