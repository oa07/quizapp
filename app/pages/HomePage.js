import React, {Component} from 'react';
import { Text, View, Button, TouchableOpacity,ImageBackground,  TouchableHighlight, Image } from 'react-native';
import Modal from 'react-native-modal';
import DictionaryComponent from '../components/DictionaryComponent';
import styles from '../styles/HomePageStyle' ;
import commonStyles from '../styles/CommonStyle' ;
import Icon from "react-native-vector-icons/Ionicons";

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
            <Icon name="ios-close"
                onPress={() => this.setState({ visibleModal: null})}
                style={ styles.modalCrossBtn }
            />
       <DictionaryComponent/>

      </View>
    );

    render(){
      const navigate  = this.props.navigation;
      return(
            <ImageBackground source={require('../assets/Images/Background.jpg')} style={commonStyles.backgroundImage}>

                <View style = {commonStyles.container}>
                      <View style = {styles.middlecontainer}>

                        <TouchableHighlight  onPress={() => this.setState({ visibleModal: 3})}>
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

                          <TouchableHighlight
                            underlayColor='#689F38'
                            style={ styles.fullWidthButton }
                            onPress ={() => navigate.navigate('Grammer')}
                           >
                              <Text style={styles.fullWidthButtonText}>Grammer</Text>
                          </TouchableHighlight>
                          <TouchableHighlight
                              underlayColor='#689F38'
                              style={styles.fullWidthButton}
                              onPress={() => navigate.navigate('Vocabulary')}
                          >
                              <Text style={styles.fullWidthButtonText}>Vocabulary</Text>
                          </TouchableHighlight>

                        </View>

                </View>
            </ImageBackground>

      
      );
    }
  }

