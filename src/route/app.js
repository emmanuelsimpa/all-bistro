import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestuarantNavigation } from "./resturantNav";
import { Mapscreen } from "../features/map/screens/screen";
import { SettingsNavigation } from "./settingsNav";

import { FavouriteContextProvider } from "../api/services/favouriteContext";
import { LocationContextProvider } from "../api/services/locationContext";
import { RestuarantProvider } from "../api/restuarant/ResturantContext";

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
    <FavouriteContextProvider>
      <LocationContextProvider>
        <RestuarantProvider>
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
            <Tab.Screen
              name="Settings"
              component={SettingsNavigation}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </RestuarantProvider>
      </LocationContextProvider>
    </FavouriteContextProvider>
  );
}
