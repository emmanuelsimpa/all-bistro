import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ResturantScreen } from "../features/resturant/screens/Screen";
import { RestuarantNavigation } from "./resturantNav";
import { Mapscreen } from "../features/map/screens/screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restuarant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Restuarant"
          component={RestuarantNavigation}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Map"
          component={Mapscreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Settings" component={ResturantScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
