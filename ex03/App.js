import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';





export default function App() {

 
    // Déclare une nouvelle variable d'état, que nous appellerons « count »
    const [count, setCount] = useState(0);


  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="Bouton"
      onPress={() =>setCount(count + 1)}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
