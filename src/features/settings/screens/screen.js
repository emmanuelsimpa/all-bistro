import React, { useContext } from "react";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";

import { AuthenticationContext } from "../../../api/auth/auth.context";

import { SafeArea } from "../../../utils/safeView.Js";
import { Spacer } from "../../../component/spacer/Space";
import { Text } from "../../../component/typography/Text";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  align-items: center;
`;

export function Settingsscreen({ navigation }) {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer variant="top.large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        ></SettingsItem>
        <SettingsItem
          title="Logout"
          description="Logout your account"
          left={(props) => (
            <List.Icon {...props} color="black" icon="lock-outline" />
          )}
          onPress={() => onLogout()}
        ></SettingsItem>
      </List.Section>
    </SafeArea>
  );
}
