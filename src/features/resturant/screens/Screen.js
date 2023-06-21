import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { ResturantsCard } from "../component/Resturants";
import styled from "styled-components/native";
import { Spacer } from "../../../component/spacer/Space";
import { SafeArea } from "../../../utils/safeView.Js";
import { RestuarantContext } from "../../../api/restuarant/ResturantContext";

const SearchWrapper = styled.View`
  flex-grow: 0;
  padding: ${(props) => props.theme.space[3]};
`;

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const ResturantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const { restuarants, isLoading, error } = useContext(RestuarantContext);
  console.log("ln 27", restuarants, isLoading, error);

  return (
    <SafeArea>
      <SearchWrapper>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchWrapper>
      <ResturantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
        ]}
        // data={restuarantContext.restuarant}
        renderItem={() => (
          <Spacer variant="bottom.large">
            <ResturantsCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
