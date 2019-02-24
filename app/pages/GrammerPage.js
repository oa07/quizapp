import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, Button, ImageBackground, TouchableOpacity } from 'react-native';
import {grammer} from "./data.json";
import styles from '../styles/GrammerStyle' ;
import commonStyles from '../styles/CommonStyle' ;

let grammerQuizArray = [];

export default class GrammerScreen extends Component{

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
    var myloop = [];

    for (let i = 1; i <= 10; i++) {
      myloop.push(
        <TouchableHighlight
            key={i}
            underlayColor='#689F38'
            style={styles.quizButton}
            onPress={() => navigate.navigate('Quiz')}
        >
            <Text style={styles.fullWidthButtonText}>QUIZ {i}</Text>
        </TouchableHighlight>
      );
    }
      return(
        <ImageBackground source={require('../assets/Images/Background.jpg')} style={styles.backgroundImage}>

            <View style = {commonStyles.container}>

                  {myloop}


            </View>
        </ImageBackground>

  
      );
    }
  }

 