'use strict';

var React = require('react-native');
import {   Dimensions } from "react-native";
var {
  StyleSheet,
} = React;

const { width, height } = Dimensions.get("window");
module.exports =   StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },

  });