import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function Empty(){
    return (
        <View>
            <Text style={styles.title}>Sua lista está vazia!</Text>
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