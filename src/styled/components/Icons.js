import styled from "styled-components";
import { Icons } from "components/Icons";
import { CHARCOAL } from "./Variables";



export const SolidIcon = styled(Icons)`
  fill: ${CHARCOAL};
  stroke: transparent;
  stroke-width: ${props => props.strokeWidth ? `${props.strokeWidth}px` : "2px"} ;
`;

export const OutlineIcon = styled(Icons)`
  fill: none;
  stroke: ${CHARCOAL};
  stroke-width: ${props => props.strokeWidth ? `${props.strokeWidth}px` : "2px"} ;
`;

export const Logo = styled(Icons).attrs({
  name: "logo"
})`
  fill: none;
  stroke: #E2A480;
  stroke-width: 1;

  :nth-child(4){
    fill: #E2A480;
    stroke: none;
  }

  :nth-child(5){
    fill: #E2A480;
    stroke: none;
  }
`;
