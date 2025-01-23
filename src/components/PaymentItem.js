// components/PaymentItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentItem = ({ title, amount, date }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>Amount: {amount}</Text>
      <Text style={styles.date}>Date: {date}</Text>
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
  amount: {
    fontSize: 16,
    color: '#4CAF50', // Green color for payment amount
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
});

export default PaymentItem;
