import React, { Component } from "react";
import classNames from "classnames";
import { TextArea } from "./TextArea";
import { ImageViewer } from "./ImageViewer";

export class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: {},
      isViewerVisible: false,
    };
  }

  handleClick(selection) {
    this.setState({ selection, isViewerVisible: true });
  }

  render() {
    const { content, className, references, storyboards } = this.props;
    const { isViewerVisible, selection } = this.state;

    const styles = classNames({
      ImageList: true,
      className,
      references,
      storyboards
    });

    const folderItems = content.map((content, index) => {
      const src = !content.url ? content.preview : content.url;

      return (
        <div
          className="ImageListItem"
          key={content.name}
          onClick={this.handleClick.bind(this, index)}
        >
          <div className="imageArea">
            <img className="image" src={src} alt={content.name} />
            <div className="shadow" />
          </div>
          <TextArea html="Enter description..." />
        </div>
      );
    });

    if (!content) {
      return null;
    } else {
      return (
        <div>
          <ul className={styles}>
            {folderItems}
          </ul>
          {isViewerVisible && <ImageViewer content={content} selection={selection} />}
        </div>
      );
    }
  }
}
