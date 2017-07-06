import styled from "styled-components";
import { Link } from "react-router";

import { CHARCOAL, COPPER, INK, EASE_OUT_EXPO } from "./Variables";

export const Button = styled.button`
  align-items: center;
  background: none;
  border: 2px solid ${COPPER};
  border-radius: 80px;
  color: ${CHARCOAL};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  font-family: 'Apercu Bold', sans-serif;
  font-size: 14px;
  letter-spacing: .5px;
  line-height: 1;
  outline: none;
  padding: 10px 11px;
  transition: 400ms ${EASE_OUT_EXPO};

  svg {
    fill: none;
    stroke: ${INK};
    stroke-width: 5px;
  }

  :hover {
    transform: scale(1.05);
  }
`;

export const Hyperlink = Button.withComponent("a");
export const ButtonLink = Button.withComponent(Link);
