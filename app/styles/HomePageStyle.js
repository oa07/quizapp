"use strict";

var React = require("react-native");

var { StyleSheet } = React;

module.exports = StyleSheet.create({
  fullWidthButton: {
    flex: 1,
    borderRadius: 8,
    width: "80%",
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 3,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#dddddd",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  fullWidthButtonText: {
    fontSize: 20,
    color: "#727171"
  },
  middlecontainer: {
    position: "absolute",
    flex: 1, 
    width: 70,
    height: 70,
    right:0,
    margin:10,
  },
  home_main_buttons_container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 20,
    minHeight:'40%',
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    borderWidth: 2,
    borderColor: "#C3C1C9",
    alignItems: "center"
  },
  modalContent: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  dictionaryIcon: {
    height: 70,
    width: 70,  
  },
  chatheadAnswerBlock: {
    marginStart: 20,
    marginEnd: 20,
    marginTop: 2,
    borderRadius: 5,
    backgroundColor: "#DCEDC8",
    flexDirection: "row",
    alignItems: "center"
  },
  chatheadSearchBlock: {
    height: 40,
    width: "80%",
    borderRadius: 5,
    backgroundColor: "#DCEDC8",
    flexDirection: "row",
    padding: 2,
    marginStart: 2,
    marginRight: 10,
    alignItems: "center"
  },
  modalBackBtn: {
    fontSize: 35,
    color: "black",
    fontWeight: "bold"
  },
  modalBackBtnContainer: {
    marginStart: 10,
    width: "10%",
    alignItems: "center"
  },
  modalHeaderContainer: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10
  },
  hamburgerStyle: {
    fontSize: 35,
    color: "black",
    fontWeight: "bold",
    marginStart: 10
  },
  mainPageBlockTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30
  }
});
