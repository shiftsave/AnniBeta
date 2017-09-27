import styled from "styled-components";
import { BaseLoader } from "components/Loader";
import { COPPER } from "./Variables";

export const Loader = styled(BaseLoader)`
  svg {
    animation: rotate 1400ms linear infinite;
    display: inline-block;
    fill: none;
    stroke: ${COPPER};
    stroke-width: 6px;
  }

  &.center {
    text-align: center;
    width: 100%;
  }

  &.fullPage {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  .loaderPath {
    animation: dash 1400ms linear infinite;
  }
`;
