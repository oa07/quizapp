import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import SearchBar from "react-native-search-bar";

const eng2bangla = require("./eng2bangla.json");
export default class DictionaryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      output: "",
      from: "en",
      to: "bn"
    };
  }

  render() {
    return (
      <View>
        <Text>
          Type something in {this.state.from} => {this.state.to}:
        </Text>

        <TextInput
          text={this.state.input}
          autoFocus={true}
          onChangeText={e => this.setState({ input: e })}
          onSubmitEditing={e => this.showMeaning(e)}
        />
        <Text>{this.state.output}</Text>
      </View>
    );
  }
  showMeaning(e) {
    const input = this.state.input.toLowerCase();
    const meaning = input in eng2bangla ? eng2bangla[input] : null;
    // Update the state
    this.setState({ output: meaning || "Not Found" });
  }
}
