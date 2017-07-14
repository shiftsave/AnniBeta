import React from "react";
import { Content, Heading, TextArea, ProjectSection } from "styled";

const Headline = ({ name, client, date, save }) => {
  return (
    <ProjectSection center>
      <Content>
        <Heading mb={24} capitalize>{name}</Heading>
        <TextArea
          value={client}
          placeholder="Enter client name"
          save={client => save({ client })}
          subheading
        />
      </Content>
    </ProjectSection>
  );
};

export default Headline;
