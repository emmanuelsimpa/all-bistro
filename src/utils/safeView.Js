import React from "react";
import { Platform, StatusBar, SafeAreaView } from "react-native";

export const SafeArea = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
    </SafeAreaView>
  );
};
