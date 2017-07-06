import React from "react";
import { browserHistory } from "react-router";

import {
  ButtonGroup,
  ButtonLink,
  Card,
  CardDetails,
  CardControls,
  Grid,
  OutlineIcon,
  Image,
  Subheading,
  Paragraph
} from "styled";

import tempImage from "media/adidas.png";

export const ProjectList = ({ children }) => {
  return (
    <Grid>
      {children}
    </Grid>
  );
};

export const ProjectListItem = ({ name, client, image, link }) => {
  return (
    <Card active>
      <Image src={image ? image : tempImage} alt={name} onClick={() => browserHistory.push(link)} />
      <CardDetails onClick={() => browserHistory.push(link)}>
        <Paragraph strong>{name}</Paragraph>
        <Paragraph>{client ? client : "Client Name"}</Paragraph>
      </CardDetails>
      <CardControls>
        <Subheading micro>Due May 21</Subheading>
        <ButtonGroup mr={-16}>
        <ButtonLink>
          <OutlineIcon name="confirm" size={16} strokeWidth={4} />
        </ButtonLink>
        <ButtonLink>
          <OutlineIcon name="view" size={16} strokeWidth={4} />
        </ButtonLink>
        <ButtonLink>
          <OutlineIcon name="delete" size={16} strokeWidth={4} />
        </ButtonLink>
      </ButtonGroup>
      </CardControls>
    </Card>
  );
};
