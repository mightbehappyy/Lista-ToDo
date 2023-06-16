import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Keyboard } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Input({submitHandler, saveData}){
    const [value, setValue] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        setShowWarning(false); // esconde o aviso quando o valor "value" muda
      }, [value]);


    const onChangeText = (text) => {
        setValue(text);
    };

    const handleAddHabit = () => {
        if (!value || value.trim() === '') {
          setShowWarning(true)
        } else {
          submitHandler(value);
        }
        setValue('');
        Keyboard.dismiss();
      };
      const handlePress = async () => {
        handleAddHabit();
        await saveData();
      };
      
    return (
           <View style={styles.container}>
                <TextInput
                    placeholder='Adicione sua task'
                    placeholderTextColor="#bbbb"
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.input}
                />
                {
                showWarning && <Text style={styles.warning}>O campo está vazio</Text>
            }
                <TouchableOpacity onPress={handlePress}  style={styles.button}>
                    <Text style={styles.buttonText}>Adicionar</Text>

                </TouchableOpacity>
            </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center"
    },
    input:{
        width:200,
        color: "white",
        borderWidth: 1,
        borderColor: "#034efc",
        paddingVertical: 8,
        paddingHorizontal: 15, 
        borderRadius: 12,
        height: 50,
        width: 250,
        textAlign:"center"
    },
    button:{
        borderWidth: 1,
        borderColor: "bbb",
        borderRadius: 25,
        height: 50,
        width: 150,
        justifyContent:"center",
        marginTop: 25,
        backgroundColor: "#5D3FD3"

    },
    buttonText:{
        color:"white",
        textAlign:"center"
    },
    warning:{
        fontSize: 15,
        fontWeight: "bold",
        color: 'red',
        marginTop: 2,
    }
})
