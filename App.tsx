/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Login, Signup} from './src/screens/Screens'

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/* <Logo/> */}
      <Login/>
        
      

    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
  
});

export default App;
