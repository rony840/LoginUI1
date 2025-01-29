import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Logout, Login, Signup, Outstanding, Inbox, Profile, Privacy, Payment, Wallet, Pinned, Archived, Read} from '../screens/Screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';

// Stack Navigator for Login, Signup, and Welcome (Static Flow)
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} initialParams={{ userId: 786 }}/>
      <Stack.Screen name="LoggedIn"component={MyTabs}/>
    </Stack.Navigator>
  );
};

// Tab Navigator for Welcome and Main screens (Static Flow)
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="User"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#e91e63', // Active tab color
      tabBarInactiveTintColor: 'gray', // Inactive tab color
    }}>
      <Tab.Screen name="User" component={Drawer1} options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../icons/profile.png')} // Path to your icon
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'gray', // Change color based on focus
              }}
            />
          ),
        }}/>
      <Tab.Screen name="Messages" component={Drawer2} options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../icons/inbox.png')} // Path to your icon
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'gray', // Change color based on focus
              }}
            />
          ),
        }}/>
      <Tab.Screen name="Accounts" component={Drawer3} options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../icons/account.png')} // Path to your icon
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'gray', // Change color based on focus
              }}
            />
          ),
        }}/>
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

function Drawer1() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Privacy" component={Privacy} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

function Drawer2() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inbox" component={MyTopTabs} />
      <Drawer.Screen name="Pinned" component={Pinned} />
      <Drawer.Screen name="Archived" component={Archived} />
    </Drawer.Navigator>
  );
}

function Drawer3() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Wallet" component={Wallet} />
      <Drawer.Screen name="Outstanding" component={Outstanding} />
    </Drawer.Navigator>
  );
}

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <TopTab.Navigator initialRouteName="Unread"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#e91e63', // Active tab color
      tabBarInactiveTintColor: 'gray', // Inactive tab color
    }}>
      <TopTab.Screen name="Unread" component={Inbox} />
      <TopTab.Screen name="Read" component={Read} />
    </TopTab.Navigator>
  );
}


const AppNavigation = () => {
  return (
    
      <RootStack />
    
  );
};

export default AppNavigation;
