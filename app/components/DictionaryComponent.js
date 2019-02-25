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
      <View style={{ width: '100%'}}>

      <View style={{flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            flexDirection:'row',backgroundColor:'white',paddingTop:10,paddingBottom:10}}>

                              <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400} style={HomePageStyle.modalBackBtnContainer}>
                                 <Icon name={  "ios-arrow-round-back"} style={HomePageStyle.modalBackBtn} />
                               </Animatable.View>

                             <Animatable.View animation="slideInRight" duration={500} style={HomePageStyle.chatheadSearchBlock}>
                                 <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
                                   <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 20, margin:5, fontWeight:'bold',color:'black' }} />
                                 </Animatable.View>
                                     <TextInput
                                           text={this.state.input}
                                           autoFocus={true}
                                           onChangeText={e => this.setState({ input: e })}
                                           onSubmitEditing={e => this.showMeaning(e)}
                                           style={{ fontSize: 20, padding:2,  flex: 1,color:'black' }}
                                         />
                            </Animatable.View>
      </View>









        {
            this.state.output != ''?
                <View style={HomePageStyle.chatheadAnswerBlock}>
                   <Text style={{ fontSize:20, padding:10,  fontWeight: 'bold' }}>{this.state.output}</Text>
                </View>: null
        }


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
