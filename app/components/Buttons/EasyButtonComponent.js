import React, { Component } from "react";
import { Text, TouchableHighlight } from "react-native";
import styles from "../../styles/HomePageStyle";

export default class EasyButtonComponent extends Component {
  render() {
    const navigate = this.props.navigation;
    console.log("easy button props: "+ JSON.stringify(this.props));
    return (
      <TouchableHighlight
        underlayColor="#20B573"
        style={styles.fullWidthButton}
        onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Easy', {
              content: this.props.content, 
            });
          }} 
        
      >
        <Text style={styles.fullWidthButtonText}>Easy</Text>
      </TouchableHighlight>
    );
  }
}

