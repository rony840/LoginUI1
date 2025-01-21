/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Login, Signup} from './src/screens/Screens'

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Logo/> */}
      <Login/>
        
      

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
  
});

export default App;
