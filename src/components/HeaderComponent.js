import React, { Component} from 'react';
import Button from 'react-native-button';
import { Text, View, Image, TouchableHighlight } from 'react-native';

export default class HeaderComponent extends Component{
    render(){
        return(<View style={{
            height: 20,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
        <TouchableHighlight
        onPress={()=>{
            const { navigate } = this.props.navigation;
            navigate('DrawerOpen');
        }}>
        </TouchableHighlight>

        </View>)
    }
}