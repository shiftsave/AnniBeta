import React, { Component } from "react";
import { FeedbackSidebar, FeedbackItem, FeedbackList, TextArea } from "styled";

class FeedbackArea extends Component {
  constructor() {
    super();
    this.state = {
      isFeedbackListOpen: false,
    };
  }

  // Check for updates from parent component via props
  componentWillReceiveProps(nextProps) {
    const { show } = this.state;

    if (nextProps.show !== show) {
      this.setState({ show: nextProps.show });
    }
  }

  // Mount and dismount the Event Listener for keyboard events
  componentWillMount() {
    window.addEventListener("keyup", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyDown);
  }

  closeViewer = () => {
    this.setState({ show: false }, this.props.onClose);
  };

  handleKeyDown = e => {
    e.preventDefault();
    // TODO these should be keycodes
    // or at least use constants
    switch (e.key) {
      case "Escape":
        this.closeViewer();
        break;

      default:
        break;
    }
  };

  render() {
    const { show } = this.props;

    if (show) {
      return (
        <FeedbackSidebar>
          <FeedbackList>
            <FeedbackItem
              author="Ivan Cruz"
              feedback="Apples Butter Charlie Duff Edward Harry Ink Johnnie King London Monkey."
              time="4 min ago"
            />
            <FeedbackItem
              author="Mika Cruz"
              feedback="Duff Edward Freddy George Harry Ink Johnnie King Apples Butter Charlie."
              time="8 min ago"
            />
            <FeedbackItem
              author="Ivan Cruz"
              feedback="Apples Butter Charlie Duff Edward Harry Ink Johnnie King London Monkey."
              time="4 min ago"
            />
            <FeedbackItem
              author="Mika Cruz"
              feedback="Duff Edward Freddy George Harry Ink Johnnie King Apples Butter Charlie."
              time="8 min ago"
            />
            <FeedbackItem
              author="Ivan Cruz"
              feedback="Apples Butter Charlie Duff Edward Harry Ink Johnnie King London Monkey."
              time="4 min ago"
            />
            <FeedbackItem
              author="Mika Cruz"
              feedback="Duff Edward Freddy George Harry Ink Johnnie King Apples Butter Charlie."
              time="8 min ago"
            />
            <FeedbackItem
              author="Ivan Cruz"
              feedback="Apples Butter Charlie Duff Edward Harry Ink Johnnie King London Monkey."
              time="4 min ago"
            />
            <FeedbackItem
              author="Mika Cruz"
              feedback="Duff Edward Freddy George Harry Ink Johnnie King Apples Butter Charlie."
              time="8 min ago"
            />
          </FeedbackList>
          <TextArea placeholder="Enter comment..." sidebar />
        </FeedbackSidebar>
      );
    } else {
      return null;
    }
  }
}

export default FeedbackArea;
