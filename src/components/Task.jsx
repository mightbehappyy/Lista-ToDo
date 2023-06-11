import React, { useState } from 'react';
import {View, Text, StyleSheet,  TouchableOpacity } from 'react-native';


export default function Task({item, deleteItem}){
    const [check, setCheck] = useState([])

    const handleCheck = () => {
        setCheck(!check);
    }
    return (
        <View style={styles.taskContainer}>
            <TouchableOpacity style={styles.checkCircle} onPress={handleCheck}/>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        marginTop: 20,
        borderWidth: 1,
        backgroundColor: "#798DC5",
        flexDirection: "row",
        paddingVertical: 20,
        justifyContent: "center",
    },
    checkCircle:{
        borderWidth: 1,
        width: 25,
        height: 25,
        borderRadius: 12,
        borderColor: "white",
    }
})