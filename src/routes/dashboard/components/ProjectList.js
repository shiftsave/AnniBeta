import React from "react";
import { browserHistory } from "react-router";

import { Card, CardDetails, Grid, Image, Paragraph } from "styled";
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
    <Card onClick={() => browserHistory.push(link)}>
      <Image src={image ? image : tempImage} alt={name} />
      <CardDetails>
        <Paragraph strong>{name}</Paragraph>
        <Paragraph>{client ? client : "Client Area"}</Paragraph>
      </CardDetails>
    </Card>
  );
};
