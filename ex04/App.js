import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


const Header = () => {
  return (
    <View >
      <Text style={styles.headerText}>  Header</Text>
    </View>
  )
}

const Landing = () => {
  return (
    <View >
      <Text  style={styles.landingText}>  Hello</Text>
    </View>
  )
}

const Footer = () => {
  return (
    <View >
      <Text  style={styles.footerText}>  Footer</Text>
    </View>
  )
}

export default function App() {

  return (

    
    <View style={{ flex: 1 }}>
    <View style={styles.header }> 
      <Header/>
    </View> 
    <View style={styles.landing} >
      <Landing/>
      <Image
        style={styles.Logo}
        source={require("./assets/Capture.png")}
      />
    </View>
    <View style={styles.footer } >
    <Footer/>
    </View>
  </View>

    
  );
}

const styles = StyleSheet.create({
  landing: {
    flex: 6,
    backgroundColor: '#E9E9E9',
    alignItems: 'center',
  },

  Logo :  {
    alignItems: 'flex-start',
    
  },

  header : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000'
  },

  headerText : {
    color:'#fff'
  },

  footer : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
  },

  footertext : {
    color:'#000'
  }

});
