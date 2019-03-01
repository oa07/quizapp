import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, ImageBackground, TouchableHighlight, Image } from 'react-native';
import DictionaryComponent from '../components/DictionaryComponent';
import styles from '../styles/HomePageStyle';
import commonStyles from '../styles/CommonStyle';
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
      <ImageBackground
        source={require("../assets/Images/Background.jpg")}
        style={commonStyles.backgroundImage}
      >
        <DictionaryComponent
          ref={ref => {
            this.myModal = ref;
          }}
        />

        <View style={styles.middlecontainer}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => this.myModal.toggleModal()}
          >
            <Image
              style={styles.dictionaryIcon}
              source={require("../assets/Images/ChatHead.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={commonStyles.container}>
          <View style={styles.home_main_buttons_container}>
            <TouchableHighlight
              underlayColor="#689F38"
              style={styles.fullWidthButton}
              onPress={() => navigate.navigate("Grammer")}
            >
              <Text style={styles.fullWidthButtonText}>Grammer</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#689F38"
              style={styles.fullWidthButton}
              onPress={() => navigate.navigate("Vocabulary")}
            >
              <Text style={styles.fullWidthButtonText}>Vocabulary</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

