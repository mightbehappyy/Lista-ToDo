import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Keyboard } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Input({submitHandler, mode}){
    const [value, setValue] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const [maxValueWarning, setMaxValueWarning] = useState()

    useEffect(() => {
        setShowWarning(false); // esconde o aviso quando o valor "value" muda
      }, [value]);


    const onChangeText = (text) => {
        if (text.length <= 179){
        setValue(text);
        setMaxValueWarning(false)
        } else{
            setMaxValueWarning(true)
        }
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
      const handlePress = () => {
        handleAddHabit();

      };
      
    return (
           <View style={styles.container}>
                <TextInput
                    placeholder='Adicione sua task'
                    placeholderTextColor={mode? "white": "black"}
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.input}
                    borderColor = {mode? "#034efc": "#1DA1F2"}
                    color = {mode? "white": "black"}
                    maxLength={180}
                />
                {
                showWarning && <Text style={styles.warning}>O campo está vazio</Text>
                }
                {
                maxValueWarning && <Text style={styles.warning}>Numero máximo de caractéres</Text>
                }
                <TouchableOpacity onPress={handlePress} style={[styles.button, {backgroundColor: mode?  "#007AFF": "#1DA1F2"}]}>
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
        color: "black",
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 15, 
        borderRadius: 12,
        height: 50,
        width: 250,
        textAlign:"center",
        marginTop: 10
    },
    button:{
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
