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
