import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { ResturantScreen } from "../features/resturant/screens/Screen";
import { ResturantDetail } from "../features/resturant/screens/ResturantDetail";

const RestuarantStack = createStackNavigator();
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

export function RestuarantNavigation() {
  return (
    <RestuarantStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestuarantStack.Screen
        name="index"
        component={ResturantScreen}
        options={{ headerShown: false }}
      />
      <RestuarantStack.Screen
        name="restaurantDetails"
        component={ResturantDetail}
        options={{
          headerShown: false,
          cardStyleInterpolator: forFade,
          presentation: "modal",
        }}
      />
    </RestuarantStack.Navigator>
  );
}
