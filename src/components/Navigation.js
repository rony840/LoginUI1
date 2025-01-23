import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Signup, Outstanding, Inbox, Profile, Privacy, Payment, Wallet, Pinned, Archived, Read} from '../screens/Screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Stack Navigator for Login, Signup, and Welcome (Static Flow)
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Profile"component={MyTabs}/>
    </Stack.Navigator>
  );
};

// Tab Navigator for Welcome and Main screens (Static Flow)
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Profile1"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#e91e63', // Active tab color
      tabBarInactiveTintColor: 'gray', // Inactive tab color
    }}>
      <Tab.Screen name="Profile1" component={Drawer1}/>
      <Tab.Screen name="Inbox1" component={Drawer2}/>
      <Tab.Screen name="Payment1" component={Drawer3} />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

function Drawer1() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Privacy" component={Privacy} />
      <Drawer.Screen name="Logout" component={RootStack} />
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
