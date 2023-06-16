import React, { useState } from 'react';
import {View, Text, StyleSheet,  TouchableOpacity, Image, Dimensions } from 'react-native';


export default function Task({item, deleteItem}){
    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(!check);
    }
    const windowWidth = Dimensions.get('window').width;
    const containerMaxWidthPercentage = 0.9;
    const containerMinWidthPercentage = 0.9;
    const containerMaxWidth = windowWidth * containerMaxWidthPercentage;
    const containerMinWidth = windowWidth * containerMinWidthPercentage;


    
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
                    {item.value}
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
        marginVertical: 10,
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
        minWidth:250,
        maxWidth:250,
        paddingHorizontal: 15,

    },
    iconImage:{
        height: 25,
        width: 25,

    }
})