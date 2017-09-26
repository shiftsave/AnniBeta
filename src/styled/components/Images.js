import styled from "styled-components";
import { CONCRETE, CHARCOAL, PAPER, PEBBLE, EASE_OUT_BACK } from "./Variables";

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
`;

export const ImageControls = styled.div`
  align-items: center;
  background: white;
  border-radius: 99px;
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

export const ImageControlsButton = styled.div`
  align-items: center;
  display: inline-block;
  height: 16px;
  margin: 0 12px 6px 16px;
  position: relative;
  width: 16px;

  div {
    border: 2px solid ${CONCRETE};
    left: 0;
    position: absolute;
    top: 0;

    &:hover {
      background: ${PAPER};
      border-color: ${CHARCOAL};
      z-index: 2;
    }
  }

  .base {
    width: 8px;
    height: 8px;
    border-color: ${CHARCOAL};
  }

  .long {
    width: 16px;
    height: 8px;
  }

  .tall {
    width: 8px;
    height: 16px;
  }

  .full {
    width: 16px;
    height: 16px;
  }

  .active {
    background: ${PAPER};
    border: 2px solid ${CONCRETE};
  }

  &.hasSize {
    &::after {
      position: absolute;
      border: 2px solid ${CHARCOAL};
      background: ${PAPER};
      width: 8px;
      height: 8px;
      display: block;
      content: '';
      z-index: 2;
    }

    &.long::after {
      width: 16px;
    }

    &.tall::after {
      height: 16px;
    }

    &.full::after {
      width: 16px;
      height: 16px;
    }
  }

  &:hover::after {
    display: none;
  }
  }
`
