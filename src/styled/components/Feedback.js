import styled from "styled-components";
import _FeedbackItem from "components/FeedbackItem";
import {PAPER, CONCRETE } from "./Variables";

export const FeedbackItem = styled(_FeedbackItem)`
  box-shadow: ${props => props.contextual && `4px 4px 24px 0 ${CONCRETE}`};
  display: flex;
  max-width: 400px;
  padding: 16px;
  width: auto;

  .arrow {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;

    border-right:10px solid ${PAPER};
  }

`;
