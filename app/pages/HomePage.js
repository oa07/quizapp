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

          
            <View style = {styles.home_main_buttons_container}>
  
              <TouchableHighlight style={styles.fullWidthButton} onPress={() => navigate.navigate('Grammer')}>
                  <Text style={styles.fullWidthButtonText}>Grammer</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.fullWidthButton} onPress={() => navigate.navigate('Vocabulary')}>
                  <Text style={styles.fullWidthButtonText}>Vocabulary</Text>
              </TouchableHighlight>
            
            </View>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'white',
      padding: 20
    },
    fullWidthButton: {
      borderRadius: 5,
      width: "100%", 
      backgroundColor: "#4CAF50",
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight:10,
      paddingLeft:10,    
      marginTop : 10,
      alignItems: 'center'
      
    },
    fullWidthButtonText: {
      fontSize:20,
      color: 'white'
    },
    middlecontainer: {
      position: 'absolute', 
      top: 0, 
      right: 0,
      margin:20,
     
    },
    home_main_buttons_container:{
      flex: 2,
      width: "100%", 
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
      height:70,
      width: 70,

    }
  });