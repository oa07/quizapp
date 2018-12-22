/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends Component{
  render(){
    const navigate  = this.props.navigation;
    return(
      <View style = {styles.container}>
        <View style = {styles.middlecontainer}>
        <Button
          title="Grammer"
          onPress={() => navigate.navigate('Grammer')}
        />
        </View>
        <View style = {styles.bottomcontainer}>
        <Button
        title="Vocabulary"
        onPress={() => navigate.navigate('Vocabulary')}
        />
        </View>
        
      </View>
    );
  }
}

class GrammerScreen extends Component{
  render(){
    return(
      <View style = {styles.container}>
      <View style = {styles.middlecontainer}>
        <Button style = {styles.quizButton}
          title="quiz 1"
          //onPress={() => navigate.navigate('Grammer')}
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

class VocabularyScreen extends Component{
  render(){
    return(
      <View style = {styles.container}>
      <Text> I am vocabulary</Text>
      </View>

    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Grammer: GrammerScreen,
    Vocabulary: VocabularyScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component{
  render() {
    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  }
});



