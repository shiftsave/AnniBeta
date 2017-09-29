import styled from "styled-components";
import { Above } from "./MediaTemplates";

export const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: row dense;
  grid-auto-rows: 320px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;

  .long {
    ${Above.md`
      grid-column-end: span 2;
    `}
  }

  .tall {
    ${Above.md`
      grid-row-end: span 2;
    `}
  }

  .full {
    ${Above.md`
      grid-column-end: span 2;
      grid-row-end: span 2;
    `}
  }
`;
