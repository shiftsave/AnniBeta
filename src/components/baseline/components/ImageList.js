import React, { Component } from "react";
import classNames from "classnames";
import { ImageViewer } from "./ImageViewer";
import { Icon, TextArea, ImageElement } from "components/baseline";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";

export const ImageListItem = SortableElement(({
  content,
  index,
  handleClick,
  onCaptionUpdate,
  children
}) => {
  const src = !content.url ? content.preview : content.url;

  return (
    <div className="ImageListItem" key={index}>
      <div className="content">
        
        <ImageElement src={src} className="image">
          <img src={src} alt={content.name} />
          <button
              className="Image-popoutButton viewTarget"
              onClick={handleClick}
            >
              <Icon name="popout" size={20} />
            </button>
        </ImageElement>

        <TextArea
          className="textArea"
          value={content.caption}
          placeholder="Enter description..."
          onChange={({ target }) => onCaptionUpdate({ caption: target.value })}
        />
        {children}
      </div>
    </div>
  );
});

const ImageGrid = SortableContainer(({ items, className, handleClick, onCaptionUpdate, children }) => {
  const listItems = items.map((item, index) => (
    <ImageListItem
      key={`imageListItem${index}`}
      content={item}
      index={index}
      handleClick={() => handleClick(index)}
      onCaptionUpdate={(content) => onCaptionUpdate(index, content)}
    >
      {children}
    </ImageListItem>
  ));
  return <div className={className}>{listItems}</div>;
});

export class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: null,
      showViewer: false,
      items: props.content
    };
  }

  componentWillReceiveProps({ content }) {
    this.setState({ items: content });
  }

  handleClick = selection => this.setState({ selection, showViewer: true });

  onSortEnd = ({ oldIndex, newIndex }) =>
    this.props.onReorder(arrayMove(this.state.items, oldIndex, newIndex));

  shouldCancelStart = e => {
    // check classname
    const disabledClasses = ["viewerTarget", "disableDnD"];
    const targetClassNames = e.target.className &&
      typeof e.target.className === "string"
      ? e.target.className.split(" ")
      : [];
    let isDisabledClass = false;
    targetClassNames.forEach(c => {
      if (disabledClasses.indexOf(c) !== -1) {
        isDisabledClass = true;
      }
    });

    // check tagName
    const disabledElements = [
      "input",
      "textarea",
      "select",
      "option",
      "button"
    ];

    const isDisabledElement = disabledElements.indexOf(
      e.target.tagName.toLowerCase()
    ) !== -1;

    return isDisabledClass || isDisabledElement;
  };

  render() {
    const {
      content,
      children,
      className,
      references,
      storyboards,
      updateCaption
    } = this.props;
    const { showViewer, selection } = this.state;

    const imageViewer = showViewer
      ? <ImageViewer
          content={content}
          selection={selection}
          show={showViewer}
          onClose={() => {
            this.setState({
              selection: null,
              showViewer: false
            });
          }}
        >
          {children}
        </ImageViewer>
      : null;

    const styles = classNames({
      ImageList: true,
      className,
      references,
      storyboards
    });

    if (content) {
      return (
        <div className="ImageListWrapper">
          <ImageGrid
            helperClass={"dragHelper"}
            axis="xy"
            className={styles}
            items={this.state.items}
            onSortEnd={this.onSortEnd}
            handleClick={this.handleClick}
            shouldCancelStart={this.shouldCancelStart}
            onCaptionUpdate={updateCaption}
          >
            {children}
          </ImageGrid>
          {imageViewer}
        </div>
      );
    } else {
      return null;
    }
  }
}
