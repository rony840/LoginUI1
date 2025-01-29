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
import AppNavigation from './src/components/Navigation';
import { EmailProvider } from './src/EmailContext';
import { NavigationContainer } from '@react-navigation/native';
import ErrorBoundary from './src/components/ErrorBoundary';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ErrorBoundary>
      <EmailProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </EmailProvider>
      </ErrorBoundary>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
  
});

export default App;
