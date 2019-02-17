import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import Modal from 'react-native-modal';
import DictionaryComponent from '../components/DictionaryComponent';

export default class HomeScreen extends Component{
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
        <DictionaryComponent/>   
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
          <TouchableHighlight onPress={() => this.setState({ visibleModal: 3})}>
          <Image style={styles.dictionaryIcon} source={require('../assets/Images/ChatHead.png')} />
          </TouchableHighlight>
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#Fc5F',
      padding: 20
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
    },
    dictionaryIcon: {
      height:50,
      width: 50,

    }
  });