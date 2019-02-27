import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, Button, ImageBackground, TouchableOpacity } from 'react-native';

import commonStyles from '../styles/CommonStyle' ;


export default class AboutPage extends Component{
  static navigationOptions = ({ navigation }) => ({
    headerLeft: `sdfsdfsddfsf`,
     headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });

  render(){
    const navigate  = this.props.navigation;
      return (
        <View  style={[  commonStyles.container]} >
          <View>
            <Text style={commonStyles.header}>Version</Text>
            <Text style={commonStyles.text}>1.0.0</Text>
          </View>
          <View>
            <Text style={[commonStyles.header, commonStyles.marginTop]}>About Us</Text>
            <Text style={commonStyles.text}>
              Borno lab is a small team trying to bring out the best among those who wants to learn. We are trying our best to make learning process convenient for the people.
            </Text>
          </View>
          <View>
            <Text style={[commonStyles.header, commonStyles.marginTop]}>Licenses</Text>
            <Text style={commonStyles.text}>See details here..</Text>
          </View>
          <View>
            <Text style={[commonStyles.header, commonStyles.marginTop]}>Privacy Policy</Text>
            <Text style={commonStyles.text}>See details here...</Text>
          </View>

          <View>
            <Text style={[commonStyles.header, commonStyles.marginTop]}>Credits</Text>
            <Text style={[commonStyles.subHeader, commonStyles.marginTop]}>Himadri Chowdhury and His Team:</Text>
            <Text style={commonStyles.text}>
              For making this idea a reality with their programming skills
            </Text>
            <Text style={[commonStyles.subHeader, commonStyles.marginTop]}>Freepik:</Text>
            <Text style={commonStyles.text}> For most of the graphic ars used in this app.</Text>
          </View>
          <View>
            <Text style={[commonStyles.header, commonStyles.marginTop ]}>Contact us</Text>
            <Text adjustsFontSizeToFit={true}  style={{   fontSize: 14,
         textAlign: 'justify',
        lineHeight: 20,}}>
              If you want to drop a suggestion or you want to tell us anything just send us a mail at - bornolab.official@gmail.com
            </Text>
          </View>
        </View>
      );
    }
  }

