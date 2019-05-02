"use strict";

var React = require("react-native");

var { StyleSheet } = React;

module.exports = StyleSheet.create({
  questionText: {
    fontSize: 20,
    margin: 15, 
    color: "white"
  },
  bottomNavigation: {
    flexDirection: 'row',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  nextButton: { 
    flex:1,
    backgroundColor: "#20B573",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  prevButton: { 
    flex:1,
    backgroundColor: "#60ECAE",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  questionBlock: {
    width: "100%",
    minHeight: "20%",
    borderRadius: 5,
    backgroundColor: "#FF5722",
    justifyContent: "center",
    marginBottom: 20
  },
  buttonTextStyle: {
    fontSize: 25,
    textAlign: "center", // <-- the magic
    justifyContent:'center',
  },
  answerButton: {
    borderRadius: 5,
    width: "100%",
    backgroundColor: "#757575",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5,
    marginTop: 5,
    alignItems: "center"
  },
  fullWidthButtonText: {
    fontSize: 20,
    color: "white"
  },
  submitButton:{
    backgroundColor:'#20B573',
    width:'50%', 
    marginTop:50, 
    alignSelf: 'center',
    borderRadius:10,
    padding:5,
    alignItems:'center',
    justifyContent:'center'
  }
});
