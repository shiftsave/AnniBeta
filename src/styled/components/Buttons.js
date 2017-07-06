import styled from "styled-components";
import { Link } from "react-router";
import { Utils } from "./Utils";

import { CHARCOAL, COPPER, EASE_OUT_EXPO } from "./Variables";

export const ButtonGroup = styled.div`
  ${ Utils.margin };
`;

export const Button = styled.button.attrs({

  border: props => `${props.border}px` || `2px solid ${COPPER}`,

})`
  align-items: center;
  background: none;
  border: ${props => props.border};
  border-radius: 80px;
  color: ${CHARCOAL};
  cursor: pointer;
  display: inline-flex;
  font-family: 'Apercu Bold', sans-serif;
  font-size: 15px;
  letter-spacing: .5px;
  line-height: 1;
  outline: none;
  padding: 10px 11px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 400ms ${EASE_OUT_EXPO};
  z-index: 2;

  :hover {
    transform: scale(1.025);
  }
`;

export const Hyperlink = Button.withComponent("a");
export const ButtonLink = Button.withComponent(Link);
