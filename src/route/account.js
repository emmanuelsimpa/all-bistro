import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { AccountScreen } from "../features/account/screens/accountScreen";
import { LoginScreen } from "../features/account/screens/loginScreen";
import { RegisterScreen } from "../features/account/screens/registerScreen";

const Stack = createStackNavigator();

export function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
