import { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import CommunityScreen from './screens/CommunityScreen';
import ProfileScreen from './screens/ProfileScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';
import ManageHabit from './screens/ManageHabit';

import { GlobalStyles } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import HabitsContextProvider from './store/habits-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary400 },
        headerTintColor: GlobalStyles.colors.primary50,
        contentStyle: { backgroundColor: GlobalStyles.colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function BottomTabsNav() {
  return <BottomTabs.Navigator screenOptions={{
    headerShown: false,
    contentStyle: { backgroundColor: GlobalStyles.colors.primary800 },
    tabBarInactiveTintColor: GlobalStyles.colors.gray50,
    tabBarActiveTintColor: GlobalStyles.colors.primary500,
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

function AuthenticatedStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: GlobalStyles.colors.primary800 } 
    }}>
      <Stack.Screen name="BottomTabsNav" component={BottomTabsNav} />
      <Stack.Screen name="ActivitiesScreen" component={ActivitiesScreen} options={{ presentation: 'modal' }} />
      <Stack.Screen name="ManageHabit" component={ManageHabit} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {

  return (
    <>
      <StatusBar style='light' backgroundColor='#d5c8c837' />
      <AuthContextProvider>
        <HabitsContextProvider>
          <Root />
        </HabitsContextProvider>
      </AuthContextProvider>
    </>
  );
}