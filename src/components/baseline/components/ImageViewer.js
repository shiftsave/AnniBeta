import React, { Component } from "react";
import classNames from "classnames";
import { Button } from "./Button";

export class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  // Mount and dismount the Event Listener for keyboard events
  componentWillMount() {
    window.addEventListener("keyup", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyDown);
  }

  // Check for updates from parent component via props
  componentWillReceiveProps(nextProps) {
    const { selection, show } = this.state;

    if (nextProps.selection !== selection || nextProps.show !== show) {
      this.setState({ selection: nextProps.selection, show: nextProps.show });
    }
  }

  // Image Viewer controls
  nextImage = () => {
    const nextImage = this.state.selection + 1;
    if (nextImage !== this.state.content.length) {
      this.setState({ selection: nextImage });
    }
  };

  prevImage = () => {
    const prevImage = this.state.selection - 1;
    // @hudakdidit Not sure if this is the best way to do this...
    if (prevImage !== -1) {
      this.setState({ selection: prevImage });
    }
  };

  handleKeyDown = e => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowLeft":
        this.prevImage();
        break;

      case "ArrowRight":
        this.nextImage();
        break;

      case "Escape":
        this.closeViewer();
        break;

      default:
        break;
    }
  };

  closeViewer = () => {
    this.setState({ show: false });
  };

  render() {
    const { className } = this.props;
    const { content, children, selection, show } = this.state;

    const styles = classNames({
      ImageViewer: true,
      className
    });

    if (show) {
      return (
        <div className={styles}>
          <div className="container">
            <img src={content[selection].url} alt={content[selection].name} />
          </div>
          <div className="toolbar">
            {children}
          </div>
          <div className="controls">
            <div className="nextImage" onClick={this.nextImage}>
              <Button link> Next </Button>
              <p className="hint">right-arrow</p>
            </div>
            <div className="previousImage" onClick={this.prevImage}>
              <Button link>Prev</Button>
              <p className="hint">left-arrow</p>
            </div>
            <div className="close" onClick={this.closeViewer}>
              <Button link>Close</Button>
              <p className="hint">esc</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
