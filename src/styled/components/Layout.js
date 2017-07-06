import styled from "styled-components";
import { Above } from "./MediaTemplates";
import { CONCRETE, PAPER, FLINT, PEBBLE, EASE_OUT_BACK } from "./Variables";

export const Section = styled.div`
  background: ${PEBBLE};
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  height: calc(100vh - 80px);
  padding: 24px;
  max-width: 100vw;

  ${Above.sm`
    padding: 48px;
  `}

  ${Above.lg`
    padding: 120px;
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: row dense;
  grid-auto-rows: 320px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const Content = styled.div`
  height: 100%;
`;

export const CardControls = styled.div`
  align-items: center;
  display: flex;
  height: 0;
  justify-content: space-between;
  padding: 0 24px;
  transition: 240ms ${EASE_OUT_BACK};
  overflow: hidden;
`;

export const CardDetails = styled.div`
  height: auto;
  padding: 16px 24px;
`;

export const Card = styled.div`
  background: ${PAPER};
  box-shadow: 0 2px 24px 0 ${FLINT};
  display: flex;
  flex-direction: column;
  height: auto;
  transition: 320ms ${EASE_OUT_BACK};
  width: 100%;
  cursor: ${props => props.active ? "pointer" : "default"};


  &:hover {
    box-shadow: ${props => props.active ? `4px 12px 24px 0 ${CONCRETE}` : "none"};
    transform: scale(${props => props.active ? 1.016 : 1});

    ${CardControls} {
      height: auto;
      padding: 8px 24px 24px 24px;
    }
  }
`;

CardControls.displayName = "CardControls";

export const Image = styled.img`
  height: auto;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
`;
