import React, { Component } from "react";
import { Text, TouchableHighlight } from "react-native";
import styles from "../../styles/HomePageStyle";

export default class EasyButtonComponent extends Component {
  render() {
    const navigate = this.props.navigation;
    return (
      <TouchableHighlight
        underlayColor="#20B573"
        style={styles.fullWidthButton}
        onPress={() => {
          navigate.navigate("Easy", {
            content: this.props.content
          });
        }}
      >
        <Text style={styles.fullWidthButtonText}>Easy</Text>
      </TouchableHighlight>
    );
  }
}
