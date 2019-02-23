import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, Button, ImageBackground, TouchableOpacity } from 'react-native';

import commonStyles from '../styles/CommonStyle' ;


export default class AboutPage extends Component{

  render(){
    const navigate  = this.props.navigation;
      return(
        <ImageBackground source={require('../assets/Images/Background.jpg')} style={commonStyles.backgroundImage}>

            <View style = {commonStyles.container}>
                    <Text>hello</Text>

            </View>
        </ImageBackground>


      );
    }
  }

