// Inbox.js
import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import { Heading, InboxItem } from '../components/Components';
import Background from '../components/Background';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { inboxData } from '../InboxData'; // import data from InboxData.js

const Inbox = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <Background style2={{ flex: 5 }} />

      <View style={[styles.contentContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Heading title="Inbox" style2={{ color: 'white' }} />
        </View>

        {/* ScrollView to render the list using map() */}
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {inboxData.map(item => (
            <InboxItem
              key={item.id}
              title={item.title}
              sender={item.sender}
              time={item.time}
            />
          ))}
        </ScrollView>
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
    justifyContent: 'flex-start',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  header: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: "20%",
  },
  scrollViewContainer: {
    paddingBottom: 10,
  },
});

export default Inbox;
