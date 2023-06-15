import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';

import Input from './components/Input';
import Header from './components/Header';
import Empty from './components/Empty';
import Task from './components/Task';

export default function App() {
  const [data, setData] = useState([]);
  const submitHandler = (value) =>{
  setData((prevTask) => {
    return[
      {
        value: value,
        key: Math.random().toString(),
      },
      ...prevTask
    ]
  })
}

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ?  'height' : -500}
  >
      <Header/>
      <FlatList data={data} keyExtractor={(item) =>item.key}
      ListEmptyComponent={() => <Empty/>}
      renderItem={({item}) => <Task item={item}/>}
      />

      <View>
        <Input submitHandler={submitHandler}/>
      </View>
      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingVertical: 30,
  },
  inputContainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    

  }
});
