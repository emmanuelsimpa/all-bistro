import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Settingsscreen } from "../features/settings/screens/screen";
import { FavouriteScreen } from "../features/settings/screens/favouriteScreen";
import { CameraScreen } from "../features/settings/screens/cameraScreen";

const SettingsStack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    transform: [
      {
        translateY: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
          extrapolate: "clamp",
        }),
      },
    ],
    // opacity: current.progress,
  },
});

export function SettingsNavigation() {
  return (
    <SettingsStack.Navigator
    //   screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <SettingsStack.Screen
        name="Setting"
        component={Settingsscreen}
        options={{
          headerShown: false,
          //   cardStyleInterpolator: forFade,
          //   presentation: "modal",
        }}
      />
      <SettingsStack.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          headerShown: true,
        }}
      />
      <SettingsStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerShown: true,
        }}
      />
    </SettingsStack.Navigator>
  );
}
