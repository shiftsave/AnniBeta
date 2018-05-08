import styled from "styled-components";
import _FeedbackItem from "components/FeedbackItem";
import { FLINT, PAPER, PEBBLE, SHADE, EASE_OUT_EXPO } from "./Variables";

export const FeedbackItem = styled(_FeedbackItem)`
  border-bottom: ${props => !props.contextual && `1px solid ${FLINT}`};
  box-shadow: ${props => props.contextual && `3px 3px 24px 0 ${SHADE}`};
  box-sizing: border-box;
  max-width: 400px;
  position: relative;
  width: auto;

  .container {
    background: ${PAPER};
    display: flex;
    padding: 16px;
  }

  .arrow {
    background: ${PAPER};
    height: 20px;
    position: absolute;
    transform: rotate(45deg);
    width: 20px;

    &.top {
      box-shadow: -1.5px -1.5px 4px 0 rgba(0, 0, 0, 0.04);
      left: calc(50% - 10px);
      top: -10px;
    }

    &.left {
      box-shadow: -1.5px -1.5px 4px 0 rgba(0, 0, 0, 0.04);
      left: -10px;
      top: 26px;
      transform: rotate(-45deg);
    }

    &.bottom {
      background: ${PEBBLE};
      box-shadow: -3px -3px 4px 0 rgba(0, 0, 0, 0.04);
      bottom: -10px;
      left: calc(50% - 10px);
      transform: rotate(224deg);
    }

    &.right {
      box-shadow: -1.5px -1.5px 4px 0 rgba(0, 0, 0, 0.06);
      right: -10px;
      top: 26px;
      transform: rotate(135deg);
    }
  }
`;

export const FeedbackSidebar = styled.div`
  background: ${PAPER};
  border-left: 1px solid ${FLINT};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 73px);
  position: fixed;
  top: 73px;
  transition: right 500ms ${EASE_OUT_EXPO};
  width: auto;
  z-index: 99;

  &.entered {
    right: 0;
  }

  &.entering,
  &.exiting {
    right: -400px;
  }
`;

export const FeedbackList = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
`;
