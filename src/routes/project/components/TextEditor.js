import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

   // Key shortcuts for bold, italics and underline
  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  onChange = (editorState) => {
    this.setState ({ editorState });
  }

  render() {
    return (
      <div className='TextEditor'>
        <div className="content">
          <h1>Script</h1>
          <Editor
            className="Editor"
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            placeholder="Start writing your script..."
            spellcheck
          />
        </div>
      </div>
    )
  }
}

export default TextEditor;
