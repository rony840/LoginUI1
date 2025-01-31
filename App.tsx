import './src/gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import AppNavigation from './src/components/Navigation';
import { EmailProvider } from './src/store/context/EmailContext';
import { NavigationContainer } from '@react-navigation/native';
import ErrorBoundary from './src/components/ErrorBoundary';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PermissionHelper from './src/helper/PermissionHelper.android';
import PermissionHelperIos from './src/helper/PermissionHelper.ios';
import {Provider} from 'react-redux'
import store from './src/store/redux/store';

function App(): React.JSX.Element {
  useEffect(()=>{
    if (Platform.OS=='android'){
      PermissionHelper.locationPermission();
    }
    if(Platform.OS=='android'){
      PermissionHelperIos.locationPermission();
    }
  },[])
  return (
    <SafeAreaProvider>
      <Provider store={store()}>
      <ErrorBoundary>
      <EmailProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </EmailProvider>
      </ErrorBoundary>
      </Provider> 
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
  
});

export default App;
