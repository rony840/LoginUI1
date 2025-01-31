import { useEmail } from '../store/context/EmailContext';
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import { FormButton, Logo, Heading, Footer, FormField, Background } from '../components/Components';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { LoginSchemaValidator } from '../schemas/LoginSchema';

const Login = () => {
  const navigation = useNavigation();
  const {setEmail}= useEmail();
  
  const validate = (value) =>{
    const username = value.email.split('@')[0];
    setEmail(username);
    navigation.navigate('LoggedIn');
  }
  return (
    
    <SafeAreaView style={styles.container}>
      
      {/* Background Component */}
      <Background />
      
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.contentContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header with Logo and Heading */}
        <View style={styles.header}>
          <Heading title={'Login'} />
        </View>

        {/* Using Formik for form validation */}
        <Formik
        initialValues={{email:'',password:''}}
        validationSchema={LoginSchemaValidator}
        onSubmit={value => validate(value)}>

          {({handleChange,handleSubmit,values,errors}) => (
            
            <View style={styles.formContainer}>
            <FormField
            title={'Email'}
            placeholder={'johndoe@example.com'}
            onChange={handleChange('email')}
            error={errors.email}
            />
            <FormField
            title={'Password'}
            placeholder={'* * * * * * *'}
            onChange={handleChange('password')}
            error={errors.password}
            />
            <FormButton title={'Login'} onPress={handleSubmit}/>
          </View>
        )}
        </Formik>
        

        {/* Footer */}
        <Footer title1={"Don't have an account?"} title2={"SignUp"} onPress={() => navigation.navigate('Signup')}/>
      </ScrollView>
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
  scrollViewContent: {
    flexGrow: 1, // Makes the content scrollable
    justifyContent: 'space-between', // Ensures footer stays at the bottom
  },
});

export default Login;

