import styled from "styled-components";
import { EASE_OUT_BACK } from "./Variables";

export const ImageControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  position: absolute;
  right: 8px;
  top: 12px;
  transition: 240ms ${EASE_OUT_BACK};
  overflow: hidden;
  z-index: 99;
`;

export const Image = styled.img`
  height: auto;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
`;
