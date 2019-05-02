import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from 'react-native-animatable'
import HomePageStyle from '../styles/HomePageStyle' ;
import Modal from 'react-native-modal';


const eng2bangla = require("./eng2bangla.json");
export default class DictionaryComponent extends Component {


  constructor(props) {
    super(props);

    this.state = {
      input: "",
      output: "",
      from: "en",
      to: "bn",
      visible: false,
    };

  }
  toggleModal = () => {
    console.log("i am here");
    this.setState({visible: !this.state.visible});
  }



  render() {
    return (
      <Modal
        style={{ width: "100%", left: 0, padding: 0, margin: 0 }}
        isVisible={this.state.visible}
        animationInTiming={2000}
        animationOutTiming={2000}
        backdropTransitionInTiming={2000}
        backdropTransitionOutTiming={2000}
      >
        <View style={HomePageStyle.modalContent}>
          <View style={{ width: "100%" }}>
            <View style={HomePageStyle.modalHeaderContainer}>
              <Animatable.View
                animation={
                  this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"
                }
                duration={400}
                style={HomePageStyle.modalBackBtnContainer}
              >
                <Icon
                  name={"ios-arrow-round-back"}
                  onPress={this.toggleModal}
                  style={HomePageStyle.modalBackBtn}
                />
              </Animatable.View>

              <Animatable.View
                animation="slideInRight"
                duration={500}
                style={HomePageStyle.chatheadSearchBlock}
              >
                <Animatable.View
                  animation={
                    this.state.searchBarFocused
                      ? "fadeInLeft"
                      : "fadeInRight"
                  }
                  duration={400}
                >
                  <Icon
                    name={
                      this.state.searchBarFocused
                        ? "md-arrow-back"
                        : "ios-search"
                    }
                    style={{
                      fontSize: 20,
                      margin: 5,
                      fontWeight: "bold",
                      color: "black"
                    }}
                  />
                </Animatable.View>
                <TextInput
                  text={this.state.input}
                  autoFocus={true}
                  onChangeText={e => this.setState({ input: e })}
                  onSubmitEditing={e => this.showMeaning(e)}
                  style={{
                    fontSize: 20,
                    padding: 2,
                    flex: 1,
                    color: "black"
                  }}
                />
              </Animatable.View>
            </View>

            {this.state.output != "" ? (
              <View style={HomePageStyle.chatheadAnswerBlock}>
                <Text
                  style={{ fontSize: 20, padding: 10, fontWeight: "bold" }}
                >
                  {this.state.output}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </Modal>
    );
  }
  showMeaning(e) {
    const input = this.state.input.toLowerCase();
    const meaning = input in eng2bangla ? eng2bangla[input] : null;
    // Update the state
    this.setState({ output: meaning || "Not Found" });
  }
}
