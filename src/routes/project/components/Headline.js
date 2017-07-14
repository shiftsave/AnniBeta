import React from "react";
import { TextArea, Section, Heading } from "styled";

const Headline = ({ name, client, date, save }) => {
  return (
    <Section>
      <Heading>{name}</Heading>
      <TextArea
        value={name}
        placeholder="Enter client name"
        save={client => save({ client })}
        heading
      />
      <TextArea
        value={client}
        placeholder="Enter client name"
        save={client => save({ client })}
        subheading
      />
    </Section>
  );
};

export default Headline;
