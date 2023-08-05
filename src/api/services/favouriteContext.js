import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../auth/auth.context";

export const FavouritesContext = createContext();

export function FavouriteContextProvider({ children }) {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  const saveFavourite = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourite-${uid}`, jsonValue);
    } catch (e) {
      console.log("Error Saving", e);
    }
  };

  const getFavourite = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourite-${uid}`);
      if (jsonValue !== null) {
        return setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("Error getting", e);
    }
  };

  useEffect(() => {
    if (user) {
      getFavourite(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavourite(favourites, user.uid);
    }
  }, [favourites, user]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter((x) => x.id !== restaurant.id);
    setFavourites(newFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavorite: add, removeFavorite: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
