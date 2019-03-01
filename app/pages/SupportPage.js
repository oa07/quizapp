import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, Button, ImageBackground, TouchableOpacity } from 'react-native';

import commonStyles from '../styles/CommonStyle' ;

const styles = StyleSheet.create({
  textStyle: {
    color: "black",
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 25,
    marginBottom:10
  }
});


export default class SupportPage extends Component{
  static navigationOptions = {
    headerTitle: 'Support',
    title: 'Support',
  };

  render(){
    const navigate  = this.props.navigation;
      return (
        <View style={commonStyles.container}>
          <Text style={styles.textStyle}>
            The only support we need right now is your love and good
            words. Share the name with your friends and tell them how
            helpful this app is. That's all we ask from you.
          </Text>
          <Text style={styles.textStyle}>
            If that's not enough for you and you still want to go on an
            extra mile to help us out, what type of person can say no to
            that? Send us a million dollar cheque. Just kidding, we are
            not after your money at all.
          </Text>
          <Text style={styles.textStyle}>
            You can give us a 5 starts rating on Google Play and leave a
            good review that might inspire other people to use this app.
            It's the best thing you can do to us. Love you all
          </Text>
        </View>
      );
    }
  }

