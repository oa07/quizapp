import React, {Component} from 'react';
import { Text, View, Button, TouchableOpacity,ImageBackground,  TouchableHighlight, Image } from 'react-native';
import Modal from 'react-native-modal';
import DictionaryComponent from '../components/DictionaryComponent';
import styles from '../styles/HomePageStyle' ;
import commonStyles from '../styles/CommonStyle' ;
import Icon from "react-native-vector-icons/Ionicons";

export default class HomeScreen extends Component{

//  static navigationOptions = {
//    title: 'Quiz App',
//  };




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

    render(){
      const navigate  = this.props.navigation;
      return(
            <ImageBackground source={require('../assets/Images/Background.jpg')} style={commonStyles.backgroundImage}>

            <Modal
                isVisible={this.state.visibleModal === 3}
                animationInTiming={2000}
                animationOutTiming={2000}
                backdropTransitionInTiming={2000}
                backdropTransitionOutTiming={2000}
                style={{left:0, padding:0,margin:0}}>
                <View style={styles.modalContent} >

                   <DictionaryComponent/>

                </View>
            </Modal>
             <View style = {styles.middlecontainer}>
                <TouchableHighlight
                underlayColor='transparent'
                onPress={() => this.setState({ visibleModal: 3})}>
                  <Image style={styles.dictionaryIcon} source={require('../assets/Images/ChatHead.png')} />
                </TouchableHighlight>

             </View>
            <View style = {commonStyles.container}>
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

