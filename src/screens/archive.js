import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';
import { FormButton, Heading, FormField } from '../components/Components';
import Background from '../components/Background'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({ route }) => {
  const insets = useSafeAreaInsets();
  const { email } = route.params;

  const [message, setMessage] = useState('');
  const [multiMessages, setMultiMessages] = useState([]);
  const [allKeys, setAllKeys] = useState([]);

  useEffect(() => {
    getMessage();
    getAllStorageKeys();
  }, []);

  const storeMessage = async value => {
    try {
      await AsyncStorage.setItem('message', value);
      alert('Value added!');
    } catch (e) {
      alert(e);
    }
  };

  const getMessage = async () => {
    try {
      let value = await AsyncStorage.getItem('message');
      if (value) setMessage(value);
    } catch (e) {
      alert(e);
    }
  };

  const mergeMessage = async () => {
    try {
      const existingValue = await AsyncStorage.getItem('message');
      const newValue = { ...JSON.parse(existingValue || '{}'), newField: 'New Value' };
      await AsyncStorage.mergeItem('message', JSON.stringify(newValue));
      alert('Message merged successfully!');
    } catch (e) {
      alert(e);
    }
  };

  const removeMessage = async () => {
    try {
      await AsyncStorage.removeItem('message');
      alert('Message removed successfully!');
    } catch (e) {
      alert(e);
    }
  };

  const getAllStorageKeys = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      setAllKeys(keys);
    } catch (e) {
      alert(e);
    }
  };

  const multiSetItems = async () => {
    try {
      const items = [
        ['message1', 'Hello World!'],
        ['message2', 'How are you?'],
      ];
      await AsyncStorage.multiSet(items);
      alert('Multiple messages saved!');
    } catch (e) {
      alert(e);
    }
  };

  const multiGetItems = async () => {
    try {
      const keys = ['message','message1', 'message2'];
      const values = await AsyncStorage.multiGet(keys);
      setMultiMessages(values);
    } catch (e) {
      alert(e);
    }
  };

  const multiMergeItems = async () => {
    try {
      const items = [
        ['message1', JSON.stringify({ field: 'Updated' })],
        ['message2', JSON.stringify({ field: 'New Info' })],
      ];
      await AsyncStorage.multiMerge(items);
      alert('Multiple messages merged!');
    } catch (e) {
      alert(e);
    }
  };

  const multiRemoveItems = async () => {
    try {
      const keysToRemove = ['message1', 'message2'];
      await AsyncStorage.multiRemove(keysToRemove);
      alert('Multiple messages removed!');
    } catch (e) {
      alert(e);
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert('Storage cleared!');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <Background style2={{ flex: 5 }} />

      <View style={[styles.contentContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Heading title={`Welcome ${email}`} style2={{ color: 'white' }} />
        </View>
        <FormField
          title={'Message'}
          value1={message}
          placeholder={'Hello World!'}
          onChange={setMessage}
        />
        <ScrollView>
        <FormButton title={'Add message'} onPress={() => storeMessage(message)} />
        <FormButton title={'Merge message'} onPress={mergeMessage} />
        <FormButton title={'Remove message'} onPress={removeMessage} />
        <FormButton title={'Multi-set messages'} onPress={multiSetItems} />
        <FormButton title={'Multi-get messages'} onPress={multiGetItems} />
        <FormButton title={'Multi-merge messages'} onPress={multiMergeItems} />
        <FormButton title={'Multi-remove messages'} onPress={multiRemoveItems} />
        <FormButton title={'Clear storage'} onPress={clearStorage} />
        <FormButton title={'Get all keys'} onPress={getAllStorageKeys} />
        </ScrollView>
        {multiMessages.length > 0 && (
          <View>
            {multiMessages.map(([key, value], index) => (
              <View key={index}>
                <Text>{key}: {value}</Text>
              </View>
            ))}
          </View>
        )}
        <View>
          <Text>All Storage Keys: {JSON.stringify(allKeys)}</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  header: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  formContainer: {
    flex: 1,
    top: 0,
    marginTop: '10%',
    justifyContent: 'center',
  },
});

export default Welcome;
