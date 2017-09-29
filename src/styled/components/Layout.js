import styled from "styled-components";
import { Above } from "./MediaTemplates";
import { PEBBLE } from "./Variables";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  padding: ${props => props.full ? "0" : "24px"};

  ${Above.sm`
    padding: ${props => props.full ? "0" : "48px"};
  `}

  ${Above.lg`
    padding: ${props => props.full ? "0" : "120px"};
  `}
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: ${props => props.center ? "center" : "normal"};
  max-width: ${props => props.project ? "calc(100vw - 40px)" : "100vw"};
  min-height: 100vh;

  ${Above.sm`
    max-width: ${props => props.project ? "calc(100vw - 60px)" : "100vw"};
  `}

  ${Above.lg`
    max-width: ${props => props.project ? "calc(100vw - 100px)" : "100vw"};
  `}
`;

export const Wrapper = styled.div`
  background: ${PEBBLE};
`;
