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
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Difficult', {
              content: this.props.content, 
            });
          }}  
        
        >
          <Text style={styles.fullWidthButtonText}>Difficult</Text>
        </TouchableHighlight>
    );
  }
}
