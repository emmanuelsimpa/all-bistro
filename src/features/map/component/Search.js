import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../api/services/locationContext";

const SearchWrapper = styled.View`
  flex-grow: 0;
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export default function Search() {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);
  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <SearchWrapper>
      <Searchbar
        placeholder="Search"
        icon="map"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
      />
    </SearchWrapper>
  );
}
