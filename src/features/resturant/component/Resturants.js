import React from "react";
import { Image } from "react-native";
import SvgComponent from "../../../../assets/star";
import { Text } from "../../../component/typography/Text";
import { Spacer } from "../../../component/spacer/Space";
import {
  Address,
  Icon,
  Info,
  Rating,
  RatingOpen,
  RatingWrapper,
  RestautantCard,
  RestautantCardCover,
} from "./styles";

export const ResturantsCard = ({ resturant = {} }) => {
  const {
    name = "Some Restautant",
    icon = "https://picsum.photos/200",
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg",
    address = "",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = resturant;

  const starArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestautantCard elevation={5}>
      <RestautantCardCover key={name} source={{ uri: photos }} />
      <Info>
        <Text>{name}</Text>
        <RatingWrapper>
          <Rating>
            {starArray.map((x, i) => (
              <SvgComponent key={i + 5} />
            ))}
          </Rating>
          <RatingOpen>
            {isClosedTemporarily && (
              <Spacer variant="right.medium">
                <Text variant="error">CLOSED TEMPORARILY</Text>
              </Spacer>
            )}
            {isOpenNow && (
              <Spacer variant="right.medium">
                <Image
                  source={{
                    uri: "https://img.freepik.com/premium-vector/open-sign-board_689076-320.jpg",
                  }}
                  style={{ width: 38, height: 28 }}
                />
              </Spacer>
            )}
            <Icon
              source={{
                uri: icon,
              }}
            />
          </RatingOpen>
        </RatingWrapper>
        <Address>{name}</Address>
      </Info>
    </RestautantCard>
  );
};
