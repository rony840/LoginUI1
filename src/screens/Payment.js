import { StyleSheet, SafeAreaView, View, SectionList, Text} from 'react-native';
import { Heading, PaymentItem } from '../components/Components';
import Background from '../components/Background'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 
import { paymentData } from '../store/PaymentData';

const Payment = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <Background style2={{ flex: 5 }} />

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Heading title={`Payment`} style2={{ color: 'white' }} />
        </View>
        {/* SectionList to render the grouped payment items */}
        <SectionList
          sections={paymentData} // Sections data
          keyExtractor={(item) => item.id} // Unique key for each item
          renderItem={({ item }) => (
            <PaymentItem title={item.title} amount={item.amount} date={item.date} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{title}</Text>
            </View>
          )}
          contentContainerStyle={styles.sectionListContainer}
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
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  header: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:"30%",
  },
  sectionHeader: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionListContainer: {
    paddingBottom: 20,
  },
});

export default Payment;
