import React, { Component } from 'react';

import 'medium-draft/lib/index.css';

import {
  Editor,
  createEditorState,
} from 'medium-draft';

export default class TextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorState()
    };
  }

  inlineButtons = [
    {
      label: 'B',
      style: 'BOLD',
      description: 'Bold',
    }, {
      label: 'I',
      style: 'ITALIC',
      description: 'Italic',
    }, {
      label: 'U',
      style: 'UNDERLINE',
      description: 'Underline',
    }, {
      label: 'S',
      style: 'STRIKETHROUGH',
      description: 'Strikethrough',
  }];

  onChange = (editorState) => {
    this.setState({ editorState });
  };

  componentDidMount() {
    this.refs.editor.focus();
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="TextEditor">
        <h1>Script</h1>
        <div className="content">
          <div className="Editor" onClick={this.focus}>
            <Editor
              ref="editor"
              editorState={editorState}
              onChange={this.onChange}
              inlineButtons={this.inlineButtons}
              blockButtons={[]}
              sideButtons={[]}
             />
          </div>
        </div>
      </div>
    );
  }
};
