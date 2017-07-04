import styled from "styled-components";
import { Above } from "./MediaTemplates";
import { CONCRETE, PAPER, PEBBLE, EASE_OUT_EXPO } from "./Variables";

export const Card = styled.div`
  background: ${PAPER};
  box-shadow: 0 2px 4px 0 ${PEBBLE};
  display: flex;
  flex-direction: column;
  height: auto;
  transition: 400ms ${EASE_OUT_EXPO};
  width: 100%;

  &:hover {
    box-shadow: 0 4px 24px 0 ${CONCRETE};
  }
`;

export const CardDetails = styled.div`
  height: auto;
  padding: 24px;
`;

export const Content = styled.div`
  height: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: row dense;
  grid-auto-rows: 320px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const Image = styled.img`
  height: auto;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
`;

export const Section = styled.div`
  background: ${PEBBLE};
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  height: calc(100vh - 80px);
  padding: 24px;
  max-width: 100vw;

  ${Above.sm`
    padding: 48px;
  `}

  ${Above.lg`
    padding: 120px;
  `}
`;

// .ProjectDetail
//   background: $pebble
//   display: flex
//   position: relative
//   width: 100vw
//
//   .ProjectSection
//     padding: pxToRem(100) 0 pxToRem(100) pxToRem(24)
//     min-height: 100vh
//
//     width: 100vw
//     max-width: calc(100vw - 80px)
//
//     +above($break-sm)
//       padding: pxToRem(120) 0 pxToRem(120) pxToRem(48)
//       max-width: calc(100vw - 120px)
//
//     +above($break-lg)
//       padding: pxToRem(160) 0 pxToRem(160) pxToRem(120)
//       max-width: calc(100vw - 300px)
//
//   .tempToggle
//     position: absolute
//     top: 24px
//     left: 48px
//     z-index: 99
//     transform: scale(.75)
