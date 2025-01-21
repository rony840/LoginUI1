import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Footer = props => {
    const {title1,title2} = props;
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <Text style={styles.footerText}>{title1||"Footer"} </Text>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0)',
            },
            styles.wrapperCustom,
          ]}
        >
          <Text style={styles.signupText}>{title2||'Button Title'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center', // Centers the footer content horizontally
    justifyContent: 'center', // Centers the content vertically in the footer
    paddingVertical: 15, // Padding for vertical spacing
    marginBottom: 0, // Remove unnecessary margins
  },
  footerContent: {
    flexDirection: 'row', // Layout items horizontally (side by side)
    alignItems: 'center', // Vertically align items in the center
  },
  footerText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 500,
  },
  signupText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold', // Optional: Make the "Sign Up" text bold
  },
  wrapperCustom: {
    // Optional custom style for the Pressable component
    marginLeft: 5, // Optional: Adjust the space between "Don't have an account?" and "Sign Up"
  },
});

export default Footer;
