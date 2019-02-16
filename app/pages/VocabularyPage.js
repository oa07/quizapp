import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class VocabularyScreen extends Component{
    render(){
      return(
        <View style = {styles.container}>
        <Text> I am vocabulary</Text>
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