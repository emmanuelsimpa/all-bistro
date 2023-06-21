import React from "react";
import styled from "styled-components/native";

const TopSmall = styled.View`
  margin-top: ${(props) => props.theme.space[1]};
`;
const TopMedium = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
`;
const TopLarge = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;
const BottomSmall = styled.View`
  margin-bottom: ${(props) => props.theme.space[1]};
`;
const BottomMedium = styled.View`
  margin-bottom: ${(props) => props.theme.space[2]};
`;
const BottomLarge = styled.View`
  margin-bottom: ${(props) => props.theme.space[3]};
`;
const LeftSmall = styled.View`
  margin-left: ${(props) => props.theme.space[1]};
`;
const LeftMedium = styled.View`
  margin-left: ${(props) => props.theme.space[2]};
`;
const LeftLarge = styled.View`
  margin-left: ${(props) => props.theme.space[3]};
`;
const RightSmall = styled.View`
  margin-right: ${(props) => props.theme.space[1]};
`;
const RightMedium = styled.View`
  margin-right: ${(props) => props.theme.space[2]};
`;
const RightLarge = styled.View`
  margin-right: ${(props) => props.theme.space[3]};
`;

export const Spacer = ({ variant, children }) => {
  switch (variant) {
    case "top.medium":
      return <TopMedium />;
    case "top.large":
      return <TopLarge />;
    case "bottom.small":
      return <BottomSmall>{children}</BottomSmall>;
    case "bottom.medium":
      return <BottomMedium>{children}</BottomMedium>;
    case "bottom.large":
      return <BottomLarge>{children}</BottomLarge>;
    case "left.small":
      return <LeftSmall>{children}</LeftSmall>;
    case "left.medium":
      return <LeftMedium>{children}</LeftMedium>;
    case "left.large":
      return <LeftLarge>{children}</LeftLarge>;
    case "right.small":
      return <RightSmall>{children}</RightSmall>;
    case "right.medium":
      return <RightMedium>{children}</RightMedium>;
    case "right.large":
      return <RightLarge>{children}</RightLarge>;
    default:
      return <TopSmall />;
  }
};
