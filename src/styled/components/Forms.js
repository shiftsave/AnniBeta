import styled from "styled-components";
import { HAZEL, COPPER, FLINT, CHARCOAL, EASE_OUT_EXPO } from "./Variables";

import { TextArea as BaseTextArea } from "components/Forms";

export const TextArea = styled(BaseTextArea)`
  border: none;
  border-bottom: 1px solid ${FLINT};
  color: ${CHARCOAL};
  font-family: "Apercu";
  font-size: 18px;
  height: 44px;
  min-width: 290px;
  transition: 200ms ${EASE_OUT_EXPO};
  width: 100%;

  :hover {
    border-color: ${HAZEL};
  }

  :focus {
    border-color: ${COPPER};
    outline: none;
  }
`;

export const FormGroup = styled.form`
  align-items: center;
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${FLINT};
  color: ${CHARCOAL};
  font-family: "Apercu";
  font-size: 18px;
  height: 44px;
  min-width: 290px;
  transition: 200ms ${EASE_OUT_EXPO};
  width: 100%;

  :hover {
    border-color: ${HAZEL};
  }

  :focus {
    border-color: ${COPPER};
    outline: none;
  }
`;
