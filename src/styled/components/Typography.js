import styled, { injectGlobal } from "styled-components";
import { Above } from "./MediaTemplates";
import { Utils } from "./Utils";

/*
 * Font Definitions
 */

import ApercuRegular from "fonts/ApercuTrial-Regular.ttf";
import ApercuMedium from "fonts/ApercuTrial-Medium.ttf";
import ApercuBold from "fonts/ApercuTrial-Bold.ttf";

export const GlobalStyles = injectGlobal`
  @font-face {
    font-family: 'Apercu';
    src: url(${ApercuRegular});
    weight: normal;
  }
  @font-face {
    font-family: 'Apercu Medium';
    src: url(${ApercuMedium});
    weight: 600;
  }
  @font-face {
    font-family: 'Apercu Bold';
    src: url(${ApercuBold});
    weight: 800;
  }

  html {
    -webkit-font-smoothing: antialiased;
  }
`;

/*
  Base Styles
*/

export const Heading = styled.h1`
  font-family: 'Apercu Bold', sans-serif;
  font-size: 32px;
  margin: 0 0 4px 0;

  ${Above.sm`
    font-size: 48px;
  `}
`;

export const Subheading = styled.h2`
  font-family: 'Apercu Bold', sans-serif;
  font-size: ${props => props.tiny && "15px"};
  font-size: ${props => props.micro && "12px"};
  margin: 0;
  letter-spacing: .75px;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  font-family: ${props => props.strong ? "Apercu Medium" : "Apercu"}, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  ${ Utils.margin };
`;
