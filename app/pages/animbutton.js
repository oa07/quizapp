import React, {Component} from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight
  } from 'react-native';
  import * as Animatable from 'react-native-animatable';
  export default class Animbutton extends Component {
    constructor(props) {
       super(props);
       this.state ={
         status: false
       }
     }
    render() {
      return (
        <TouchableHighlight >
          <Animatable.View ref="view" style={{  margin:5, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: "#105851", borderRadius:5}}>
            <Text style={{color:  "white"  , fontWeight: "bold", fontSize: 15}}>{this.props.text}</Text>
          </Animatable.View>
        </TouchableHighlight>
      );
    }
  }