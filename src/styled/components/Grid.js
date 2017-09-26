import styled from "styled-components";
import { Above } from "./MediaTemplates";

export const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: row dense;
  grid-auto-rows: 320px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: ${props => props.project ? `calc(100% - 50px)` : "100%"};

  ${Above.sm`
    padding-right: ${props => props.project && "0"};
    width: ${props => props.project && "calc(100% - 80px)"};
  `}

  ${Above.lg`
    width: ${props => props.project && "calc(100% - 100px)"};
  `}
`;
