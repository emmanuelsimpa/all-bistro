import React, { useContext } from "react";
import styled from "styled-components/native";

import { FavouritesContext } from "../../../api/services/favouriteContext";

import { SafeArea } from "../../../utils/safeView.Js";
import { Text } from "../../../component/typography/Text";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export function FavouriteScreen() {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea></SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No Favourites Yet</Text>
    </NoFavouritesArea>
  );
}
