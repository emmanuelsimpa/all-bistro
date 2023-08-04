import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
import { useEffect, useState } from "react";
import { AuthenticationContextProvider } from "./src/api/auth/auth.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAGN1RrdbNByal0hTePkuK3vHTc5S1OW7o",
  authDomain: "all-bistro.firebaseapp.com",
  projectId: "all-bistro",
  storageBucket: "all-bistro.appspot.com",
  messagingSenderId: "653871808954",
  appId: "1:653871808954:web:a8f42c9623e721fd9fdd83",
  measurementId: "G-7GGNWME6ZT",
  // databaseURL: "https://project-id.firebaseio.com",
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
      <AuthenticationContextProvider>
        <FavouriteContextProvider>
          <LocationContextProvider>
            <RestuarantProvider>
              <Routes />
            </RestuarantProvider>
          </LocationContextProvider>
        </FavouriteContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
};

export default App;
