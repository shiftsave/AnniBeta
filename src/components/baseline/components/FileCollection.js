import React, { Component } from "react";
import FileUploader from "components/FileUploader";
import FileManager from "containers/FileManager";
import { Loader } from "components/baseline";
import { ImageList } from "components/baseline";

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    const {
        className,
        collectionId,
        project,
        getCollectionFiles,
        projectPath,
        references,
        storyboards,
        styleframes,
        title
    } = this.props;

    const images = getCollectionFiles(this.collectionKeyOptions);

    const list = images && images.length
      ? <ImageList
          containerClass="ImageList"
          content={images}
          itemClass="ImageListItem"
          onReorder={this.saveOrder}
          references={references}
          storyboards={storyboards}
          styleframes={styleframes}
          updateCollectionItem={this.updateCollectionItem}
        />
      : null;

    return (
      <div>
        <div className="content">
          <div className={className || title}>
            <h2>{title}</h2>
          </div>
          <FileUploader
            path={projectPath}
            collection={collectionId}>
            {list}
            {!project && <Loader />}
          </FileUploader>
        </div>
      </div>
    );
  }

  get collectionKeyOptions() {
      const { collectionId, projectPath } = this.props;
      return {
        path: projectPath,
        collectionId
      }
  }

  saveOrder = (items) => {
    this.props.reorderCollection(this.collectionKeyOptions, items);
  }

  updateCollectionItem = (index, caption) => {
    this.props.updateCollectionItem(this.collectionKeyOptions, index, caption);
  }
}

export const FileCollection =  FileManager(Collection);
