import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { FormButton, Logo, Heading, Footer, FormField } from '../components/Components';
import Background from '../components/Background'; // Import the Background component

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Component */}
      <Background />
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.contentContainer}>
        {/* Header with Logo and Heading */}
        <View style={styles.header}>
          <Heading title={'Login'} />
        </View>

        {/* Form Fields and Button */}
        <View style={styles.formContainer}>
          <FormField title={'Email'} placeholder={'johndoe@example.com'} />
          <FormField title={'Password'} placeholder={'* * * * * * *'} />
          <FormButton title={'Login'}/>
        </View>

        {/* Footer */}
        <Footer title1={"Don't have an account?"} title2={"SignUp"}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Make sure it's transparent to see the background
  },
  logoContainer:{
    position: 'absolute', // Position content above the background
    marginTop: '25%',
    alignSelf:'center'

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
    marginTop:"90%",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50, // Adjust for spacing between header and form
  },
  formContainer: {
    flex: 1,
    marginTop:'-5%',
    justifyContent: 'center',
  },
});

export default Login;

