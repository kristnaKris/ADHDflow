import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import CommunityScreen from './screens/CommunityScreen';
import ProfileScreen from './screens/ProfileScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabsNav() {
  return <BottomTabs.Navigator screenOptions={{
    headerShown: false,
    contentStyle: { backgroundColor: "#2C166A" },
    tabBarInactiveTintColor: "#929292",
    tabBarActiveTintColor: "#5101c8", //change later
  }}>
    <BottomTabs.Screen name="I dag" component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      }} />
    <BottomTabs.Screen name="Udforsk" component={ExploreScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="map-outline" size={size} color={color} />
        ),
      }} />
    <BottomTabs.Screen name="Fællesskab" component={CommunityScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="people-outline" size={size} color={color} />
        ),
      }} />
    <BottomTabs.Screen name="Profil" component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-circle-outline" size={size} color={color} />
        ),
      }} />
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#2C166A" }
        }}>
          <Stack.Screen name="BottomTabsNav" component={BottomTabsNav} />
          <Stack.Screen name="ActivitiesScreen" component={ActivitiesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}



