import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {vocabulary} from "./data.json";

let vocabularyQuizArray = [];
export default class VocabularyScreen extends Component{
  static navigationOptions = {
    title: 'Vocabulary',
  };
  constructor(props){
    
    super(props);
    const vocabularyData = vocabulary;
    // fetching quizid of grammer object
    vocabularyQuizArray = Object.keys(vocabularyData).map(function(id){
      return vocabularyData[id];
    });
    // 
  } 
  
  render(){
    const navigate  = this.props.navigation;
      return(
        <View style = {styles.container}>
      
          <TouchableHighlight 
          style={styles.quizButton}
          onPress={() => navigate.navigate('PlayQuiz')}
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
        
  
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#Fc5F',
    },
    middlecontainer: {
      flex: 1.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomcontainer:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    quizButton: {
      
      justifyContent: 'space-between',
      alignContent: 'flex-start',
      flexDirection: 'column',
      backgroundColor: '#F5FCFF',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    }
  });