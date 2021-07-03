import { StatusBar } from "expo-status-bar";
import React from "react";
import { Easing, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen.js";
import RegisterScreen from "./Screens/RegisterScreen.js";
import RecoverScreen from "./Screens/RecoverScreen.js";

import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import { TabNav } from "./Screens/MainScreen.js";

const Stack = createStackNavigator();

const config = {
  animation: "timing",
  config: {
    duration: 300,
    easing: Easing.linear,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecoverScreen"
          component={RecoverScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="My Home"
          component={TabNav}
          options={{
            headerRight: () => {
              <TouchableOpacity>
                <IconMaterial name="plus-circle-outline" size={25} />
              </TouchableOpacity>;
            },
          }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
