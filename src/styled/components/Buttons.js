import styled from "styled-components";
import { BaseButton } from "components/Button";
import { Utils } from "./Utils";

import { CHARCOAL, COPPER, EASE_OUT_EXPO, EASE_OUT_BACK } from "./Variables";

export const ButtonGroup = styled.div`
  ${Utils.margin};
`;

export const Button = styled(BaseButton)`
  align-items: center;
  background: none;
  border: ${props => props.noBorder ? "none" : `2px solid ${COPPER}`};
  border-radius: 80px;
  color: ${CHARCOAL};
  cursor: pointer;
  display: inline-flex;
  font-family: 'Apercu Bold', sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  line-height: 1;
  outline: none;
  padding: 12px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 400ms ${EASE_OUT_EXPO};
  z-index: 2;

  svg {
    fill: ${props => props.iconStroke ? "transparent" : `${CHARCOAL}`};
    height: ${props => props.iconSize ? `${props.iconSize}px` : "18px"};
    stroke: ${props => props.iconStroke ? `${CHARCOAL}` : "transparent"};
    stroke-width: ${props => props.iconStroke ? `${props.iconStroke}px` : "0"};
    transition: 400ms ${EASE_OUT_EXPO};
    transition: transform 400ms ${EASE_OUT_BACK};
    width: ${props => props.iconSize ? `${props.iconSize}px` : "18px"};
  }

  > #logo {
    fill: none;
    height: 50px;
    stroke: ${COPPER};
    padding: 0;
    stroke-width: 1;
    width: 50px;

    > :nth-child(4){
      fill: ${COPPER};
      stroke: none;
    }

    > :nth-child(5){
      fill: ${COPPER};
      stroke: none;
    }
  }



  :hover {
    transform: scale(1.025);

    svg {
      fill: ${props => props.iconStroke ? "transparent" : `${COPPER}`};
      stroke: ${props => props.iconStroke ? `${COPPER}` : "transparent"};
      transform: scale(1.2);
    }
  }
`;
