'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports =   StyleSheet.create({
   fullWidthButton: {
      borderRadius: 5,
      width: "100%", 
      backgroundColor: "#689F38",
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
     modalContent: {
      backgroundColor: '#757575',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    dictionaryIcon: {
      height:70,
      width: 70,

    },
    modalCrossBtn:{
     fontSize: 40,
     color: 'red',
     position:  'absolute',
     right:0,
     marginEnd:5,
     top:0,

    }
  });