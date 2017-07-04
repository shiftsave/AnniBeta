import React from "react";
import {Card, Grid, Image, Paragraph } from 'styled';

export const ProjectList = ({ children }) => {
  return (
    <Grid>
      {children}
    </Grid>
  );
};

export const ProjectListItem = ({ name, client, image }) => {

  return (
    <Card>
      <Image src={image} alt={name} />
      <div className="details">
        <Paragraph strong>{name}</Paragraph>
        <Paragraph>{client ? client : "Client Area"}</Paragraph>
      </div>
    </Card>
  );
};
