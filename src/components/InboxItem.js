// components/InboxItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InboxItem = ({ title, sender, time }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sender}>{sender}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sender: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
});

export default InboxItem;
