import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {grammer} from "./data.json";
let grammerQuizArray = [];

export default class GrammerScreen extends Component{
  constructor(props){
    super(props);
    const grammerData = grammer;
    // fetching quizid of grammer object
    grammerQuizArray = Object.keys(grammerData).map(function(id){
      return grammerData[id];
    });
    // 
  }  
  render(){
    const navigate  = this.props.navigation;
      return(
        <View style = {styles.container}>
        <View style = {styles.middlecontainer}>
          <Button style = {styles.quizButton}
            title="quiz 1"
            onPress={() => navigate.navigate('PlayQuiz')}
          />
        </View>
        <View style = {styles.middlecontainer}>
          <Button style = {styles.quizButton}
            title="quiz 2"
            //onPress={() => navigate.navigate('Grammer')}
          />
        </View>
        <View style = {styles.middlecontainer}>
          <Button style = {styles.quizButton}
            title="quiz 3"
            //onPress={() => navigate.navigate('Grammer')}
          />
        </View>
        <View style = {styles.middlecontainer}>
          <Button style = {styles.quizButton}
            title="quiz 4"
            //onPress={() => navigate.navigate('Grammer')}
          />
        </View>
        <View style = {styles.middlecontainer}>
          <Button style = {styles.quizButton}
            title="quiz 5"
            //onPress={() => navigate.navigate('Grammer')}
          />
        </View>
        <View style = {styles.middlecontainer}>
          <Button style = {styles.quizButton}
            title="quiz 6"
            //onPress={() => navigate.navigate('Grammer')}
          />
        </View>
        <View style = {styles.middlecontainer}>
          <Button style = {styles.quizButton}
            title="quiz 7"
            //onPress={() => navigate.navigate('Grammer')}
          />
        </View>
        <View style = {styles.middlecontainer}>
          <Button style = {styles.quizButton}
            title="quiz 8"
            //onPress={() => navigate.navigate('Grammer')}
          />
        </View>
        <View style = {styles.middlecontainer}>
          <Button style = {styles.quizButton}
            title="quiz 9"
            //onPress={() => navigate.navigate('Grammer')}
          />
        </View>
        <View style = {styles.middlecontainer}>
          <Button style = {styles.quizButton}
            title="quiz 10"
            //onPress={() => navigate.navigate('Grammer')}
          />
        </View>
     
        </View>
        
  
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#Fc5F',
    },
    middlecontainer: {
      flex: 1.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomcontainer:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    quizButton: {
      
      justifyContent: 'space-between',
      alignContent: 'flex-start',
      flexDirection: 'column',
      backgroundColor: '#F5FCFF',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    }
  });