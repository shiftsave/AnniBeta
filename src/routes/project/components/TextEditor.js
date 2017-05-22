import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState, RichUtils, getVisibleSelectionRect } from 'draft-js'
import createCounterPlugin from 'draft-js-counter-plugin';

const counterPlugin = createCounterPlugin();
const { CharCounter, WordCounter, LineCounter, CustomCounter } = counterPlugin;
const plugins = [counterPlugin];


class StyleButton extends Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'toolbarItem';
    if (this.props.active) {
      className += ' active';
    }
    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const styleTypes = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Strikethrough', style: 'STRIKETHROUGH'}
];

const condensedStyleTypes = [
  {label: 'B', style: 'BOLD'},
  {label: 'I', style: 'ITALIC'},
  {label: 'U', style: 'UNDERLINE'},
  {label: 'S', style: 'STRIKETHROUGH'}
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="InlineStyleControls">
      {!props.condensed ?
        styleTypes.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )
      :
      condensedStyleTypes.map(type =>
      <StyleButton
        key={type.label}
        active={currentStyle.has(type.style)}
        label={type.label}
        onToggle={props.onToggle}
        style={type.style}
      />
    )
    }
    </div>
  );
};

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      styles: { opacity: 1 }
    };

    this.focus = () => this.refs.editor.focus();

    this.onChange = (editorState) => {
      this.setState({ editorState });
    }

    this.toggleBlockType = (blockType) => {
      this.onChange(
        RichUtils.toggleBlockType(
          this.state.editorState,
          blockType
        )
      );
    }

    this.toggleInlineStyle = (inlineStyle) => {
      this.onChange(
        RichUtils.toggleInlineStyle(
          this.state.editorState,
          inlineStyle
        )
      );
    }

    this.handleKeyCommand = (command) => {
      const {editorState} = this.state;
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }

    this.displayContextualMenu = () => {
      const toolbarDimensions = { width: 156, height: 60 }
      const selectedText = getVisibleSelectionRect(window);
      const toolbarParent = this.toolbarParent.getBoundingClientRect()

      if (selectedText.width > 2) {
        this.setState({
          styles: {
            top: selectedText.top - toolbarParent.top - toolbarDimensions.height,
            left: selectedText.left -toolbarParent.left - toolbarDimensions.width/2 + selectedText.width/2,
            opacity: 1
          }
        });
      } else {
        this.setState({ styles: { top: -999, opacity: 0 }})
      }
    }
  }

  averageReadingTime(str) {
    const wordArray = str.match(/\S+/g);  // matches words according to whitespace
    return wordArray ? (new Date((wordArray.length/3) * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0] : "00:00:00"
  }

  render() {
    const { editorState, styles } = this.state;

    return (
      <div className='TextEditor' ref={toolbarParent => this.toolbarParent = toolbarParent}>
        <div
        className="ContextualToolbar"
        style={styles}>
          <InlineStyleControls condensed
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
        </div>
        <h1>Script</h1>
        <div className='content'>
          <div className='Editor' onClick={this.focus} onMouseUp={this.displayContextualMenu}>
            <Editor
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              placeholder="Start writing here..."
              plugins={plugins}
              ref="editor"
              spellCheck={true}
            />
          </div>
          <div className="Toolbar">
            <InlineStyleControls
              editorState={editorState}
              onToggle={this.toggleInlineStyle}
            />
            <div className="stats">
              <div><CharCounter /> characters</div>
              <div><WordCounter /> words</div>
              <div><LineCounter /> lines</div>
              <div>Reading time{" "}<CustomCounter countFunction={this.averageReadingTime} /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
