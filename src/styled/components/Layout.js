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
  max-width: 100vw;
  min-height: 100vh;
`;

export const ProjectSection = Section.extend`
  max-width: calc(100vw - 80px);
  justify-content: ${props => props.center ? "center" : "normal"};

  ${Above.sm`
    max-width: calc(100vw - 120px);
  `}

  ${Above.lg`
    max-width: calc(100vw - 300px);
  `}
`

export const Wrapper = styled.div`
  background: ${PEBBLE};
`;
