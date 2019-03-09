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
        onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Medium', {
              content: this.props.content, 
            });
          }}  
      >
        <Text style={styles.fullWidthButtonText}>Medium</Text>
      </TouchableHighlight>
    );
  }
}
