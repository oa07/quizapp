import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {Sheet1} from './data.json'
import QuizScreenComponent from './QuizScreenComponent';
export default class QuizScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            quizDetails: {}
        }

    }
    componentDidMount(){
        return fetch(Sheet1)
                .then((response)=>response.json())
                .then((responseJson)=>{
                    this.setstate({
                        quizDetails: responseJson
                    })
                });
    }
    render(){
        return (
            <View>
                <QuizScreenComponent quizDetails/>
            </View>
        )
    }
}