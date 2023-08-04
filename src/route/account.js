import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { AccountScreen } from "../features/account/screens/accountScreen";

const Stack = createStackNavigator();

export function AccountNavigation() {
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen
      name="Login"
      component={() => (
        <View>
          <Text>Login Page</Text>
        </View>
      )}
    />
  </Stack.Navigator>;
}
