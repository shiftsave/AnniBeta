import React from "react";
import { FeedbackItem, Card, CodeBlock, Subheading } from "styled";

const Buttons = () => (
  <Card mb={24} padded>
    <Subheading mb={24}>Feedback</Subheading>

    <Subheading capitalize color micro mb={8}>Feedback Item</Subheading>
    <FeedbackItem
      author="Ivan Cruz"
      feedback="Apples Butter Charlie Duff Edward Freddy George Harry Ink Johnnie King London Monkey."
      time="4 min ago"
    />
    <FeedbackItem
      author="Mika Cruz"
      feedback="Duff Edward Freddy George Harry Ink Johnnie King Apples Butter Charlie."
      time="8 min ago"
    />

    <Subheading capitalize color micro mt={24} mb={16}>Contextual Feedback Item</Subheading>
    <FeedbackItem
      arrow="left"
      author="Jonathan Hudak"
      feedback="Apples Butter Charlie Duff Edward Freddy George Harry Ink Johnnie King London Monkey."
      time="4 min ago"
      contextual
    />

    <CodeBlock>
{`import {} from "styled";

const Buttons = () => (
  ...
);

// Props
`}
    </CodeBlock>
  </Card>
)
export default Buttons;
