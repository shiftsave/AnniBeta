import styled from "styled-components";
import { Above } from "./MediaTemplates";
import { CONCRETE, PAPER, PEBBLE, EASE_OUT_BACK } from "./Variables";

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

export const Card = styled.div`
  background: ${PAPER};
  box-shadow: 0 2px 4px 0 ${PEBBLE};
  display: flex;
  flex-direction: column;
  height: auto;
  transition: 400ms ${EASE_OUT_BACK};
  width: 100%;
  cursor: ${props => props.onClick ? "pointer" : "default"};

  &:hover {
    box-shadow: ${props => props.onClick ? `4px 12px 24px 0 ${CONCRETE}` : "none"};
    transform: scale(${props => props.onClick ? 1.02 : 1});
  }
`;

export const CardDetails = styled.div`
  height: auto;
  padding: 24px;
`;

export const Image = styled.img`
  height: auto;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
`;
