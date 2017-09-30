import styled from "styled-components";
import { Above } from "./MediaTemplates";
import { PEBBLE } from "./Variables";

export const Container = styled.div`
  align-items: center;
  width: 100%;
  display: ${props => props.center ? 'flex' : 'auto'};
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  border: ${props => props.upload && `2px dashed black`};
  padding: ${props => props.full ? "0" : "10px"};
  padding: ${props => props.project && "16px 0 16px 16px"};

  ${Above.sm`
    padding: ${props => props.full ? "0" : "48px"};
    padding: ${props => props.project && "48px 0 48px 48px"};
  `}

  ${Above.lg`
    padding: ${props => props.full ? "0" : "120px"};
    padding: ${props => props.project && "100px 0 120px 120px"};
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
  margin-top: 80px;
`;
