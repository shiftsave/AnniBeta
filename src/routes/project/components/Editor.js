import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import TextEditor from 'draft-js-plugins-editor';

import 'draft-js/dist/Draft.css';

import EditorToolbar from './EditorToolbar';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.plugins = [
      EditorToolbar
    ];
  }

  ComponentDidMount() {
    this.focus();
  }

  onChange = (editorState) => {
    this.setState ({ editorState });
  }

  focus = () => {
    this.editor.focus();
  }

  render() {
    const { editorState } = this.state;

    return (
      <div className='Script'>
        <div className="content">
          <h1>Script</h1>
          <TextEditor
            editorState={editorState}
            onChange={this.onChange}
            ref={(element) => { this.editor = element; }}
            plugins={this.plugins}
            placeholder="Start writing your script..."
            spellcheck
          />
        </div>
      </div>
    )
  }
}

export default Editor;
