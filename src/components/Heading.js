import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Heading = (props) => {
  const { title, style2, showBackButton, onBackPress } = props;

  return (
    <View style={styles.headerContainer}>
      {/* Conditional rendering of the back button */}
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <FontAwesome name="arrow-left" size={30} color="white" />
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
  header: {
    fontSize: 40,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center', // Center the heading text
    marginLeft: 0, // Remove any margin
  },
});

export default Heading;
