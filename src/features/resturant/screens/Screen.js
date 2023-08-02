import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { FlatList, Pressable, TouchableOpacity, View } from "react-native";
import { ResturantsCard } from "../component/Resturants";
import styled from "styled-components/native";
import { Spacer } from "../../../component/spacer/Space";
import { SafeArea } from "../../../utils/safeView.Js";
import { RestuarantContext } from "../../../api/restuarant/ResturantContext";
import Search from "../component/Search";
import { FavouritesContext } from "../../../api/services/favouriteContext";
import { FavouriteBar } from "../../../component/Favourite/FavouriteBar";

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
  color: ${(props) => props.theme.colors.bg.primary};
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
`;

export const ResturantScreen = ({ navigation }) => {
  const { restuarants, isLoading, error } = useContext(RestuarantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={60} animating={true} />
        </LoadingContainer>
      )}
      <Search
        onFavouriteToggle={() => setIsToggled(!isToggled)}
        isFavouriteToggled={isToggled}
      />
      {isToggled && (
        <FavouriteBar favourites={favourites} navigation={navigation} />
      )}
      <ResturantList
        data={restuarants}
        // data={restuarantContext.restuarant}
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
  );
};
