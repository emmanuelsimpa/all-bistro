import React, { useContext } from "react";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { SafeArea } from "../../../utils/safeView.Js";
import Search from "../component/Search";
import { LocationContext } from "../../../api/services/locationContext";
import { RestuarantContext } from "../../../api/restuarant/ResturantContext";
import { MapCallout } from "../component/Callout";

export function Mapscreen({ navigation }) {
  const { location } = useContext(LocationContext);
  const { restuarants } = useContext(RestuarantContext);
  const { geometry } = location;
  return (
    <SafeArea>
      <View style={styles.container}>
        <Search />
        <MapView
          region={{
            latitude: geometry.lat,
            longitude: geometry.lng,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          style={styles.map}
        >
          {restuarants.map((marker) => {
            return (
              <Marker
                key={marker.id}
                title={marker.name}
                coordinate={{
                  latitude: marker.geometry.lat,
                  longitude: marker.geometry.lng,
                }}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate("restaurantDetails", {
                      restuarant: marker,
                    })
                  }
                >
                  <MapCallout restaurant={marker} />
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
