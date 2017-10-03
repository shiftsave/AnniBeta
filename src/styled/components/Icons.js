import styled from "styled-components";
import { Icons } from "components/Icons";
import { CHARCOAL, COPPER } from "./Variables";
import { Utils } from "./Utils";


export const SolidIcon = styled(Icons)`
  fill: ${props => props.color ? `${COPPER}` : `${CHARCOAL}`};
  stroke: transparent;
  stroke-width: ${props => props.strokeWidth ? `${props.strokeWidth}px` : "2px"} ;
  ${Utils.margin};
`;

export const OutlineIcon = styled(Icons)`
  fill: none;
  stroke: ${props => props.color ? `${COPPER}` : `${CHARCOAL}`};
  stroke-width: ${props => props.strokeWidth ? `${props.strokeWidth}px` : "2px"} ;
  ${Utils.margin};
`;
