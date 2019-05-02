'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports =   StyleSheet.create({
    container: {
        flex: 1,
        padding:10, 
        flexDirection: 'column',
        flexWrap: "wrap",
    },
    backgroundImage: {
        flex: 1,
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        zIndex: -1, 
        resizeMode: 'cover', // or 'stretch'
        opacity:0.5
    },
    header:{
        color: 'black',
        fontSize:20,
        fontWeight:'bold',
        textAlign: 'left',
    },
    subHeader:{
        color: 'black',
        fontSize:16, 
        textAlign: 'left',
    },
    marginTop:{
        marginTop:10,
    },
    text: {
        fontSize: 14,
        textAlign: 'left',
        lineHeight: 20,
      },
    
      

  });