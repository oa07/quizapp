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
      <View style={{ width: '100%', margin: 20}}>



       <Animatable.View animation="slideInRight" duration={500} style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, marginStart:10,marginRight:10, marginTop:20, alignItems: 'center' }}>
         <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
           <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 20, margin:5 }} />
         </Animatable.View>
             <TextInput
                   text={this.state.input}
                   autoFocus={true}
                   onChangeText={e => this.setState({ input: e })}
                   onSubmitEditing={e => this.showMeaning(e)}
                   style={{ fontSize: 20, padding:10,  flex: 1 }}
                 />
       </Animatable.View>


       <View style={{ marginStart:10,marginEnd:10, marginTop: 2, backgroundColor: 'white', flexDirection: 'row',  alignItems: 'center' }}>

         <Text style={{ fontSize:20, padding:10 }}>{this.state.output}</Text>
        </View>

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
