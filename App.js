import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ResturantScreen } from "./src/features/resturant/screens/Screen";
import { theme } from "./src/utils/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { RestuarantProvider } from "./src/api/restuarant/ResturantContext";

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

const App = () => {
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <RestuarantProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restuarant" component={ResturantScreen} />
            <Tab.Screen name="Map" component={ResturantScreen} />
            <Tab.Screen name="Settings" component={ResturantScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </RestuarantProvider>
    </ThemeProvider>
  );
};

export default App;
