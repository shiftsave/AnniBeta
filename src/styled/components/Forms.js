import styled from "styled-components";
import {
  HAZEL,
  COPPER,
  FLINT,
  CHARCOAL,
  CONCRETE,
  EASE_OUT_EXPO
} from "./Variables";

import { TextArea as BaseTextArea } from "components/Forms";

export const TextArea = styled(BaseTextArea)`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${FLINT};
  color: ${CHARCOAL};
  font-family: ${props => props.subheading ? "Apercu Bold" : "Apercu"};
  font-size: ${props => props.subheading ? "24px" : "16px"};
  height: 30px;
  resize: none;
  transition: 200ms ${EASE_OUT_EXPO};
  width: 100%;

  :hover {
    border-color: ${HAZEL};
  }

  :focus {
    border-color: ${COPPER};
    outline: none;
  }

  ::placeholder {
    color: ${CONCRETE}
  }
`;

export const FormGroup = styled.form`
  background: red;
`;

export const Label = styled.label`
  color: red;
`;
