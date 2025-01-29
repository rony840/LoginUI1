import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Error from '../screens/Error';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Optionally log the error to an external service
    console.log('Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Conditionally render different error screens based on platform
      if (Platform.OS === 'ios') {
        return (
          <Error/>
        );
      } else if (Platform.OS === 'android') {
        return (
          <Error/>
        );
      }
    }

    return this.props.children; // Render children components if no error
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
});

export default ErrorBoundary;
