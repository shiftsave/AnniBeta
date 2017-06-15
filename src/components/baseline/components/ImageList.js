import React, { Component } from "react";
import classNames from "classnames";
import { ImageViewer } from "./ImageViewer";
import { Button, TextArea } from "components/baseline";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";

/*
 * Image List Item
 */

export const ImageListItem = SortableElement(({
  children,
  content,
  index,
  className,
  handleClick,
  onCaptionUpdate,
  reference,
  storyboard,
  size
}) => {
  const src = !content.url ? content.preview : content.url;

  const styles = classNames({
    ImageListItem: true,
    [className]: className,
    [content.size]: content.size
  });

  const resizeButton = (
    <div className="resizeButton">
      <div className="full" />
      <div className="long" />
      <div className="tall" />
      <div className="base" />
    </div>
  );

  return (
    <div className={styles} key={index}>
      <div className="content">
        <div className="image">
          <img src={src} alt={content.name} />
        </div>

        {reference &&
          <TextArea
            placeholder="Enter description..."
            onChange={({ target }) =>
              onCaptionUpdate({ caption: target.value })}
            value={content.caption}
          />}

        {storyboard &&
          <div>
            <TextArea
              icon="audio"
              placeholder="Audio"
              onChange={({ target }) =>
                onCaptionUpdate({ video: target.value })}
              value={content.audio}
            />
            <TextArea
              icon="video"
              placeholder="Video"
              onChange={({ target }) =>
                onCaptionUpdate({ audio: target.value })}
              value={content.video}
            />
          </div>}

        <div className="panelControls">
          {reference && resizeButton}
          <Button icon="popout" onClick={handleClick} noPadding />
          <Button icon="delete" noPadding />
        </div>
      </div>
    </div>
  );
});

/*
 * Image Grid
 */

const ImageGrid = SortableContainer(({
  items,
  className,
  handleClick,
  onCaptionUpdate,
  children,
  reference,
  storyboard,
  type
}) => {
  const listItems = items.map((item, index) => (
    <ImageListItem
      key={`imageListItem${index}`}
      content={item}
      index={index}
      handleClick={() => handleClick(index)}
      onCaptionUpdate={content => onCaptionUpdate(index, content)}
      // onSizeUpdate={func()}  T
      // @hudakdidit we need to implement a way to persist the size
      storyboard={storyboard}
      reference={reference}
    >
      {children}
    </ImageListItem>
  ));
  return <div className={className}>{listItems}</div>;
});

/*
 * Image List
 */

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
            reference={references}
            storyboard={storyboards}
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
