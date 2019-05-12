import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  Image
} from "react-native";
import DictionaryComponent from "../components/DictionaryComponent";
import styles from "../styles/HomePageStyle";
import commonStyles from "../styles/CommonStyle";
import Icon from "react-native-vector-icons/Ionicons";
import GrammarComponent from "../components/Grammar/GrammarComponent";
import VocabularyComponent from "../components/Vocabulary/VocabularyComponent";

import {grammer} from "../assets/grammer.json";

let  grammerList =[];

export default class HomeScreen extends Component {
  
  
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={commonStyles.container}>
        <ImageBackground
          source={require("../assets/Images/Background.jpg")}
          style={commonStyles.backgroundImage}
        />
        {/* <DictionaryComponent
          ref={ref => {
            this.myModal = ref;
          }}
        /> */}

  
        <GrammarComponent navigation={this.props.navigation}/>
        <VocabularyComponent navigation={this.props.navigation}/>
        
        {/* modal is viewed after clicking the image below */}
        {/* <View style={styles.middlecontainer}> 
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
       */}
      
      </View> // end of container
    );
  }
}
