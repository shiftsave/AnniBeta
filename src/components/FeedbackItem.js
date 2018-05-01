import React from "react";
import PropTypes from "prop-types";
import { Avatar, Paragraph, TextArea } from "styled";

const _FeedbackItem = (
  {
    author,
    avatar,
    content,
    className,
    contextual,
    feedback,
    time
  }
) => {
  return (
    <div>
      <div className={className}>
        {contextual && <div className="arrow" />}
        <Avatar initial="I" mr={12} />
        <div className="content">
          <Paragraph color strong>{author}</Paragraph>
          <Paragraph>{feedback}</Paragraph>
          <Paragraph subtle small>
            {time}
          </Paragraph>
        </div>
      </div>
      {contextual && <TextArea />}
    </div>
  );
};

// Define Prop Types
_FeedbackItem.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.object,
  contextual: PropTypes.bool,
  feedback: PropTypes.string,
  time: PropTypes.string
};

export default _FeedbackItem;
