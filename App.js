import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import { theme } from "./src/utils/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { RestuarantProvider } from "./src/api/restuarant/ResturantContext";
import { LocationContextProvider } from "./src/api/services/locationContext";
import { FavouriteContextProvider } from "./src/api/services/favouriteContext";
import Routes from "./src/route";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

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
      <FavouriteContextProvider>
        <LocationContextProvider>
          <RestuarantProvider>
            <Routes />
          </RestuarantProvider>
        </LocationContextProvider>
      </FavouriteContextProvider>
    </ThemeProvider>
  );
};

export default App;
