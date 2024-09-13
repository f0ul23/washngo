// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./SplashView";
import Welcome from "./screens/Welcome";
import { useState } from 'react'
import SignUp from "./screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./screens/SignIn";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";


const Stack = createStackNavigator();


export default function App() {

  return (
    <>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={Welcome} options={{hearderShown: false, headerMode: "none"}}/>
      <Stack.Screen name='SignUp' component={SignUp} options={{hearderShown: false, headerMode: "none"}}/>
      <Stack.Screen name='SignIn' component={SignIn} options={{hearderShown: false, headerMode: "none"}}/>
      <Stack.Screen name='Home' component={Home} options={{hearderShown: false, headerMode: "none"}}/>
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
