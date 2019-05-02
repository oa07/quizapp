"use strict";

var React = require("react-native");

var { StyleSheet } = React;

module.exports = StyleSheet.create({
   quizButton: {
    margin: 5,
    flex: 1,
    borderRadius: 1,
    backgroundColor: "#20B573",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "column",
    height: 50,
    
  },

  fullWidthButtonText: {
    fontSize: 22,
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover" // or 'stretch'
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
});
