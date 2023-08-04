import { ImageBackground, StyleSheet, View } from "react-native";

export const BackGroundImage = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/orange-slices-full-frame.jpg" }}
        resizeMode="cover"
        style={styles.image}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
