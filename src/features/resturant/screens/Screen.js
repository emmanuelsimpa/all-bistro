import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { Platform, StatusBar } from "react-native";
import { ResturantsCard } from "../component/Resturants";
import styled from "styled-components/native";

const SafeAreaViewForScreen = styled.SafeAreaView`
  flex-grow: 1;
  paddingtop: ${Platform.OS === "android" ? StatusBar.currentHeight : "0px"};
`;

const SearchWrapper = styled.View`
  flex-grow: 0;
  padding: ${(props) => props.theme.space[3]};
`;

const ResturantWrapper = styled.View`
  flex-grow: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const ResturantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  console.log("ln 27", searchQuery);

  return (
    <SafeAreaViewForScreen>
      <SearchWrapper>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchWrapper>
      <ResturantWrapper>
        {/* <Text>Try it again</Text> */}

        <ResturantsCard />
      </ResturantWrapper>
    </SafeAreaViewForScreen>
  );
};
