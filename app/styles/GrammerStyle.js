'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports =   StyleSheet.create({
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
      flex:1,
      borderRadius: 8,
      width: "100%", 
      backgroundColor: "#20B573",
      borderWidth: 2,
      borderColor: "#f8f8f8",
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight:5,
      paddingLeft:5,    
      alignItems: 'center'
      
    },  
    fullWidthButtonText: {
      fontSize:20,
      color: 'white'
    },
     backgroundImage: {
            flex: 1,
            resizeMode: 'cover', // or 'stretch'
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },

  });