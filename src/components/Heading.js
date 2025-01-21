import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
 // Import Ionicons (or any icon library you prefer)

const Heading = (props) => {
  const { title, style2, showBackButton, onBackPress } = props; // Adding `showBackButton` and `onBackPress` props
    
  return (
    <View style={styles.headerContainer}>
      {/* Conditional rendering of the back button */}
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Ionicons name="arrow-back" size={30} color="red" />
        </TouchableOpacity>
      )}

      <Text style={{ ...styles.header, ...style2 }}>
        {title || 'Add Heading'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 10, // Ensures the button is on top of the text
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    color: 'black',
    marginLeft: 40, // Make space for the back button
  },
});

export default Heading;
