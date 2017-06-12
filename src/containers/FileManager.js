import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadFile, getLink } from 'adapters';
import { addFile, addFileToCollection, updateCollection } from 'actions';
import AuthManager from './AuthManager';
import { getCollectionKey } from 'utils';

const getImageInfo = (src) => {
  return new Promise((done, fail) => {
    const img = new Image();
    img.onload = (e) => {
      done({
        width: img.width,
        height: img.height
      });
    }
    img.src = src;
  })
}

export default function FileManager(Component) {
  class Manager extends Component {
    uploadFiles(files, path, collectionId) {
      this.props.validateAuthentication();
      files.forEach(file => this.addFile(file, path, collectionId));
      return new Promise((resolve, reject) => {

        Promise.all(files.map(file => uploadFile(path, file)))
        .then(uploadedFiles => {
          Promise.all(uploadedFiles.map(file => getLink(file.path_display)))
          .then((linkedFiles) => {
            const processedFiles = uploadedFiles.map((f, i) => {
              const fileMeta = linkedFiles[i];
              fileMeta.url = fileMeta.url.replace(/.$/,"1");
              return { ...f, ...fileMeta }
            });
            processedFiles.forEach((file) => this.addFile(file, path, collectionId));
          });
        });
      });
    }
    addFile(file, path, collectionId) {
      if (Object.keys(this.props.projects.toJS()).filter(k => {
        return  this.props.projects.toJS()[k].name === path;
      }).length === 0) {
        console.log('gotta delete the folder agian');
        return;
      }
    
      if (this.props.files.get("archive").has(file.name) && this.props.files.get("archive").get(file.name).url) {
        // TODO: prevent double upload to dropbox if file name matches
        this.props.dispatch(addFileToCollection(file.name, path, collectionId));
      } else {
        const addImage = () => {
          this.props.dispatch(addFile(file, path));
          this.props.dispatch(addFileToCollection(file.name, path, collectionId));
        }
        if (file.url) {
          getImageInfo(file.url).then(({ width, height}) => {
            file.width = width;
            file.height = height;
            addImage();
          });
        } else {
          addImage();
        }
        
      }
    }
    getCollectionFiles(options) {
      const key = getCollectionKey(options);
      const files = this.props.files.toJS();
      return files.collections[key] ?
        files.collections[key].map(({ id }) => {
          return files.archive[id];
        }) : [];
    }

    reorderCollection(collectionKeyOptions, collection) {
      this.props.dispatch(updateCollection(getCollectionKey(collectionKeyOptions), collection));
    }
    render() {
      return <Component {...this.props} {...{
        uploadFiles: this.uploadFiles.bind(this),
        getCollectionFiles: this.getCollectionFiles.bind(this),
        reorderCollection: this.reorderCollection.bind(this)
      }} />;
    }
  }
  return connect((state) => state)(AuthManager(Manager));
}
