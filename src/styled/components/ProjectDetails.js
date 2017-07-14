import styled from "styled-components";
import { Above } from "./MediaTemplates";
import { Section } from "styled";

// import { CONCRETE, PAPER, FLINT, PEBBLE, EASE_OUT_BACK } from "./Variables";

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
  flex-grow: 1;
  justify-content: center;
  width: 80px;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;

  ${Above.sm`
    width: 120px;
  `}

  ${Above.lg`
    width: 300px;
  `}
`;

export const ProjectNavItem = styled.div`
`;


// .ProjectControls
//   center()
//   flex-grow: 1
//   height: 100vh
//   position: fixed
//   top: 0
//   right: pxToRem(24)
//
//   +above($break-sm)
//     right: pxToRem(48)
//
//   .content
//     display: flex
//     align-items: flex-end
//     flex-direction: column;
//
//   .Button
//     border-color: $copper
//     border-width: pxToRem(2)
//     border-radius: 1000
//     padding: pxToRem(2)
//     margin: pxToRem(4) pxToRem(2)
//
//     &:hover
//       transform-origin: center
//       transform: scale(1.2) translate3d(0,0,0);
//
//   .ProjectSectionNavItem
//     label
//       align-items: center
//       color: $concrete
//       cursor: pointer
//       display: inline-flex
//       transition: 400ms $expo
//       transform-origin: right
//       translate3d( 0, 0, 0)
//
//       h5
//         display: none
//         padding: 0
//
//       +above($break-lg)
//         h5
//           display: inline-block
//
//       &:hover
//         color: $charcoal
//         transform: scale(1.048)
//
//         .pip
//           transform: scale(1.15)
//
//     .pip
//       border: pxToRem(2) solid $copper
//       border-radius: $xl
//       height: pxToRem(12)
//       margin: $sm
//       transition: 200ms $expo
//       width: pxToRem(12)
//
//       &.checked
//         background: $copper
//
//
//     .checked
//       color: $charcoal
//
//     input
//       position: absolute
//       visibility: hidden
//
// .ProjectSectionNavItem-name
//   display none
//   font-weight 700
//
//   +above($break-lg)
//     display inline
