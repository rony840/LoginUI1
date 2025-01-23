// Inbox.js
import React from 'react';
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
import { Heading, InboxItem } from '../components/Components';
import Background from '../components/Background';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { inboxData } from '../InboxData';

const Inbox = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <Background style2={{ flex: 5 }} />

      <View style={[styles.contentContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Heading title="Inbox" style2={{ color: 'white' }} />
        </View>

        {/* FlatList to render the inbox items */}
        <FlatList
          data={inboxData}
          renderItem={({ item }) => (
            <InboxItem title={item.title} sender={item.sender} time={item.time} />
          )}
          keyExtractor={(item) => item.id}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContainer}
          // Optimization Props
          initialNumToRender={2} // Render the first 2 items initially
          maxToRenderPerBatch={1} // Render 3 items per batch during scrolling
          windowSize={1} // The number of items to keep in memory (before and after the visible area)
          removeClippedSubviews={true} // Remove items that are off-screen
        />
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
  flatList: {
    flex: 1,
  },

  flatListContainer: {
    paddingBottom: 10,
  },
  
});

export default Inbox;
