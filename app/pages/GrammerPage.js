import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, Button, ImageBackground, TouchableOpacity } from 'react-native';
import {grammer} from "./data.json";
import styles from '../styles/GrammerStyle' ;
import commonStyles from '../styles/CommonStyle' ;

let grammerQuizArray = [];

export default class GrammerScreen extends Component{

  static navigationOptions = {
    title: 'Grammer',
  };
  constructor(props){
    super(props);
    const grammerData = grammer;
    // fetching quizid of grammer object
    grammerQuizArray = Object.keys(grammerData).map(function(id){
      return grammerData[id];
    });
    // 
  }  
  render(){
    const navigate  = this.props.navigation;
      return(
        <ImageBackground source={require('../assets/Images/Background.jpg')} style={styles.backgroundImage}>

            <View style = {commonStyles.container}>

                  <TouchableHighlight
                  style={styles.quizButton}
                  onPress={() => navigate.navigate('Quiz')}
                   >
                    <Text style={styles.fullWidthButtonText}>QUIZ 1</Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                  style={styles.quizButton}
                  onPress={() => navigate.navigate('Quiz')}
                   >
                    <Text style={styles.fullWidthButtonText}>Quiz 2</Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                  style={styles.quizButton}
                  onPress={() => navigate.navigate('Quiz')}
                   >
                    <Text style={styles.fullWidthButtonText}>Quiz 3</Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                  style={styles.quizButton}
                  onPress={() => navigate.navigate('Quiz')}
                   >
                    <Text style={styles.fullWidthButtonText}>Quiz 4</Text>
                  </TouchableHighlight>
                 <TouchableHighlight
                  style={styles.quizButton}
                  onPress={() => navigate.navigate('Quiz')}
                   >
                    <Text style={styles.fullWidthButtonText}>Quiz 5</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                  style={styles.quizButton}
                  onPress={() => navigate.navigate('Quiz')}
                   >
                    <Text style={styles.fullWidthButtonText}>Quiz 6</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                  style={styles.quizButton}
                  onPress={() => navigate.navigate('Quiz')}
                   >
                    <Text style={styles.fullWidthButtonText}>Quiz 7</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                  style={styles.quizButton}
                  onPress={() => navigate.navigate('Quiz')}
                   >
                    <Text style={styles.fullWidthButtonText}>Quiz 8</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                  style={styles.quizButton}
                  onPress={() => navigate.navigate('Quiz')}
                   >
                    <Text style={styles.fullWidthButtonText}>Quiz 9</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                  style={styles.quizButton}
                  onPress={() => navigate.navigate('Quiz')}
                   >
                    <Text style={styles.fullWidthButtonText}>Quiz 10</Text>
                  </TouchableHighlight>
            </View>
        </ImageBackground>

  
      );
    }
  }

 