import { ThemeProvider } from "styled-components/native";
import { ResturantScreen } from "./src/features/resturant/screens/Screen";
import { theme } from "./src/utils/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

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
      <ResturantScreen />
    </ThemeProvider>
  );
};

export default App;
