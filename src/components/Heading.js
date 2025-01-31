import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Heading = (props) => {
  const { title, style2, showBackButton, onBackPress } = props;

  return (
    <View style={styles.headerContainer}>
      {/* Conditional rendering of the back button */}
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Image source={require('../icons/backarrow.png')}
          style={styles.image}/>
        </TouchableOpacity>
      )}

      <Text style={[styles.header, style2]}>
        {title || 'Add Heading'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%', // Make sure it takes full width
    paddingHorizontal: 10, // Optional, for some spacing
  },
  backButton: {
    position: 'absolute',
    left: 10, // Adjust based on your preference
    top: 10, // Top alignment
    zIndex: 10, // Ensure the back button is above text
  },
  image:{
    width: 25,
    height: 25,
    tintColor: 'white'
  },
  header: {
    fontSize: 40,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center', // Center the heading text
    marginLeft: 0, // Remove any margin
  },
});

export default Heading;
