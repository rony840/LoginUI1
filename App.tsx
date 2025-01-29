import './src/gesture-handler';
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
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './src/components/Navigation';
import { EmailProvider } from './src/EmailContext';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={styles.container}>
    <EmailProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </EmailProvider>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
  
});

export default App;
