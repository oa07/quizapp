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
import ChatHeadComponent from "../components/ChatHeadComponent";
import styles from "../styles/HomePageStyle";
import commonStyles from "../styles/CommonStyle";
import Icon from "react-native-vector-icons/Ionicons";

export default class HomeScreen extends Component {
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const navigate = this.props.navigation;
    return (
      <View style={commonStyles.container}>
        <ImageBackground
          source={require("../assets/Images/Background.jpg")}
          style={commonStyles.backgroundImage}
        />

        <View style={styles.home_main_buttons_container}>
          <View style={{flex:1}} >
            <Text  style={styles.mainPageBlockTitle}>Grammar Quizzes</Text>
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
        <View style={styles.home_main_buttons_container}>
          <View style={{flex:1}} >
            <Text  style={styles.mainPageBlockTitle}>Vocabulary Quizzes</Text>
          </View>
          <TouchableHighlight
            underlayColor="#20B573"
            style={styles.fullWidthButton}
            onPress={() => navigate.navigate("Vocabulary")}
          >
            <Text style={styles.fullWidthButtonText}>Easy</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#20B573"
            style={styles.fullWidthButton}
            onPress={() => navigate.navigate("Vocabulary")}
          >
            <Text style={styles.fullWidthButtonText}>Medium</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#20B573"
            style={styles.fullWidthButton}
            onPress={() => navigate.navigate("Vocabulary")}
          >
            <Text style={styles.fullWidthButtonText}>Difficult</Text>
          </TouchableHighlight>
        </View>
        
        {/* modal starts from here */}
        
        <View style={styles.middlecontainer}> 
        <ChatHeadComponent/>
        </View>

      
      
      
      </View> // end of container
    );
  }
}
