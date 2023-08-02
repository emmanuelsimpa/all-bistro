import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export function FavouriteContextProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const saveFavourite = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourite", jsonValue);
    } catch (e) {
      console.log("Error Saving", e);
    }
  };

  const getFavourite = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favourite");
      if (jsonValue !== null) {
        return setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("Error getting", e);
    }
  };

  useEffect(() => {
    getFavourite();
  }, []);

  useEffect(() => {
    saveFavourite(favourites);
  }, [favourites]);

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
