import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Heading } from '../components/Components';
import Background from '../components/Background'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 
import { useEmail } from '../store/context/EmailContext';

const Profile = () => {

  
  const { email } = useEmail();
  
  return (
    <SafeAreaView style={styles.container}>
      <Background style2={{ flex: 5 }} />

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Heading title={`Welcome ${email || 'Guest'}`} style2={{ color: 'white' }} />
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

export default Profile;
