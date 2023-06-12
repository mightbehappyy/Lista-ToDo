import React, { useState } from 'react';
import {View, Text, StyleSheet,  TouchableOpacity, Image } from 'react-native';


export default function Task({item, deleteItem}){
    const [check, setCheck] = useState([])

    const handleCheck = () => {
        setCheck(!check);
    }
    return (
        <View style={[styles.taskContainer, {backgroundColor: check === false ? "#798DC5" : "green"}
        ]}
            >
           {
            check === false  ? (
                <TouchableOpacity style={styles.checkCircle} onPress={handleCheck}/>
            ) : (
                <TouchableOpacity onPress={handleCheck}>
                        <Image style={styles.iconImage} source={require("../../assets/check.png")}/>
                </TouchableOpacity>
            )  
           }
            <View>
                <Text style={styles.taskTitle}>
                    {item.value} text
                </Text>
            </View>
            <TouchableOpacity onPress={() => deleteItem(item.key)}>
                <Image  style={styles.iconImage} source={require("../../assets/delete.png")}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        marginTop: 20,
        borderWidth: 1,
        flexDirection: "row",
        paddingVertical: 20,
        justifyContent: "center",
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    checkCircle:{
        borderWidth: 1,
        width: 25,
        height: 25,
        borderRadius: 12,
        borderColor: "white",
    },
    taskTitle:{
        color: "white",
        fontSize: 15,
        minWidth:220,
        maxWidth:220,
        paddingHorizontal: 15,

    },
    iconImage:{
        height: 25,
        width: 25,

    }
})