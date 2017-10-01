import styled from "styled-components";
import { PAPER } from "./Variables";
export const Viewer = styled.div`
  background: rgba(255,255,255,0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 3;
`;

export const ViewerContainer = styled.div`
  display: inline-flex;
  height: calc(100% - 40vh);
  flex-direction: column;
  position: relative;
  width: auto;
  max-width: calc(100% - 96px);

  img {
    height: 100%;
    object-fit: contain;
    width: auto;
  }
`;

export const Toolbar = styled.div`
  align-items: center;
  bottom: 0;
  background: ${PAPER};
  display: flex;
  left: 0;
  position: absolute;
  padding: 16px;
  width: 100%;

  &:nth-child(1) {
    flex-grow: 1;
  }
`


export const Controls = styled.div`
  > div {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    position: absolute;
  }
`;

export const PreviousImage = styled.div`
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
`;

export const NextImage = styled.div`
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`;

export const CloseViewer = styled.div`
  left: 50%;
  position: absolute;
  top: 24px;
  transform: translateX(-50%);
`;


export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`;
