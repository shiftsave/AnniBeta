import React, { Component } from "react";
import constants from "constants";
import { updateProject } from "actions";
import FileUploader from "components/FileUploader";
import ImageItem from "components/Image";
import FileManager from "containers/FileManager";
import { Loader } from "components/baseline";
import SortableList from "components/SortableList";
import { Button } from "components/baseline";

const { MOODBOARD } = constants.content;

class MoodboardViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      reordering: false,
      newItemsOrder: null
    };
  }

  render() {
    const project = this.props.project;
    if (!project) {
      return null;
    }
    const { id } = project;
    const path = this.props.projectPath;
    const collectionId = MOODBOARD;
    const images = this.props.getCollectionFiles({ path, collectionId });
    const list = images && images.length
      ? <SortableList
          enableReorder={this.state.reordering}
          containerClass="ImageList"
          itemClass="ImageListItem"
          items={images}
          onReorder={(items) => this.setState({ newItemsOrder: items.map(i => ({ id: i.name }))})}
        >
          <ImageItem />
        </SortableList>
      : null;
    const imageList = this.state.reordering
      ? list
      : <FileUploader
          path={this.props.projectPath}
          collection="moodboard"
          onUpload={images =>
            this.props.dispatch(updateProject({ id, images }))}
        >
          {list}
          {!project && <Loader />}
        </FileUploader>;
    const reorderButtons = (
      <div>
        <Button onClick={() => this.setState({ reordering: true })}>
            Reorder
          </Button>
          {this.state.reordering
            ? <Button onClick={this.saveOrder.bind(this)}>Save Order</Button>
            : null}
      </div>
    );
    return (
      <div className="Moodboard">
        <div className="content">
          <h1>Moodboard</h1>
          {images && images.length > 1 ? reorderButtons : null}
          {imageList}
        </div>
      </div>
    );
  }

  saveOrder() {
    const path = this.props.projectPath;
    const collectionId = MOODBOARD;
    this.props.reorderCollection({ path, collectionId }, this.state.newItemsOrder);
    this.setState({
      reordering: false
    });
  }
}

export default FileManager(MoodboardViewer);
