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
  align-items: center;
  color: ${CONCRETE};
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  transition: 400ms ${EASE_OUT_EXPO};
  transform-origin: right;
  translate3d( 0, 0, 0);

  :hover {
    transform: scale(1.048);
  }

  &.checked {
    color: ${CHARCOAL};
  }
`;

export const Radio = styled.input.attrs({
	type: 'radio',
})`
  position: ${props => props.hide ? "hidden" : "inherit"};
`;
