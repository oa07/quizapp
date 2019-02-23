'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;



module.exports =   StyleSheet.create({

      questionText: {
        fontSize: 20,
        margin: 15,
        fontWeight: 'bold',
        color: "white",
        justifyContent: 'center',
        alignItems: 'center',

      },
      bottomNavigation:{
        width: "100%",
        position: 'absolute',
        bottom:0,
        left:0,
        padding:0,
        margin:0,
        flexDirection: 'row',
        alignSelf: 'flex-start'
      },
      nextButton :{
        width: "50%",
        backgroundColor: "#689F38",
        padding:20,

      },
       prevButton :{
        width: "50%",
        backgroundColor: "#DCEDC8",
        padding:20,
      },
      questionBlock: {
        width: '100%',
        minHeight: '20%',
        margin: 20,
        marginEnd: 20,
        borderRadius: 5,
        backgroundColor: "#FF5722",
        justifyContent: 'center',
      },
      buttonTextStyle:{
        fontSize: 25,
        textAlign: 'center', // <-- the magic
      },
      answerButton:{
        fontSize: 25,
        backgroundColor: "#8BC34A",
        textAlign: 'center', // <-- the magic
      },

  });