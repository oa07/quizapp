/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Modal from 'react-native-modal';

class HomeScreen extends Component{
  state = {
    visibleModal: null,
  };
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      <Button
        title="Close"
        onPress={() => this.setState({ visibleModal: null})}
        />
    </View>
  );
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

        <View style = {styles.bottomcontainer}>
        <Button
        title="Dictionary"
        onPress={() => this.setState({ visibleModal: 3})}
        />
        <Modal
          isVisible={this.state.visibleModal === 3}
          animationInTiming={2000}
          animationOutTiming={2000}
          backdropTransitionInTiming={2000}
          backdropTransitionOutTiming={2000}
        >
          {this._renderModalContent()}
        </Modal>
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
          title="quiz 3"
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



