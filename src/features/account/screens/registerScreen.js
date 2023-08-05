import React, { useContext, useState } from "react";
import {
  AccountContainer,
  AuthButton,
  BackGroundImage,
  AuthInput,
  ErrorContainer,
  Loading,
} from "../component/bgImage";
import { Spacer } from "../../../component/spacer/Space";
import { AuthenticationContext } from "../../../api/auth/auth.context";
import { Text } from "../../../component/typography/Text";

export function RegisterScreen({ navigation }) {
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  const [data, setData] = useState({ email: null, password: null });
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (data.password !== null) {
      return setShow(!show);
    }
  };
  return (
    <BackGroundImage>
      <AccountContainer>
        <AuthInput
          label="Email"
          autoCapitalize="none"
          value={data.email}
          onChangeText={(text) =>
            setData({ email: text, password: data.password })
          }
        />
        <Spacer variant="top.medium">
          <AuthInput
            label="Password"
            autoCapitalize="none"
            value={data.password}
            onChangeText={(text) =>
              setData({ password: text, email: data.email })
            }
            secureTextEntry={show ? false : true}
            right={
              <AuthInput.Icon
                icon={show ? "eye" : "eye-off"}
                onPress={handleShow}
                style={{ paddingTop: 20 }}
              />
            }
          />
        </Spacer>
        {error && (
          <Spacer variant="top.medium">
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer variant="top.large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onRegister(data.email, data.password)}
            >
              Register
            </AuthButton>
          ) : (
            <Loading animating={true} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer variant="top.large">
        <AuthButton
          icon="chevron-left"
          mode="contained"
          onPress={() => navigation.navigate("Main")}
        >
          BACK
        </AuthButton>
      </Spacer>
    </BackGroundImage>
  );
}
