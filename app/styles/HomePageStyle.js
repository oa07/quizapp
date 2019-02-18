'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports =   StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'white',
      padding: 20
    },
    fullWidthButton: {
      borderRadius: 5,
      width: "100%", 
      backgroundColor: "#4CAF50",
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight:10,
      paddingLeft:10,    
      marginTop : 10,
      alignItems: 'center'
      
    },
    fullWidthButtonText: {
      fontSize:20,
      color: 'white'
    },
    middlecontainer: {
      position: 'absolute', 
      top: 0, 
      right: 0,
      margin:20,
     
    },
    home_main_buttons_container:{
      flex: 2,
      width: "100%", 
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
      height:70,
      width: 70,

    }
  });