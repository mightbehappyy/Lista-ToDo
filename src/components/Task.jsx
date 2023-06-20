    import React, { useState, useEffect } from 'react';
    import {View, Text, StyleSheet,  TouchableOpacity, Image } from 'react-native';


    export default function Task({item, deleteItem, updateData}){
        const [check, setCheck] = useState()

        useEffect(() => {
            if (item.check !== undefined) {
              setCheck(item.check);
            }
          }, [item]);

        const handleCheck = () => {
            setCheck(!check);
            console.log(check)
            updateData(item.key, !check)
        }
        
        return (
            <View style={[styles.taskContainer, {backgroundColor: check === false ? "grey" : "#007AFF"}
            ]}
                >
            {
                check === false  ? (
                    <TouchableOpacity style={styles.checkCircle} onPress={handleCheck}>
                        {item.check}
                    </TouchableOpacity>
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