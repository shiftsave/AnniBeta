import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";

/*
 * Globals
 */

export default () => injectGlobal`
  ${styledNormalize}

  body {
    background: red;
  }
`;
