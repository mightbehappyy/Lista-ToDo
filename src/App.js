import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';


import Input from './components/Input';
import Header from './components/Header';
import Empty from './components/Empty';
import Task from './components/Task';

export default function App() {
  const [theme, setTheme] = useState(true);
  const [data, setData] = useState([]);
  
  React.useEffect(() => {
    getData();
  }, []);
  

  const createData = async (value) => {
  try {
    const newItem = {
      value: value,
      key: uuidv4(),
      check: false,
    };
    await AsyncStorage.setItem('appData', JSON.stringify([newItem, ...data]));
    setData((prevTask) => [newItem, ...prevTask]);
    
  } catch (error) {
    console.log(error);
  }
};

  const getData = async () => {
    try {
      const info = await AsyncStorage.getItem('appData');
      let parsedData = [];
      if (info) {
        parsedData = JSON.parse(info).filter(item => item.key && item.value);
        setData(parsedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (key) => {
    try {
      const info = await AsyncStorage.getItem('appData');
      let parsedData = [];
      if (info) {
        parsedData = JSON.parse(info).filter(item => item.key !== key);
        await AsyncStorage.setItem('appData', JSON.stringify(parsedData));
        setData(parsedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (key, check) => {
    try {
      const updatedData = data.map((item) => {
        if (item.key === key) {
          return { ...item, check };
        }
        return item;
      });
      await AsyncStorage.setItem('appData', JSON.stringify(updatedData));
      setData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };
  const turnOnOff = (mode) => {
    setTheme(mode)
  }
  

  return (
    <KeyboardAvoidingView
      style={[styles.container, {backgroundColor: theme === true ? "#131617": "#F5F5F5" }]}
      behavior={Platform.OS === 'ios' ? 'height' : -500}
    >
      <Header darkModeSwitch={turnOnOff}/>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={() => <Empty mode={theme} />}
        renderItem={({ item }) => <Task item={item} deleteItem={deleteData} updateData={updateData} mode={theme} />}
      />

      <View>
        <Input submitHandler={createData} mode={theme} />
      </View>
      <StatusBar style={theme? "light":"dark"} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444f54',
    alignItems: 'center',
    paddingVertical: 30,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
