import React, { Component } from "react";
import classNames from "classnames";
import { ImageViewer } from "./ImageViewer";
import { TextArea } from "./TextArea";

export class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: null,
      showViewer: false
    };
  }

  handleClick(selection) {
    this.setState({ selection, showViewer: true });
  }

  render() {
    const {
      content,
      children,
      className,
      references,
      storyboards
    } = this.props;
    const { showViewer, selection } = this.state;

    const styles = classNames({
      ImageList: true,
      className,
      references,
      storyboards
    });

    const folderItems = content.map((content, index) => {
      const src = !content.url ? content.preview : content.url;

      return (
        <div className="ImageListItem" key={index}>
          <div className="image" onClick={this.handleClick.bind(this, index)}>
            <img src={src} alt={content.name} />
          </div>
          <TextArea html="Enter description..." />
        </div>
      );
    });

    if (content) {
      return (
        <div>
          <ul className={styles}>
            {folderItems}
          </ul>
          <ImageViewer
            content={content}
            selection={selection}
            show={showViewer}
          >
            {children}
          </ImageViewer>
        </div>
      );
    } else {
      return null;
    }
  }
}
