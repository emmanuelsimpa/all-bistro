import React, { useContext } from "react";

import { FavouritesContext } from "../../../api/services/favouriteContext";

import { SafeArea } from "../../../utils/safeView.Js";
import { Text } from "../../../component/typography/Text";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../component/spacer/Space";
import { ResturantsCard } from "../../resturant/component/Resturants";
import { ResturantList } from "../../resturant/component/styles";

const NoFavouritesArea = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export function FavouriteScreen({ navigation }) {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <ResturantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("restaurantDetails", { restuarant: item })
              }
            >
              <Spacer variant="bottom.large">
                <ResturantsCard restuarant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  ) : (
    <SafeArea>
      <NoFavouritesArea>
        <Text center>Ooops!!! No Favourites Yet</Text>
      </NoFavouritesArea>
    </SafeArea>
  );
}
