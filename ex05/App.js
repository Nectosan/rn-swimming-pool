import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <ScrollView style={styles.scrollViewRectangle}/>
     
       <ScrollView  horizontal={true} >
         <ScrollView style={styles.scrollViewRouge}/>
         <ScrollView style={styles.scrollViewRouge}/>
         <ScrollView style={styles.scrollViewRouge}/>
       </ScrollView>

       <ScrollView style={styles.scrollViewRectangle}/>
       <ScrollView style={styles.scrollViewRouge}/>
       <ScrollView style={styles.scrollViewRectangle}/>
       <ScrollView style={styles.scrollViewRectangle}/>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  
  scrollViewRectangle: {
    flex: 1,
    backgroundColor: 'purple',
    width:200,
    maxHeight:125,
    marginBottom:10
  },
  scrollViewRouge: {
   
    flex: 1,
    backgroundColor: 'red',
    width:100,
    maxHeight:100,
    marginBottom:10,
    marginRight : 10
  },
});
