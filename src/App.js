import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native';

import Header from './components/Header';
import Empty from './components/Empty';
import Task from './components/Task';

export default function App() {
  const [data, setData] = useState([]);
  return (
    <View style={styles.container}>
      <FlatList data={data} keyExtractor={(item) =>item.key}
      ListHeaderComponent={() => <Header/>}
      ListEmptyComponent={() => <Empty/>}
      renderItem={() => <Task/>}
      />
      <Task/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingVertical: 60,
  },
});
