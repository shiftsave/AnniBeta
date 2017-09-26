import styled from "styled-components";
import { Above } from "./MediaTemplates";
import { Section } from "styled";

import { COPPER, EASE_OUT_EXPO } from "./Variables";

export const ProjectSection = Section.extend`
  max-width: calc(100vw - 80px);
  justify-content: ${props => props.center ? "center" : "normal"};

  ${Above.sm`
    max-width: calc(100vw - 120px);
  `}

  ${Above.lg`
    max-width: calc(100vw - 300px);
  `}
`;

export const ProjectNav = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 80px;
  min-height: 100vh;
  padding-right: 24px;
  position: fixed;
  right: 0;
  top: 0;

  > div {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  ${Above.sm`
    padding-right: 48px;
    width: 120px;
  `}

  ${Above.lg`
    width: 300px;
  `}
`;

export const ProjectNavItem = styled.div`
  display: flex;
  padding: 6px;
  justify-content: flex-end;

  h2 {
    display: none;

    ${Above.lg`
      display: inline-block;
      margin-right: 16px;
    `}
  }
`;

export const ProjectNavId = styled.div`
  background: ${props => props.checked ? `${COPPER}` : "transparent"};
  border: 2px solid ${COPPER};
  border-radius: 10px;
  height: 8px;
  padding: 0;
  transition: 200ms ${EASE_OUT_EXPO};
  width: 8px;
`;
