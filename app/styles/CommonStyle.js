'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports =   StyleSheet.create({
    container: {
        flex: 1,
        padding:20,

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
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