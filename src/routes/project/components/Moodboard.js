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
        />
      : null;

    return (
      <div className="Moodboard">
        <div className="content">
          <h1>Moodboard</h1>
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
    this.props.reorderCollection({ path, collectionId }, items.map(i => ({ id: i.name })));
  }
}

export default FileManager(MoodboardViewer);
