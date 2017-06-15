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
    const project = this.props.project;

    const {
        className,
        collectionId,
        title,
        projectPath,
        getCollectionFiles
    } = this.props;

    const images = getCollectionFiles(this.collectionKeyOptions);

    const list = images && images.length
      ? <ImageList
          references
          containerClass="ImageList"
          itemClass="ImageListItem"
          content={images}
          onReorder={this.saveOrder}
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
