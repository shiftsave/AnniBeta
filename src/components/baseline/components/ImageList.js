import React from "react";
import classNames from "classnames";

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
      <div className="image" key={content.name}>
        <img src={src} alt={content.name} />
      </div>
    );
  });

  return (
    <ul className={styles}>
      {folderItems}
    </ul>
  );
};
