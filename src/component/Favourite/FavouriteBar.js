import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Spacer } from "../spacer/Space";
import { CompactRestaurant } from "../restaurant/CompactRestaurant";
import { Text } from "../typography/Text";

const FavouriteWrapper = styled.View`
  padding: 5px;
`;

export function FavouriteBar({ favourites, navigation }) {
  if (!favourites.length) {
    return;
  }
  return (
    <FavouriteWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourite</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((item) => (
          <Spacer variant="left.large" key={item.id}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("restaurantDetails", { restuarant: item })
              }
            >
              <CompactRestaurant restaurant={item} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouriteWrapper>
  );
}
