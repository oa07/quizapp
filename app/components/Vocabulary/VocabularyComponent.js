import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  Image
} from "react-native";
import styles from "../../styles/HomePageStyle";
export default class VocabularyComponent extends Component {
  render() {
    const navigate = this.props.navigation;
    return (
      <View style={styles.home_main_buttons_container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.mainPageBlockTitle}>Grammar Quizzes</Text>
        </View>
        <TouchableHighlight
          underlayColor="#20B573"
          style={styles.fullWidthButton}
          onPress={() => navigate.navigate("Grammer")}
        >
          <Text style={styles.fullWidthButtonText}>Easy</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#20B573"
          style={styles.fullWidthButton}
          onPress={() => navigate.navigate("Grammer")}
        >
          <Text style={styles.fullWidthButtonText}>Medium</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#20B573"
          style={styles.fullWidthButton}
          onPress={() => navigate.navigate("Grammer")}
        >
          <Text style={styles.fullWidthButtonText}>Difficult</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
