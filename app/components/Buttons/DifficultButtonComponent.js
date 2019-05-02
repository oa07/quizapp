import React, { Component } from "react";
import {  Text,   TouchableHighlight, } from "react-native";
import styles from "../../styles/HomePageStyle";
export default class DifficultButtonComponent extends Component {
  render() {
    const navigate = this.props.navigation;
    return (
        <TouchableHighlight
          underlayColor="#20B573"
          style={styles.fullWidthButton}
          onPress={() => navigate.navigate("Difficult")}
        >
          <Text style={styles.fullWidthButtonText}>Difficult</Text>
        </TouchableHighlight>
    );
  }
}
