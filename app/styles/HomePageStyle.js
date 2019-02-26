'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports =   StyleSheet.create({
   fullWidthButton: {
      borderRadius: 5,
      width: "100%", 
      backgroundColor: "#689F38",
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
     modalContent: {
      flex: 1,
      width:'100%',
      backgroundColor: 'transparent',
      borderRadius: 5,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    dictionaryIcon: {
      height:70,
      width: 70,

    },
    chatheadAnswerBlock:{
        marginStart:20,
        marginEnd:20,
        marginTop:2,
        borderRadius: 5,
        backgroundColor: '#DCEDC8',
        flexDirection: 'row',
        alignItems: 'center'
    },
    chatheadSearchBlock:{
        height: 40,
        width:'80%',
        borderRadius: 5,
        backgroundColor: '#DCEDC8',
        flexDirection: 'row',
        padding: 2,
        marginStart:2,
        marginRight:10,
        alignItems: 'center'
    },
    modalBackBtn:{
        fontSize: 35,
        color:'black',
        fontWeight: 'bold'
    },
    modalBackBtnContainer:{
        marginStart:10,
        width:'10%',
        alignItems: 'center'
    },
    modalHeaderContainer:{
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        backgroundColor:'white',
        paddingTop:10,
        paddingBottom:10},
    hamburgerStyle:{
     fontSize: 35,
            color:'black',
            fontWeight: 'bold',
            marginStart:10
    }
  });