import { ImageBackground, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";

export const AccountContainer = styled.View`
  background-color: rgba(227, 219, 231, 0.4);
  padding: ${(props) => props.theme.space[4]};
  border-radius: 5px;
`;
// flex: 1;

export const AuthButton = styled(Button)`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const AuthInput = styled(TextInput)`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 5px;
  width: 250px;
`;

export const ErrorContainer = styled(TextInput)`
  padding: ${(props) => props.theme.space[2]};
  background-color: rgba(227, 219, 231, 0.5);
  max-width: 250px;
`;

export const Loading = styled(ActivityIndicator)`
  color: ${(props) => props.theme.colors.bg.primary};
`;
// margin-left: -25px;

// export const AnimationWrapper = styled.View`
//   width: 100%;
//   heigth: 50%;
//   position: absolutes;
//   top: 0;
//   padding: ${(props) => props.theme.space[2]};
//   flex: 1;
// `;

export const BackGroundImage = ({ children }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/orange-slices-full-frame.jpg",
      }}
      resizeMode="cover"
      style={styles.image}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
