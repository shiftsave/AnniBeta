import React, { Component } from "react";
import constants from "constants";
import FileUploader from "components/FileUploader";
import FileManager from "containers/FileManager";
import { Loader } from "components/baseline";
import { ImageList } from "components/baseline";

const { MOODBOARD } = constants.content;

class MoodboardViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    const project = this.props.project;
    if (!project) {
      return null;
    }
    const path = this.props.projectPath;
    const collectionId = MOODBOARD;
    const images = this.props.getCollectionFiles({ path, collectionId });

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
      <div className="Moodboard">
        <div className="content">
          <h2>Moodboard</h2>
          <FileUploader
            path={this.props.projectPath}
            collection="moodboard">
            {list}
            {!project && <Loader />}
          </FileUploader>
        </div>
      </div>
    );
  }

  saveOrder = (items) => {
    const path = this.props.projectPath;
    const collectionId = MOODBOARD;
    this.props.reorderCollection({ path, collectionId }, items);
  }

  updateCollectionItem = (index, caption) => {
    const path = this.props.projectPath;
    const collectionId = MOODBOARD;
    this.props.updateCollectionItem({ path, collectionId }, index, caption);
  }
}

export default FileManager(MoodboardViewer);
