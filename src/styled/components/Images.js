import styled from "styled-components";
import { CONCRETE, COPPER, CHARCOAL, PAPER, EASE_OUT_BACK } from "./Variables";

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
  height: 18px;
  margin: 0 12px 6px 16px;
  position: relative;
  width: 18px;

  div {
    border: 2px solid ${CONCRETE};
    left: 0;
    position: absolute;
    top: 0;

    &:hover {
      background: ${PAPER};
      border-color: ${COPPER};
      z-index: 2;
    }
  }

  .base {
    width: 8px;
    height: 8px;
    border-color: ${CHARCOAL};
  }

  .long {
    width: 18px;
    height: 8px;
  }

  .tall {
    width: 8px;
    height: 18px;
  }

  .full {
    width: 18px;
    height: 18px;
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
      width: 18px;
    }

    &.tall::after {
      height: 18px;
    }

    &.full::after {
      width: 18px;
      height: 18px;
    }
  }

  &:hover::after {
    display: none;
  }
  }
`
