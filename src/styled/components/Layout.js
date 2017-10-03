import styled from "styled-components";
import { Above } from "./MediaTemplates";
import { PEBBLE } from "./Variables";

export const Container = styled.div`
  align-items: center;
  width: 100%;
  display: ${props => props.center ? 'flex' : 'auto'};
  display: ${props => props.stacked ? 'flex' : 'auto'};
  flex-direction: ${props => props.stacked && 'column'};
  justify-content: center;
`;

export const Content = styled.div`
  border: ${props => props.upload && `2px dashed black`};
  padding: 100px 0 24px 24px;
  padding: ${props => props.full && "0"};

  ${Above.sm`
    padding: 120px 0 48px 48px;
    padding: ${props => props.full && "0"};
  `}

  ${Above.lg`
    padding: 180px 0 120px 120px;
    padding: ${props => props.full && "0"};
  `}
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: ${props => props.center ? "center" : "normal"};
  max-width: ${props => props.project ? "calc(100vw - 80px)" : "100vw"};
  min-height: 100vh;

  ${Above.sm`
    max-width: ${props => props.project ? "calc(100vw - 120px)" : "100vw"};
  `}

  ${Above.lg`
    max-width: ${props => props.project ? "calc(100vw - 240px)" : "100vw"};
  `}
`;

export const Wrapper = styled.div`
  background: ${PEBBLE};
`;
