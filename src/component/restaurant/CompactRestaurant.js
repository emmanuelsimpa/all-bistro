import React from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";
import { Text } from "../typography/Text";
import { Spacer } from "../spacer/Space";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 200px;
  height: 120px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 200px;
  height: 120px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 200px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export function CompactRestaurant({ restaurant, isMap }) {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image
        source={{
          uri: restaurant.image,
        }}
      />
      <Spacer variant="top.large">
        <Text variant="caption">{restaurant.name}</Text>
      </Spacer>
    </Item>
  );
}
