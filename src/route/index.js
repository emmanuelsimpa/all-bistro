import React, { useContext } from "react";
import { AppNavigation } from "./app";
import { AuthenticationContext } from "../api/auth/auth.context";
import { AccountNavigation } from "./account";
import { NavigationContainer } from "@react-navigation/native";

function Routes() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigation />}
    </NavigationContainer>
  );
}

export default Routes;
