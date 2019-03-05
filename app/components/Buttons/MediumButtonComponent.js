import React, { Component } from "react";
import {  Text,   TouchableHighlight, } from "react-native";
import styles from "../../styles/HomePageStyle";
export default class MediumButtonComponent extends Component {
  render() {
    const navigate = this.props.navigation;
    return (
        <TouchableHighlight
        underlayColor="#20B573"
        style={styles.fullWidthButton}
        onPress={() => navigate.navigate("Medium")}
      >
        <Text style={styles.fullWidthButtonText}>Medium</Text>
      </TouchableHighlight>
    );
  }
}
