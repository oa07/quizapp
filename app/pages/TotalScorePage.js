import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight
  } from "react-native";

export default class TotalScoreScreen extends Component{
    static navigationOptions = ({navigation}) => {
        return{
            title: navigation.getParam("Score", "21")
        }
       
    }
}