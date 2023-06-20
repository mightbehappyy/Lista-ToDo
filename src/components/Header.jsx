import React, { useState } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';
import { TouchableOpacity } from 'react-native';

export default function Header({darkModeSwitch}){
    const [mode, setMode] = useState()

    const turnOnOff = () => {
        setMode(!mode)
        {
            if (mode === true)  {
                darkModeSwitch(true)
             }
            else{
                darkModeSwitch(false)
            }
        }
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={turnOnOff}>
        <Lottie style={styles.mode} source={require('../../assets/47047-dark-mode-button.json')} autoPlay loop />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
            <Text style={[styles.title,{color: mode === true ? "#1DA1F2": "white"}]}>Lista To do</Text>
        </View>
        
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginRight: 80
    },
    mode:{
        marginRight: 10,
        height: 40,
        width: 70,
    },
    title: {
        position: 'relative',
        fontSize: 35,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",

    }
})