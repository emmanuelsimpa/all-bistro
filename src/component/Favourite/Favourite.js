import React, { useContext } from "react";
import { FavouritesContext } from "../../api/services/favouriteContext";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-radius: 50px;
  border-color: #20232a;
  position: absolute;
  top: 30px;
  right: 20px;
  z-index: 1;
`;
//   width: 40px;

export function Favourite({ resturant }) {
  const { favourites, addFavorite, removeFavorite } =
    useContext(FavouritesContext);

  const isFavorite = favourites.find((r) => r.id === resturant.id);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavorite ? addFavorite(resturant) : removeFavorite(resturant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavouriteButton>
  );
}
