import React, { useState } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';

export default function Input({submitHandler}){
    const [value, setValue] = useState("");
    
    const onChangeText = (text) => {
        setValue(text);
    };
    return (
        <View>
           <View>
                <TextInput
                    placeholder='Adicione sua task'
                    placeholderTextColor="#bbbb"
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.input}
                />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        width:200,
        color: "white",
        borderWidth: 1,
        borderColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 15
        
    }
})
