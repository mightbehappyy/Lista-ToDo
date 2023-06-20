import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function Empty({mode}){
    return (
        <View>
            <Text style={[styles.title, {color: mode? "white": "#1DA1F2"}]}>Sua lista está vazia!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        marginTop: 10,
    }
})