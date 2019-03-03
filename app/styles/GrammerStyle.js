"use strict";

var React = require("react-native");

var { StyleSheet } = React;

module.exports = StyleSheet.create({
   quizButton: {
    margin: 5,
    flex: 1,
    borderRadius: 8,
    width: "70%",
    backgroundColor: "#20B573",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  fullWidthButtonText: {
    fontSize: 16,
    color: "white"
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
