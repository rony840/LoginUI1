import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { FormButton,Heading, Footer, FormField } from '../components/Components';
import Background from '../components/Background'; // Import the Background component
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // Import SafeArea context for dynamic insets
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const insets = useSafeAreaInsets(); // Get safe area insets (top, bottom, left, right)
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      {/* Background Component */}
      <Background style2={{ flex: 5 }} />

      <View style={[styles.contentContainer, { paddingTop: insets.top }]}>
        {/* Header with Logo and Heading */}
        <View style={styles.header}>
          <Heading 
          title={'Sign Up'} 
          style2={{ color: 'white' }} 
          showBackButton={true}
          onBackPress={() => navigation.replace('Login')}/>
        </View>

        {/* Form Fields and Button */}
        <View style={styles.formContainer}>
          <FormField title={'First Name'} placeholder={'John'} />
          <FormField title={'Last Name'} placeholder={'Doe'} />
          <FormField title={'Email'} placeholder={'johndoe@example.com'} />
          <FormField title={'Password'} placeholder={'* * * * * * *'} />
          <FormField title={'Confirm Password'} placeholder={'* * * * * * *'} />
          <FormButton title={'Sign Up'} />
        </View>

        {/* Footer */}
        <Footer title1={"Already have an account?"} title2={"SignIn"} onPress={() => navigation.replace('Login')}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Make sure it's transparent to see the background
  },
  contentContainer: {
    position: 'absolute', // Position content above the background
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between', // Ensures footer is at the bottom
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  header: {
    marginTop: "5%", // Adjust for better spacing on both Android and iOS
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50, // Adjust for spacing between header and form
  },
  formContainer: {
    flex: 1,
    top: 0,
    marginTop: '10%',
    justifyContent: 'center',
  },
});

export default Signup;
