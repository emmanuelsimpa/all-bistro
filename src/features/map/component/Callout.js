import React from "react";
import { CompactRestaurant } from "../../../component/restaurant/CompactRestaurant";

export function MapCallout({ restaurant }) {
  return <CompactRestaurant isMap restaurant={restaurant} />;
}
