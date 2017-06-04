import React from "react";
import classNames from "classnames";
import { TextArea } from './TextArea';

export const ImageList = ({ content, className, references, storyboards }) => {
  if (!content) {
    return null;
  }

  const styles = classNames({
    ImageList: true,
    references,
    storyboards,
    [className]: className
  });

  const folderItems = content.map(content => {
    const src = !content.url ? content.preview : content.url;
    return (
      <div className="ImageListItem" key={content.name}>
        <div className="imageArea">
          <img className="image" src={src} alt={content.name} />
          <div className="shadow" />
        </div>
        <TextArea html="Enter description..."/>
      </div>
    );
  });

  return (
    <ul className={styles}>
      {folderItems}
    </ul>
  );
};
