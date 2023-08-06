import React, { useContext, useEffect, useState } from "react";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";

import { AuthenticationContext } from "../../../api/auth/auth.context";

import { SafeArea } from "../../../utils/safeView.Js";
import { Spacer } from "../../../component/spacer/Space";
import { Text } from "../../../component/typography/Text";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  align-items: center;
`;

export function Settingsscreen({ navigation }) {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async () => {
    const photouri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photouri);
  };

  useFocusEffect(() => {
    getProfilePicture();
  });

  useEffect(() => {
    getProfilePicture();
  }, [user]);

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
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
