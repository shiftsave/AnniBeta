import styled from "styled-components";
import {
  HAZEL,
  COPPER,
  FLINT,
  CHARCOAL,
  CONCRETE,
  PAPER,
  EASE_OUT_BACK,
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

  &:hover {
    border-color: ${HAZEL};
  }

  &:focus {
    border-color: ${COPPER};
    outline: none;
  }

  ::placeholder {
    color: ${CONCRETE}
  }

  &.imageItem {
    background: ${PAPER};
    line-height: 2;
    min-height: 0;
    max-height: 50px;
    padding: 12px 16px 16px 16px;
    position: relative;
    transition: min-height 200ms ${EASE_OUT_BACK};
    transform: translate3d(0, 0, 0);
  }

  &.imageItem:focus,
  &.imageItem:hover {
    line-height: 1.6;
    min-height: 50px;
    padding: 16px;
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
  type: "radio"
})`
  position: ${props => props.hide ? "hidden" : "inherit"};
`;