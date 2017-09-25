import styled from "styled-components";
import { EASE_OUT_BACK } from "./Variables";
// import { Icons } from "components/Icons";
//
// export const Image = styled(Icons)`
//   fill: ${CHARCOAL};
//   stroke: transparent;
//   stroke-width: ${props => props.strokeWidth ? `${props.strokeWidth}px` : "2px"} ;
// `;
//
// export const OutlineIcon = styled(Icons)`
//   fill: none;
//   stroke: ${CHARCOAL};
//   stroke-width: ${props => props.strokeWidth ? `${props.strokeWidth}px` : "2px"} ;
// `;
//

export const ImageControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  position: absolute;
  right: 8px;
  top: 12px;
  transition: 240ms ${EASE_OUT_BACK};
  overflow: hidden;
  z-index: 99;
`;
