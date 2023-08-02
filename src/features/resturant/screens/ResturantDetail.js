import React, { useState } from "react";
import { SafeArea } from "../../../utils/safeView.Js";
import { ResturantsCard } from "../component/Resturants";
import { List } from "react-native-paper";
import { Spacer } from "../../../component/spacer/Space";
import { ScrollView } from "react-native";

export function ResturantDetail({ route }) {
  const { restuarant } = route.params;
  const [breakFastExpanded, setBreakFastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  // console.log({ restaurants: restuarant });

  return (
    <SafeArea>
      <ScrollView>
        <Spacer variant="bottom.large">
          <ResturantsCard restuarant={restuarant} />
        </Spacer>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakFastExpanded}
          onPress={() => setBreakFastExpanded(!breakFastExpanded)}
        >
          <List.Item title="Eggs and Bread" />
          <List.Item title="Pap and Akara" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Rice and Beans" />
          <List.Item title="Eggroll" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Egusi with any Swallow" />
          <List.Item title="Yam and Egg Sauce" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Fruit Juice" />
          <List.Item title="Fruit smoothie" />
          <List.Item title="Coffee" />
          <List.Item title="Soda" />
          <List.Item title="Wine" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
}
