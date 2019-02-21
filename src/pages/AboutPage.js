import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import DictionaryComponent from '../components/DictionaryComponent';

export default class HomeScreen extends Component{
    render(){
      const navigate  = this.props.navigation;
      return(
        <View style = {styles.container}>
          <Text style={styles.score}>You need to work hard</Text>
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
      padding: 20
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
    },
    dictionaryIcon: {
      height:50,
      width: 50,

    }
  });