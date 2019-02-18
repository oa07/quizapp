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
      borderRadius: 5,
      width: "100%", 
      backgroundColor: "#4CAF50",
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight:5,
      paddingLeft:5,    
      marginTop : 5,
      alignItems: 'center'
      
    },  
    fullWidthButtonText: {
      fontSize:20,
      color: 'white'
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