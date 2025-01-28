import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login,Signup,Welcome} from '../screens/Screens';

const RootStack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: Login,
      options: { headerShown: false }  // Disable header for Loading screen
    },
    Signup: {
      screen: Signup,
      options: { headerShown: false }  // Disable header for Landing screen
    },
    Welcome: {
      screen: Welcome,
      options: { headerShown: false }  // Disable header for Landing screen
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

const AppNavigation = () => {
  return <Navigation />;
};

export default AppNavigation;
