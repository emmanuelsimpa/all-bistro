import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Image, Text } from "react-native";
import SvgComponent from "../../../../assets/star";

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const RestautantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestautantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const RatingWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const RatingOpen = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const ResturantsCard = ({ resturant = {} }) => {
  const {
    name = "Some Restautant",
    icon = "",
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg",
    // photos = "https://picsum.photos/700",
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
        <Title>{name}</Title>
        <RatingWrapper>
          <Rating>
            {starArray.map((x, i) => (
              <SvgComponent key={i + 5} />
            ))}
          </Rating>
          <RatingOpen>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red", paddingRight: 12 }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            {isOpenNow && (
              <Image
                source={{
                  uri: "https://img.freepik.com/premium-vector/open-sign-board_689076-320.jpg",
                }}
                style={{ width: 28, height: 28 }}
              />
            )}
            <Image
              source={{
                uri: icon,
              }}
              style={{ width: 15, height: 15 }}
            />
          </RatingOpen>
        </RatingWrapper>
        <Address>{name}</Address>
      </Info>
    </RestautantCard>
  );
};
