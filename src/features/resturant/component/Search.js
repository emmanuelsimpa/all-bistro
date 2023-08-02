import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../api/services/locationContext";

const SearchWrapper = styled.View`
  flex-grow: 0;
  padding: ${(props) => props.theme.space[3]};
`;

export default function Search({ onFavouriteToggle, isFavouriteToggled }) {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);
  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <SearchWrapper>
      <Searchbar
        icon={isFavouriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouriteToggle}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
      />
    </SearchWrapper>
  );
}
