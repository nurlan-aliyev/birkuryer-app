import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "./Components/Styles.js";



function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
           if (route.name === "AppScreen") {
            iconName = focused ? "apps" : "apps-box";
          }
          return <IconMaterial name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <Tab.Screen name="AppScreen" component={AppScreen} />
    </Tab.Navigator>
  );
}

const MyTab = createMaterialTopTabNavigator();


const AppScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Main Screen</Text>
    </View>
  );
};

export { TabNav };
