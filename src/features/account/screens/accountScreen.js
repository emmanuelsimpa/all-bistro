import React from "react";
import LottieView from "lottie-react-native";

import {
  AccountContainer,
  AnimationWrapper,
  AuthButton,
  BackGroundImage,
} from "../component/bgImage";
import { Spacer } from "../../../component/spacer/Space";

export function AccountScreen({ navigation }) {
  return (
    <BackGroundImage>
      {/* <AnimationWrapper> */}
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require("../../../../assets/lottieBistro.json")}
      />
      {/* </AnimationWrapper> */}
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          LOGIN
        </AuthButton>
        <Spacer variant="top.large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            REGISTER
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </BackGroundImage>
  );
}
