import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import QuizScreen from './QuizPage';



export default class Playquiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizFinish: false,
      score: 0,
      questionObj: this.props.navigation.state.params.questionObj,
    }
  }
  
  _quizFinish(score) {
    this.setState({ quizFinish: true, score: score })
    //const saveScore = async score =>{
    //  try {
    //    await AsyncStorage.setItem('Score', score);
    //  }catch(error){
    //    console.log(error.message)
    //  }
    }
  _scoreMessage(score) {
    if(score>0){
      return (<View style={styles.innerContainer} >
        <View style={{ flexDirection: "row" }} >
          <Icon name="trophy" size={30} color="white" />
        </View>
        <Text style={styles.score}>Congratulations</Text>
        <Text style={styles.score}>You scored {score}%</Text>
      </View>)
      }
    else{
      return (<View style={styles.innerContainer} >
        <View style={{ flexDirection: "row" }} >
          <Icon name="trophy" size={30} color="white" />
        </View>
        <Text style={styles.score}>Congratulations</Text>
        <Text style={styles.score}>You scored 0%</Text>
        <Button
          title="Check Total Score"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Score', {
              Score: score,
            });
          }}
        />
      </View>)
    }
    
  }
  render() {
    let _this = this;
    const navigate = this.props.navigation;
    return (

      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />

        {this.state.quizFinish ? <View style={styles.container}>
          <View style={styles.circle}>

            {this._scoreMessage(this.state.score)}
          </View>

        </View> : <QuizScreen quizFinish={(score) => this._quizFinish(score)} 
                             questionObj={this.state.questionObj}
                             navigation={navigate}/>}

      </View>
    );
  }
}
const scoreCircleSize = 300
const styles = StyleSheet.create({
  score: {
    color: "white",
    fontSize: 20,
    fontStyle: 'italic'
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize / 2,
    backgroundColor: "green"
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarButton: {
    width: 55,
    color: '#fff',
    textAlign: 'center'
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  }
});